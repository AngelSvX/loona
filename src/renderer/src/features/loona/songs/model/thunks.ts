import { createAsyncThunk } from "@reduxjs/toolkit";

export const uploadSongToLibrary = createAsyncThunk(
    'song/uploadSong',
    async () => {
        const filePath = await window.api.selectSong();
        if (!filePath) return;
        const result = await window.api.saveSong(filePath);
        return result
    }
)

export const getSongsToLibrary = createAsyncThunk(
    'song/getSongs',
    async () => {
        const data = await window.api.getSongs();
        if (!data) return [];
        return data;
    }
)