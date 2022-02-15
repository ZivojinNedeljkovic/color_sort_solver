import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Bottle, getEmptyBottle, getEmptyBottles } from '../models/bottle'
import {
  getNumOfFieldsColoredWith,
  isPositiveInteger,
} from './helpers/levelBuilderHelpers'

type LevelBuilderState = {
  bottles: Bottle[]
  selectedColor?: string
  maxNumOfBottlesPerRow: number
  setMaxNumOfBottlesPerRowError: string
  setNumOfBottlesError: string
  setFiledError: string
}

const getInitialState = (): LevelBuilderState => ({
  // bottles: [
  //   ['#e53935', '#cddc39', '#03a9f4', '#e53935'],
  //   ['#03a9f4', '#e53935', '#cddc39', '#cddc39'],
  //   ['#03a9f4', '#cddc39', '#e53935', '#03a9f4'],
  //   [undefined, undefined, undefined, undefined],
  // ],
  bottles: getEmptyBottles(8),
  maxNumOfBottlesPerRow: 4,
  setMaxNumOfBottlesPerRowError: '',
  setNumOfBottlesError: '',
  setFiledError: '',
})

const levelBuilderSlice = createSlice({
  name: 'levelBuilder',
  initialState: getInitialState,
  reducers: {
    setNumberOfBottles(
      state,
      { payload: numOfBottles }: PayloadAction<number>
    ) {
      state.setNumOfBottlesError = isPositiveInteger(numOfBottles)
        ? numOfBottles > 20
          ? 'Must be less then 21.'
          : ''
        : 'Must be a positive integer.'

      if (state.setNumOfBottlesError) return

      const { bottles } = state

      while (numOfBottles > bottles.length) bottles.push(getEmptyBottle())

      while (numOfBottles < bottles.length) bottles.pop()
    },

    setMaxNumberOfBottlesPerRow(
      state,
      { payload: maxNumOfBottlesPerRow }: PayloadAction<number>
    ) {
      state.setMaxNumOfBottlesPerRowError = isPositiveInteger(
        maxNumOfBottlesPerRow
      )
        ? maxNumOfBottlesPerRow > 10
          ? 'Must be less then 11.'
          : ''
        : 'Must be a positive integer.'

      if (state.setMaxNumOfBottlesPerRowError) return

      state.maxNumOfBottlesPerRow = maxNumOfBottlesPerRow
    },

    setSelectedColor(
      state,
      { payload: color }: PayloadAction<string | undefined>
    ) {
      return {
        ...state,
        selectedColor: state.selectedColor === color ? undefined : color,
        setFiledError: '',
      }
    },

    setFiled(
      state,
      {
        payload: { bottleIndex, fieldIndex },
      }: PayloadAction<{ bottleIndex: number; fieldIndex: number }>
    ) {
      const { selectedColor, bottles } = state
      const filedColor = bottles[bottleIndex]?.[fieldIndex]

      state.setFiledError =
        selectedColor !== undefined &&
        selectedColor !== filedColor &&
        getNumOfFieldsColoredWith(selectedColor, bottles) === 4
          ? "You can't have more than 4 fields with the same color."
          : selectedColor === undefined && filedColor === undefined
          ? 'You must select a color.'
          : ''

      if (state.setFiledError) return

      state.bottles[bottleIndex][fieldIndex] =
        selectedColor === filedColor ? undefined : selectedColor
    },

    clearSetFiledError(state) {
      state.setFiledError = ''
    },

    clearLevelBuilderState() {
      return getInitialState()
    },
  },
})

export const {
  setNumberOfBottles,
  setMaxNumberOfBottlesPerRow,
  setSelectedColor,
  setFiled,
  clearSetFiledError,
  clearLevelBuilderState,
} = levelBuilderSlice.actions

export default levelBuilderSlice.reducer
