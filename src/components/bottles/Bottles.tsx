import { Grid } from '@mui/material'
import { Bottle } from '../../models/bottle'
import { getFieldsTextContentForBottles } from '../../models/fields'
import BottleComponent from './Bottle'

// function get

type BottlesProps = {
  bottles: Bottle[]
  maxBottlesPerRow: number
  invalidColors?: string[]
  onClickField?: (bottleId: number, fieldId: number) => void
}

function Bottles({
  bottles,
  maxBottlesPerRow,
  invalidColors,
  onClickField,
}: BottlesProps) {
  const bottlesFieldText = invalidColors
    ? getFieldsTextContentForBottles(bottles, invalidColors)
    : undefined

  return (
    <Grid container justifyContent="center" columnSpacing={2} rowSpacing={4}>
      {bottles.map((colors, i) => (
        <Grid item xs={12 / maxBottlesPerRow} key={i}>
          <BottleComponent
            id={i}
            colors={colors}
            onClickField={onClickField}
            fieldsTextContent={bottlesFieldText?.[i]}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Bottles
