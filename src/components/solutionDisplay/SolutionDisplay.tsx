import { Grid } from '@mui/material'
import SolutionDisplayBottles from './SolutionDisplayBottles'
import SolutionDisplayButtonMenu from './SolutionDisplayButtonMenu'

function SolutionDisplay() {
  return (
    <Grid container rowSpacing={6} justifyContent="center">
      <Grid item xs={12} md={8} lg={5} xl={4}>
        <SolutionDisplayBottles />
      </Grid>

      <Grid item xs={12}>
        <SolutionDisplayButtonMenu />
      </Grid>
    </Grid>
  )
}

export default SolutionDisplay
