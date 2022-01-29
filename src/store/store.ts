import { configureStore } from '@reduxjs/toolkit'
import levelBuilderReducer from './levelBuilderSlice'

export const store = configureStore({
  reducer: {
    levelBuilder: levelBuilderReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch