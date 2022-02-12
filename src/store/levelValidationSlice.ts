import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Bottle } from '../models/bottle'

import {
  getInvalidColorsOfFields,
  isThereAnColoredField,
  isThereAnEmptyField,
} from '../models/fields'

export type InvalidFields = { [bottleId: number]: number[] }

type BottlesValidationState = {
  isValidLevel: boolean
  invalidColors: string[]
  validationReport: string
}

const getInitialState = (): BottlesValidationState => ({
  isValidLevel: false,
  invalidColors: [],
  validationReport: '',
})

const levelValidationSlice = createSlice({
  name: 'levelValidation',
  initialState: getInitialState(),
  reducers: {
    validateBottles(_, { payload: bottles }: PayloadAction<Bottle[]>) {
      let validationReport = ''
      const fields = bottles.flat()

      const invalidColors = getInvalidColorsOfFields(fields)

      invalidColors.length &&
        (validationReport += 'Color must appear in four fields. ')

      !isThereAnColoredField(fields) &&
        (validationReport += "You can't leave all bottles empty. ")

      !isThereAnEmptyField(fields) &&
        (validationReport += 'You must leave at least one empty field.')

      return {
        isValidLevel: !validationReport,
        invalidColors,
        validationReport,
      }
    },

    clearValidationState() {
      return getInitialState()
    },
  },
})

export const { validateBottles, clearValidationState } =
  levelValidationSlice.actions

export default levelValidationSlice.reducer
