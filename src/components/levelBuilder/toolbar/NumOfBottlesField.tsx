import useAppSelector from '../../../hooks/useAppSelector'
import useAppDispatch from '../../../hooks/useAppDispatch'
import { setNumberOfBottles } from '../../../store/levelBuilderSlice'
import { clearLevelState } from '../../../store/levelSlice'
import { clearValidationState } from '../../../store/levelValidationSlice'
import { clearSolutionState } from '../../../store/solutionSlice'
import ObservantTextField from '../../layout/ObservantTextField'

function NumOfBottlesField() {
  const { bottles, setNumOfBottlesError } = useAppSelector(
    state => state.levelBuilder
  )

  const dispatch = useAppDispatch()

  return (
    <ObservantTextField
      label="Number of bottles"
      type={'number'}
      defaultValue={bottles.length}
      variant={'standard'}
      size="small"
      error={!!setNumOfBottlesError}
      helperText={setNumOfBottlesError}
      onChange={e => {
        dispatch(clearLevelState())
        dispatch(clearValidationState())
        dispatch(clearSolutionState())
        dispatch(setNumberOfBottles(+e.target.value))
      }}
    />
  )
}
export default NumOfBottlesField
