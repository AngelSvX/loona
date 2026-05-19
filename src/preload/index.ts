// preload.ts
import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', {
      selectSong: () => ipcRenderer.invoke('select-song'),
      saveSong: (filePath: string) => ipcRenderer.invoke('save-song', filePath),
      getSongs: () => ipcRenderer.invoke('get-songs')
    })
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = {
    selectSong: () => ipcRenderer.invoke('select-song'),
    saveSong: (filePath: string) => ipcRenderer.invoke('save-song', filePath),
    getSongs: () => ipcRenderer.invoke('get-songs')
  }
}