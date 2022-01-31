import { configureStore } from '@reduxjs/toolkit'
import bottlesValidationReducer from './bottlesValidationSlice'
import levelBuilderReducer from './levelBuilderSlice'

export const store = configureStore({
  reducer: {
    levelBuilder: levelBuilderReducer,
    bottlesValidation: bottlesValidationReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch