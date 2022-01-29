import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Bottle, getEmptyBottle, getEmptyBottles } from '../models/bottle'
import {
  getColorsThatAppearLessThenFourTimes,
  getNumOfFieldsColoredWith,
  hasTruthyValueAfterIndex,
  isPositiveInteger,
} from './levelBuilderSliceHelpers'

type LevelBuilderState = {
  bottles: Bottle[]
  selectedColor?: string
  maxNumberOfBottlesPerRow: number
  setMaxNumberOfBottlesPerRowError: string
  setNumberOfBottlesError: string
  setFiledError: string
  submitError: {
    message: string
    invalidFields: { [bottleId: number]: number[] }
  }
}

// const initSubmitError = {
//   message: '',
//   invalidFields: {},
// }

const initialState: LevelBuilderState = {
  bottles: getEmptyBottles(10),
  maxNumberOfBottlesPerRow: 5,
  setMaxNumberOfBottlesPerRowError: '',
  setNumberOfBottlesError: '',
  setFiledError: '',
  submitError: {
    message: '',
    invalidFields: {},
  },
}

export const levelBuilderSlice = createSlice({
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

    validateBottles(state) {
      const { bottles, submitError } = state
      let { invalidFields } = submitError

      for (const member in invalidFields) delete invalidFields[member]
      submitError.message = ''

      const addToInvalidFields = (bottleIndex: number, fieldIndex: number) => {
        if (invalidFields[bottleIndex])
          invalidFields[bottleIndex].push(fieldIndex)
        else invalidFields[bottleIndex] = [fieldIndex]
      }

      const invalidColors = getColorsThatAppearLessThenFourTimes(bottles)
      let hasInvalidEmptyField = false

      bottles.forEach((bottle, bottleIndex) => {
        bottle.forEach((color, fieldIndex) => {
          if (color && invalidColors.includes(color))
            addToInvalidFields(bottleIndex, fieldIndex)
          else if (!color && hasTruthyValueAfterIndex(bottle, fieldIndex)) {
            hasInvalidEmptyField = true
            addToInvalidFields(bottleIndex, fieldIndex)
          }
        })
      })

      if (invalidColors.length)
        submitError.message += 'Color must appear in four fields. '

      if (hasInvalidEmptyField)
        submitError.message += 'Empty fields must be on top. '
    },
  },
})

export const {
  setNumberOfBottles,
  setMaxNumberOfBottlesPerRow,
  setSelectedColor,
  setFiled,
  validateBottles,
} = levelBuilderSlice.actions

export default levelBuilderSlice.reducer
