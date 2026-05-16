import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
    // Aquí se agrega cada reducer creado en nuestro slice
    reducer: {

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;