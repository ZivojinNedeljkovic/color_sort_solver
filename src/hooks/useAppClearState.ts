import { clearLevelBuilderState } from '../store/levelBuilderSlice'
import { clearLevelState } from '../store/levelSlice'
import { clearValidationState } from '../store/levelValidationSlice'
import { clearSolutionState } from '../store/solutionSlice'
import useAppDispatch from './useAppDispatch'

function useAppClearState() {
  const dispatch = useAppDispatch()

  return () => {
    dispatch(clearLevelBuilderState())
    dispatch(clearValidationState())
    dispatch(clearLevelState())
    dispatch(clearSolutionState())
  }
}
export default useAppClearState
