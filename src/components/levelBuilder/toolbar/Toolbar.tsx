import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import {
  setMaxNumberOfBottlesPerRow,
  setNumberOfBottles,
} from '../../../store/levelBuilderSlice'
import { Grid, TextField } from '@mui/material'
import Palette from './Palette'

function Toolbar() {
  const { setNumberOfBottlesError, setMaxNumberOfBottlesPerRowError } =
    useAppSelector(state => state.levelBuilder)
  const dispatch = useAppDispatch()

  return (
    <Grid container rowSpacing={2} columnSpacing={2} justifyContent={'center'}>
      <Grid item>
        <TextField
          label="Number of bottles"
          type={'number'}
          defaultValue={10}
          variant={'standard'}
          size="small"
          error={!!setNumberOfBottlesError}
          helperText={setNumberOfBottlesError}
          onChange={e => dispatch(setNumberOfBottles(+e.target.value))}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Max bottles per row"
          type={'number'}
          defaultValue={5}
          variant={'standard'}
          size="small"
          error={!!setMaxNumberOfBottlesPerRowError}
          helperText={setMaxNumberOfBottlesPerRowError}
          onChange={e => dispatch(setMaxNumberOfBottlesPerRow(+e.target.value))}
        />
      </Grid>
      <Grid item>
        <Palette />
      </Grid>
    </Grid>
  )
}
export default Toolbar
