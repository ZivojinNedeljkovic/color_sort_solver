import useAppSelector from '../../../hooks/useAppSelector'
import useAppDispatch from '../../../hooks/useAppDispatch'
import { setNumberOfBottles } from '../../../store/levelBuilderSlice'
import SmartTextField from '../../layout/SmartTextField'

function NumOfBottlesField() {
  const { bottles, setNumOfBottlesError } = useAppSelector(
    state => state.levelBuilder
  )
  const dispatch = useAppDispatch()

  return (
    <SmartTextField
      label="Number of bottles"
      type={'number'}
      value={bottles.length}
      variant={'standard'}
      size="small"
      error={!!setNumOfBottlesError}
      helperText={setNumOfBottlesError}
      onChange={e => dispatch(setNumberOfBottles(+e.target.value))}
    />
  )
}
export default NumOfBottlesField
