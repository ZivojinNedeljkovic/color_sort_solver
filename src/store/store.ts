import { configureStore } from '@reduxjs/toolkit'
import bottlesValidationReducer from './bottlesValidationSlice'
import levelBuilderReducer from './levelBuilderSlice'
import solutionReducer from './solutionSlice'

export const store = configureStore({
  reducer: {
    levelBuilder: levelBuilderReducer,
    bottlesValidation: bottlesValidationReducer,
    solution: solutionReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
