import { Grid } from '@mui/material'
import Palette from './palette/Palette'
import MaxBottlesPerRowField from './MaxBottlesPerRowField'
import NumOfBottlesField from './NumOfBottlesField'

function Toolbar() {
  return (
    <Grid container rowSpacing={2.5} columnSpacing={2} justifyContent={'center'}>
      <Grid item>
        <NumOfBottlesField />
      </Grid>
      <Grid item>
        <MaxBottlesPerRowField />
      </Grid>
      <Grid item ml={1}>
        <Palette />
      </Grid>
    </Grid>
  )
}
export default Toolbar
