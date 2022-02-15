import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getLevelId, Level } from '../models/level'

export type levelState = {
  level?: Level
  levelId?: string
}

const getInitialState = (): levelState => ({
  level: undefined,
  levelId: undefined,
})

const levelSlice = createSlice({
  name: 'level',
  initialState: getInitialState,
  reducers: {
    setLevel(_, { payload: level }: PayloadAction<Level>) {
      return { level, levelId: getLevelId(level) }
    },

    clearLevelState() {
      return getInitialState()
    },
  },
})

export const { setLevel, clearLevelState } = levelSlice.actions

export default levelSlice.reducer
