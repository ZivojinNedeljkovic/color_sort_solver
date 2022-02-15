import useAppSelector from '../../../hooks/useAppSelector'
import useAppDispatch from '../../../hooks/useAppDispatch'
import { setMaxNumberOfBottlesPerRow } from '../../../store/levelBuilderSlice'
import SmartTextField from '../../layout/SmartTextField'

function MaxBottlesPerRowField() {
  const { maxNumOfBottlesPerRow, setMaxNumOfBottlesPerRowError } =
    useAppSelector(state => state.levelBuilder)
  const dispatch = useAppDispatch()

  return (
    <SmartTextField
      label="Max bottles per row"
      type={'number'}
      value={maxNumOfBottlesPerRow}
      variant={'standard'}
      size="small"
      error={!!setMaxNumOfBottlesPerRowError}
      helperText={setMaxNumOfBottlesPerRowError}
      onChange={e => dispatch(setMaxNumberOfBottlesPerRow(+e.target.value))}
    />
  )
}
export default MaxBottlesPerRowField
