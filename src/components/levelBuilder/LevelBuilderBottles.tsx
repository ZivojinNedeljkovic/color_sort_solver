import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import { setFiled } from '../../store/levelBuilderSlice'
import { clearLevelState } from '../../store/levelSlice'
import { clearValidationState } from '../../store/levelValidationSlice'
import { clearSolutionState } from '../../store/solutionSlice'
import Bottles from '../bottles/Bottles'

function LevelBuilderBottles() {
  const {
    levelBuilder: { bottles, maxNumberOfBottlesPerRow },
    levelValidation: { invalidColors },
  } = useAppSelector(store => store)

  const dispatch = useAppDispatch()

  const onClickFieldHandler = (bottleId: number, fieldId: number) => {
    dispatch(clearValidationState())
    dispatch(clearSolutionState())
    dispatch(clearLevelState())
    dispatch(
      setFiled({
        bottleIndex: bottleId,
        fieldIndex: fieldId,
      })
    )
  }

  return (
    <Bottles
      bottles={bottles}
      maxBottlesPerRow={maxNumberOfBottlesPerRow}
      onClickField={onClickFieldHandler}
      invalidColors={invalidColors}
    />
  )
}

export default LevelBuilderBottles
