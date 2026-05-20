import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import { app, BrowserWindow, dialog, ipcMain, shell } from 'electron'
import path, { join } from 'path'
import icon from '../../resources/icon.png?asset'
import fs from 'fs'
import * as mm from 'music-metadata'

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 450,
    height: 650,
    show: false,
    autoHideMenuBar: true,
    resizable: false,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

export function saveSong(filePath: string) {
  const songDir = path.join(app.getPath('userData'), 'songs')

  if (!fs.existsSync(songDir)) {
    fs.mkdirSync(songDir, { recursive: true })
  }

  const fileName = path.basename(filePath);

  const destination = path.join(songDir, fileName)

  fs.copyFileSync(filePath, destination)

  return {
    fileName,
    path: destination
  }

}

export async function getSongs() {
  const songDir = path.join(app.getPath('userData'), 'songs')
  if (!fs.existsSync(songDir)) return []

  const files = fs.readdirSync(songDir)
    .filter(file => ['.mp3', '.wav', '.mp4'].includes(path.extname(file).toLowerCase()))

  const songs = await Promise.all(files.map(async (fileName, index) => {
    const filePath = path.join(songDir, fileName)
    const metadata = await mm.parseFile(filePath)

    const seconds = Math.floor(metadata.format.duration ?? 0)
    const duration = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`

    return {
      id: index,
      fileName,
      path: filePath,
      name: metadata.common.title ?? fileName,
      author: metadata.common.artist ?? 'Desconocido',
      duration,
      genre: metadata.common.genre?.[0] ?? 'Sin género',
    }
  }))

  return songs
}

// Abrir selector de archivo
ipcMain.handle('select-song', async () => {
  const result = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [
      { name: 'Music', extensions: ['mp3', 'wav', 'mp4'] }
    ]
  });

  if (result.canceled) return null;

  return result.filePaths[0];
});

// Guardar canción
ipcMain.handle('save-song', async (_, filePath: string) => {
  const result = saveSong(filePath)
  console.log(result)
  return result
});

// Obtener músicas de la carpeta
ipcMain.handle('get-songs', async () => {
  return await getSongs()
})