import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cloneDeep } from 'lodash'
import { Step } from '../models/step'
import { canMigrateToBetterSolution } from './helpers/solutionSliceHelpers'

let solution: Step[] = []
let currentStepIndex = 0
let farthestReachedStepIndex = 0

export type SolutionState = {
  step: Step
  hasASolutionBeenFound: boolean
  isThereNextStep: boolean
  isTherePreviousStep: boolean
  canAcceptBetterSolution: boolean
}

const initialState: SolutionState = {
  step: [],
  hasASolutionBeenFound: false,
  isThereNextStep: false,
  isTherePreviousStep: false,
  canAcceptBetterSolution: true,
}

function setSolution(newSolution: Step[]): SolutionState | undefined {
  if (newSolution.length === 0) return

  solution = newSolution
  currentStepIndex = 0
  farthestReachedStepIndex = 0

  return {
    hasASolutionBeenFound: true,
    step: solution[0],
    isTherePreviousStep: false,
    isThereNextStep: solution.length > 1,
    canAcceptBetterSolution: true,
  }
}

function migrateToBetterSolution(
  state: SolutionState,
  betterSolution: Step[]
): SolutionState | undefined {
  if (
    canMigrateToBetterSolution(
      solution,
      betterSolution,
      farthestReachedStepIndex
    )
  ) {
    solution = betterSolution
    return
  }

  return {
    ...cloneDeep(state),
    canAcceptBetterSolution: false,
  }
}

const solutionSlice = createSlice({
  name: 'solution',
  initialState,
  reducers: {
    commitSolution: (state, { payload: newSolution }: PayloadAction<Step[]>) =>
      state.hasASolutionBeenFound
        ? migrateToBetterSolution(state, newSolution)
        : setSolution(newSolution),

    goToNextStep(state) {
      if (currentStepIndex === solution.length - 1) return

      if (++currentStepIndex > farthestReachedStepIndex)
        farthestReachedStepIndex = currentStepIndex

      state.step = solution[currentStepIndex]
      state.isThereNextStep = currentStepIndex < solution.length - 1
      state.isTherePreviousStep = true
    },

    goToPreviousStep(state) {
      if (currentStepIndex === 0) return

      state.step = solution[--currentStepIndex]
      state.isTherePreviousStep = currentStepIndex > 0
      state.isThereNextStep = true
    },
  },
})

export const { goToNextStep, goToPreviousStep, commitSolution } =
  solutionSlice.actions

export default solutionSlice.reducer
