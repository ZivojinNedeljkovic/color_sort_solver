import PaletteColor from './PaletteColor'
import { Grid } from '@mui/material'
import palette from '../../../models/palette'

const colors_old = [
  '#EE3231', // red
  '#67C1FF', // blue
  '#FB98F3', // pink
  '#F25298', // dark pink
  '#AE1AB0', // purple
  '#FAD749', // yellow
  '#9AD85D', // green
  '#4DD5AD', // bluish green
  '#FB6A79', // Brink Pink
  '#6B67D8', // purple blue
  '#F7A036', // orange
  '#FEAFA2', // Cornflower Lilac
]

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
