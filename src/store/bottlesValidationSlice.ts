import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Bottle } from '../models/bottle'
import {
  addToInvalidFields,
  forEachFieldInBottles,
  getInvalidColors,
  hasTruthyValueAfterIndex,
} from './helpers/bottlesValidationHelpers'

export type InvalidFields = { [bottleId: number]: number[] }

type BottlesValidationState = {
  bottlesAreValid: boolean
  validationReport: string
  invalidFields: InvalidFields
}

const getInitialState = (): BottlesValidationState => ({
  bottlesAreValid: false,
  validationReport: '',
  invalidFields: {},
})

const bottlesValidationSlice = createSlice({
  name: 'bottlesValidation',
  initialState: getInitialState(),
  reducers: {
    validateBottles(_, { payload: bottles }: PayloadAction<Bottle[]>) {
      const state = getInitialState()

      const invalidColors = getInvalidColors(bottles)

      let hasEmptyField = false
      let hasInvalidEmptyField = false

      forEachFieldInBottles((fieldColor, bottleIndex, fieldIndex) => {
        if (!fieldColor) hasEmptyField = true

        const bottle = bottles[bottleIndex]

        if (
          !(fieldColor
            ? invalidColors.includes(fieldColor)
            : hasTruthyValueAfterIndex(bottle, fieldIndex))
        )
          return

        if (!fieldColor) hasInvalidEmptyField = true

        addToInvalidFields(state.invalidFields, bottleIndex, fieldIndex)
      }, bottles)

      if (invalidColors.length)
        state.validationReport += 'Color must appear in four fields. '

      if (hasInvalidEmptyField)
        state.validationReport += 'Empty fields must be on top. '

      if (!hasEmptyField)
        state.validationReport += 'You must leave at least one empty bottle.'

      state.bottlesAreValid = !state.validationReport

      return state
    },
  },
})

export const { validateBottles } = bottlesValidationSlice.actions

export default bottlesValidationSlice.reducer
