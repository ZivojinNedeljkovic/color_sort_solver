export type Bottle = (string | undefined)[]

export const getEmptyBottle = () => Array(4).fill(undefined) as Bottle

export function getEmptyBottles(numberOfBottles: number) {
  const bottles: Bottle[] = []

  while (numberOfBottles-- > 0) bottles.push(getEmptyBottle())

  return bottles
}

