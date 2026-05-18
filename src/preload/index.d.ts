import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      selectSong: () => Promise<string | null>
      saveSong: (filePath: string) => Promise<{ fileName: string; path: string }>
    }
  }
}

export {}