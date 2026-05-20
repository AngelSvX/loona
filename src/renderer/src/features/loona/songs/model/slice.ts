import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongState } from "./types";
import { Song } from "@renderer/entities/song/model/types";
import { getSongsToLibrary, uploadSongToLibrary } from "./thunks";

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
        builder
            .addCase(getSongsToLibrary.pending, (state) => {
                (state.songLoading = true), (state.songError = null)
            })
            .addCase(getSongsToLibrary.fulfilled, (state, action: PayloadAction<Song[]>) => {

                const imageModules = import.meta.glob<string>(
                '../../../../shared/images/*.{jpg,jpeg,png}',
                {
                    eager: true,
                    import: 'default'
                }
                );

                const images = Object.values(imageModules);

                state.songs = action.payload.map(song => ({
                ...song,
                image:
                    images[
                    Math.floor(Math.random() * images.length)
                    ]
                }));

                (state.songLoading = false)
            })
            .addCase(getSongsToLibrary.rejected, (state) => {
                (state.songLoading = false), (state.songError = "Un error ocurrió al traer las músicas D:")
            })
    }
})

export const { } = songsSlice.actions;
export default songsSlice.reducer;