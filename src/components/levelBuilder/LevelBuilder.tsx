import { Grid } from '@mui/material'
import Toolbar from './toolbar/Toolbar'
import LevelBuilderBottles from './LevelBuilderBottles'
import LBButtonMenu from './lbButtonMenu/LBButtonMenu'

function LevelBuilder() {
  return (
    <Grid container rowSpacing={5} justifyContent={'center'}>
      <Grid item md={12}>
        <Toolbar />
      </Grid>
      <Grid item xs={12} md={8} lg={5} xl={4}>
        <LevelBuilderBottles />
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid item>
        <LBButtonMenu />
      </Grid>
    </Grid>
  )
}

export default LevelBuilder
