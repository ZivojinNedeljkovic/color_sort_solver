import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Bottle } from '../models/bottle'
import {
  addToInvalidFields,
  forEachFieldInBottles,
  getInvalidColors,
  hasTruthyValueAfterIndex,
} from './helpers/levelValidationHelpers'

export type InvalidFields = { [bottleId: number]: number[] }

type BottlesValidationState = {
  isValidLevel?: boolean
  validationReport: string
  invalidFields: InvalidFields
}

const getInitialState = (): BottlesValidationState => ({
  validationReport: '',
  invalidFields: {},
})

const levelValidationSlice = createSlice({
  name: 'levelValidation',
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
        state.validationReport += 'Empty fields must be on top of a bottle. '

      if (!hasEmptyField)
        state.validationReport += 'You must leave at least one empty bottle.'

      state.isValidLevel = !state.validationReport

      return state
    },

    clearValidationState() {
      return getInitialState()
    },
  },
})

export const { validateBottles, clearValidationState } =
  levelValidationSlice.actions

export default levelValidationSlice.reducer
