import useAppSelector from '../../../hooks/useAppSelector'
import useAppDispatch from '../../../hooks/useAppDispatch'
import { setMaxNumberOfBottlesPerRow } from '../../../store/levelBuilderSlice'
import ObservantTextField from '../../layout/ObservantTextField'

function MaxBottlesPerRowField() {
  const { maxNumOfBottlesPerRow, setMaxNumOfBottlesPerRowError } =
    useAppSelector(state => state.levelBuilder)
  const dispatch = useAppDispatch()

  return (
    <ObservantTextField
      label="Max bottles per row"
      type={'number'}
      defaultValue={maxNumOfBottlesPerRow}
      variant={'standard'}
      size="small"
      error={!!setMaxNumOfBottlesPerRowError}
      helperText={setMaxNumOfBottlesPerRowError}
      onChange={e => {
        dispatch(setMaxNumberOfBottlesPerRow(+e.target.value))
      }}
    />
  )
}
export default MaxBottlesPerRowField
