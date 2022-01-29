import { Bottle } from '../models/bottle'
import { removeFalsyValues } from '../models/helpers'

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

function getNumberOfTimesEachElementAppearsInArray<T>(array: T[]) {
  const occurrenceMap = new Map<T, number>()

  for (const element of array) {
    if (!occurrenceMap.has(element)) {
      occurrenceMap.set(element, 1)
      continue
    }

    const prevCount = occurrenceMap.get(element)!
    occurrenceMap.set(element, prevCount + 1)
  }

  return occurrenceMap
}

function getElementsThatAppearLessThan<T>({
  array,
  times,
}: {
  array: T[]
  times: number
}) {
  const result = []
  const occurrenceMap = getNumberOfTimesEachElementAppearsInArray(array)

  for (const [element, occurrence] of occurrenceMap) {
    if (occurrence < times) result.push(element)
  }

  return result
}

export const getColorsThatAppearLessThenFourTimes = (bottles: Bottle[]) =>
  getElementsThatAppearLessThan({
    array: removeFalsyValues(bottles.flat()) as string[],
    times: 4,
  })

export function hasTruthyValueAfterIndex<T>(array: T[], index: number) {
  while (index++ < array.length) {
    if (array[index]) return true
  }
  return false
}

export function getInvalidFields(bottles: Bottle[]) {
  const invalidFields: { [bottleId: number]: number[] } = {}

  const addToInvalidFields = (bottleIndex: number, fieldIndex: number) => {
    if (invalidFields[bottleIndex]) invalidFields[bottleIndex].push(fieldIndex)
    else invalidFields[bottleIndex] = [fieldIndex]
  }

  const invalidColors = getColorsThatAppearLessThenFourTimes(bottles)

  bottles.forEach((bottle, bottleIndex) => {
    bottle.forEach((color, fieldIndex) => {
      if (
        (color && invalidColors.includes(color)) ||
        (!color && hasTruthyValueAfterIndex(bottle, fieldIndex))
      )
        addToInvalidFields(bottleIndex, fieldIndex)
    })
  })

  return invalidFields
}
