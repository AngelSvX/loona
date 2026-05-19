import { ElectronAPI } from '@electron-toolkit/preload'
import { Song } from '@renderer/entities/song/model/types'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      selectSong: () => Promise<string | null>
      saveSong: (filePath: string) => Promise<{ fileName: string; path: string }>
      getSongs: () => Promise<Song[]>
    }
  }
}

export {}