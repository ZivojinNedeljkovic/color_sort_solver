import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Bottle } from '../models/bottle'
import {
  addToInvalidFields,
  forEachFieldInBottles,
  getInvalidColors,
  hasTruthyValueAfterIndex,
} from './bottlesValidationHelpers'

export type InvalidFields = { [bottleId: number]: number[] }

type BottlesValidationState = {
  bottlesAreValid: boolean
  message: string
  invalidFields: InvalidFields
}

const getInitialState = (): BottlesValidationState => ({
  bottlesAreValid: false,
  message: '',
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
        state.message += 'Color must appear in four fields. '

      if (hasInvalidEmptyField) state.message += 'Empty fields must be on top. '

      if (!hasEmptyField)
        state.message += 'You must leave at least one empty bottle.'

      return state
    },
  },
})

export const { validateBottles } = bottlesValidationSlice.actions

export default bottlesValidationSlice.reducer
