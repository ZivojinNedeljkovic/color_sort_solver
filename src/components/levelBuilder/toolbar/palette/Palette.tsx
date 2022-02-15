import PaletteColor from './PaletteColor'
import { Grid } from '@mui/material'
import palette from '../../../../models/palette'

function Palette() {
  return (
    <Grid container justifyContent="flex-start" spacing={1}>
      {palette.colors.map((color, i) => (
        <Grid item key={i}>
          <PaletteColor color={color} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Palette
