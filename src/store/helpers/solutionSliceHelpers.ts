import { isEqual } from 'lodash'
import { Step } from '../../models/step'

export const canMigrateToBetterSolution = (
  solution: Step[],
  betterSolution: Step[],
  farthestReachedStepIndex: number
) =>
  betterSolution.length - 1 > farthestReachedStepIndex &&
  isEqual(
    solution.slice(0, farthestReachedStepIndex + 1),
    betterSolution.slice(0, farthestReachedStepIndex + 1)
  )
