import useAppSelector from '../../../hooks/useAppSelector'
import useAppDispatch from '../../../hooks/useAppDispatch'
import { setNumberOfBottles } from '../../../store/levelBuilderSlice'

import { TextField } from '@mui/material'

function NumOfBottlesField() {
  const { bottles, setNumOfBottlesError } = useAppSelector(
    state => state.levelBuilder
  )

  const dispatch = useAppDispatch()

  return (
    <TextField
      label="Number of bottles"
      type={'number'}
      defaultValue={bottles.length}
      variant={'standard'}
      size="small"
      error={!!setNumOfBottlesError}
      helperText={setNumOfBottlesError}
      onChange={e => dispatch(setNumberOfBottles(+e.target.value))}
    />
  )
}
export default NumOfBottlesField
