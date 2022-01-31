import { Bottle } from '../models/bottle'


export const isPositiveInteger = (number: number) =>
  number > 0 && Number.isInteger(number)

export const getNumOfFieldsColoredWith = (
  color: string | undefined,
  bottles: Bottle[]
) =>
  bottles
    .flat()
    .reduce<number>(
      (count, fieldColor) => (fieldColor === color ? count + 1 : count),
      0
    )
