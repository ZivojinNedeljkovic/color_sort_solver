import colors from './colors'

export type Bottle = (string | undefined)[]

export const getEmptyBottle = () => Array(4).fill(undefined) as Bottle

export function getEmptyBottles(numberOfBottles: number) {
  const bottles: Bottle[] = []

  while (numberOfBottles-- > 0) bottles.push(getEmptyBottle())

  return bottles
}

// export const isEmptyBottle = (bottle: Bottle) =>
//   bottle.every(colorField => !colorField)

export const getBottleId = (bottle: Bottle) =>
  bottle
    .map(bottleColor =>
      bottleColor ? colors.getColorId(bottleColor) ?? '0' : '0'
    )
    .join('')

export const getBottleFromId = (bottleId: string) => {
  if (bottleId.length !== 4) return undefined

  return bottleId
    .split('')
    .map(colorId => colors.getColorFromId(colorId) ?? undefined)
}
