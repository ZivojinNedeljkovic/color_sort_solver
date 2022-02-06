import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Bottle, getEmptyBottle, getEmptyBottles } from '../models/bottle'
import {
  getNumOfFieldsColoredWith,
  isPositiveInteger,
} from './helpers/levelBuilderHelpers'

type LevelBuilderState = {
  bottles: Bottle[]
  selectedColor?: string
  maxNumberOfBottlesPerRow: number
  setMaxNumberOfBottlesPerRowError: string
  setNumberOfBottlesError: string
  setFiledError: string
}

const initialState: LevelBuilderState = {
  bottles: [
    ['#EE3231', '#67C1FF', '#FB98F3', '#F25298'],
    ['#FAD749', '#AE1AB0', '#9AD85D', '#4DD5AD'],
    ['#EE3231', '#9AD85D', '#9AD85D', '#FB6A79'],
    ['#FAD749', '#FAD749', '#67C1FF', '#4DD5AD'],
    ['#F25298', '#6B67D8', '#FEAFA2', '#F7A036'],
    ['#FAD749', '#FB98F3', '#6B67D8', '#FB98F3'],
    ['#67C1FF', '#AE1AB0', '#4DD5AD', '#F7A036'],
    ['#FEAFA2', '#F25298', '#67C1FF', '#EE3231'],
    ['#9AD85D', '#F7A036', '#6B67D8', '#FEAFA2'],
    ['#4DD5AD', '#6B67D8', '#F7A036', '#FB98F3'],
    ['#AE1AB0', '#FB6A79', '#FEAFA2', '#FB6A79'],
    ['#F25298', '#FB6A79', '#AE1AB0', '#EE3231'],
    [undefined],
    [],
  ],
  maxNumberOfBottlesPerRow: 5,
  setMaxNumberOfBottlesPerRowError: '',
  setNumberOfBottlesError: '',
  setFiledError: '',
}

const levelBuilderSlice = createSlice({
  name: 'levelBuilder',
  initialState,
  reducers: {
    setNumberOfBottles(
      state,
      { payload: newNumOfBottles }: PayloadAction<number>
    ) {
      if (!isPositiveInteger(newNumOfBottles)) {
        state.setNumberOfBottlesError = 'Must be a positive integer.'
        return
      }

      if (newNumOfBottles > 20) {
        state.setNumberOfBottlesError = 'Must be less then 21.'
        return
      }

      state.setNumberOfBottlesError = ''

      while (newNumOfBottles > state.bottles.length)
        state.bottles.push(getEmptyBottle())

      while (newNumOfBottles < state.bottles.length) state.bottles.pop()
    },

    setMaxNumberOfBottlesPerRow(
      state,
      { payload: newMaxNumOfBottlesPerRow }: PayloadAction<number>
    ) {
      if (!isPositiveInteger(newMaxNumOfBottlesPerRow)) {
        state.setMaxNumberOfBottlesPerRowError = 'Must be a positive integer.'
        return
      }

      if (newMaxNumOfBottlesPerRow > 10) {
        state.setMaxNumberOfBottlesPerRowError = 'Must be less then 11.'
        return
      }

      state.setMaxNumberOfBottlesPerRowError = ''

      state.maxNumberOfBottlesPerRow = newMaxNumOfBottlesPerRow
    },

    setSelectedColor(
      state,
      { payload: newColor }: PayloadAction<string | undefined>
    ) {
      state.selectedColor =
        newColor === state.selectedColor ? undefined : newColor

      state.setFiledError = ''
    },

    setFiled(
      state,
      {
        payload: { bottleIndex, fieldIndex },
      }: PayloadAction<{ bottleIndex: number; fieldIndex: number }>
    ) {
      if (!state.bottles[bottleIndex]) return

      const { selectedColor, bottles } = state
      const filedColor = bottles[bottleIndex][fieldIndex]

      if (
        selectedColor !== undefined &&
        getNumOfFieldsColoredWith(selectedColor, bottles) === 4 &&
        filedColor !== selectedColor
      ) {
        state.setFiledError =
          "You can't have more than 4 fields with the same color."
        return
      }

      if (selectedColor === undefined && filedColor === undefined) {
        state.setFiledError = 'You must select a color.'
        return
      }

      state.setFiledError = ''

      state.bottles[bottleIndex][fieldIndex] =
        selectedColor === filedColor ? undefined : selectedColor
    },
  },
})

export const {
  setNumberOfBottles,
  setMaxNumberOfBottlesPerRow,
  setSelectedColor,
  setFiled,
} = levelBuilderSlice.actions

export default levelBuilderSlice.reducer
