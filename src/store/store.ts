import { configureStore } from '@reduxjs/toolkit'
import LevelValidationReducer from './levelValidationSlice'
import levelBuilderReducer from './levelBuilderSlice'
import solutionReducer from './solutionSlice'
import levelReducer from './levelSlice'

export const store = configureStore({
  reducer: {
    levelBuilder: levelBuilderReducer,
    levelValidation: LevelValidationReducer,
    level: levelReducer,
    solution: solutionReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
