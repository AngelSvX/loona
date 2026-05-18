import { Song } from "@renderer/entities/song/model/types";

export interface SongState {
    songs: Song[]
    songLoading: boolean,
    songError: string | null
}

