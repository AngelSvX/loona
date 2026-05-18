// De momento no se llama a ninguna API

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