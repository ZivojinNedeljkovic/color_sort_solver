import useAppSelector from '../../../hooks/useAppSelector'
import useAppDispatch from '../../../hooks/useAppDispatch'
import { setMaxNumberOfBottlesPerRow } from '../../../store/levelBuilderSlice'
import { TextField } from '@mui/material'

function MaxBottlesPerRowField() {
  const { maxNumOfBottlesPerRow, setMaxNumOfBottlesPerRowError } =
    useAppSelector(state => state.levelBuilder)
  const dispatch = useAppDispatch()

  return (
    <TextField
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
