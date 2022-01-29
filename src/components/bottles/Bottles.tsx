import { Grid } from '@mui/material'
import { Bottle } from '../../models/bottle'
import BottleComponent from './Bottle'

type BottlesProps = {
  bottles: Bottle[]
  maxBottlesPerRow: number
  onClickField?: (bottleId: number, fieldId: number) => void
  invalidFields?: { [bottleId: number]: number[] }
}

function Bottles({
  bottles,
  maxBottlesPerRow,
  onClickField,
  invalidFields,
}: BottlesProps) {
  return (
    <Grid container justifyContent={'center'} spacing={2}>
      {bottles.map((colors, i) => (
        <Grid item xs={12 / maxBottlesPerRow} key={i}>
          <BottleComponent
            id={i}
            colors={colors}
            onClickField={onClickField}
            invalidFields={invalidFields?.[i]}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Bottles
