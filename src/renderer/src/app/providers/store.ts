import { configureStore } from '@reduxjs/toolkit'
import songsSlice from '../../features/loona/songs/model/slice'

export const store = configureStore({
    reducer: {
        song: songsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;