import ColorField from './ColorField'
import { Stack } from '@mui/material'

type BottleProps = {
  id: number
  colors: (string | undefined)[]
  fieldsTextContent?: string[]
  onClickField?: (bottleId: number, fieldId: number) => void
}

function Bottle({
  id: bottleId,
  colors,
  fieldsTextContent,
  onClickField,
}: BottleProps) {
  const onClickFiledHandler = onClickField
    ? (fieldId: number) => onClickField(bottleId, fieldId)
    : undefined

  const colorFields: JSX.Element[] = []

  for (let i = 3; i >= 0; i--) {
    colorFields.push(
      <ColorField
        id={i}
        color={colors[i]}
        onClick={onClickFiledHandler}
        textContent={fieldsTextContent?.[i]}
        key={i}
      ></ColorField>
    )
  }

  return <Stack alignItems="center">{colorFields}</Stack>
}

export default Bottle
