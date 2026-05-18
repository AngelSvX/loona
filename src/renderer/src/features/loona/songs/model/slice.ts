import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongState } from "./types";
import { Song } from "@renderer/entities/song/model/types";
import { uploadSongToLibrary } from "./thunks";

export const initialState: SongState = {
    songs: [],
    songLoading: false,
    songError: null
}

export const songsSlice = createSlice({
    name: 'songs',
    initialState: initialState,
    reducers: {
        addMusic: () => {

        },
        deleteMusic: () => {
            // Eliminar música
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadSongToLibrary.pending, (state) => {
                (state.songLoading = true), (state.songError = null)
            })
            .addCase(uploadSongToLibrary.fulfilled, (state) => {
                (state.songLoading = false)
            })
            .addCase(uploadSongToLibrary.rejected, (state) => {
                (state.songLoading = false), (state.songError = "Error al subir la música")
            })
    }
})

export const { } = songsSlice.actions;
export default songsSlice.reducer;