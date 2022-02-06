import { Bottle } from '../../models/bottle'
import { removeFalsyValues } from '../../models/helpers'
import { InvalidFields } from '../bottlesValidationSlice'

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

function getElementsThatAppearLessThanFourTimesInArray<T>(array: T[]) {
  const result = []
  const occurrenceMap = getNumberOfTimesEachElementAppearsInArray(array)

  for (const [element, occurrence] of occurrenceMap) {
    if (occurrence < 4) result.push(element)
  }

  return result
}

/** @returns colors that appear less then four times in bottles */
export const getInvalidColors = (bottles: Bottle[]) =>
  getElementsThatAppearLessThanFourTimesInArray(
    removeFalsyValues(bottles.flat()) as string[]
  )

export function hasTruthyValueAfterIndex<T>(array: T[], index: number) {
  while (index++ < array.length) {
    if (array[index]) return true
  }
  return false
}

export function forEachFieldInBottles(
  callback: (
    fieldColor: string | undefined,
    bottleIndex: number,
    fieldIndex: number
  ) => void,
  bottles: Bottle[]
) {
  bottles.forEach((bottle, bottleIndex) => {
    bottle.forEach((fieldColor, fieldIndex) => {
      callback(fieldColor, bottleIndex, fieldIndex)
    })
  })
}

export function addToInvalidFields(
  invalidFields: InvalidFields,
  bottleIndex: number,
  fieldIndex: number
) {
  //   invalidFields = cloneDeep(invalidFields)

  if (invalidFields[bottleIndex]) invalidFields[bottleIndex].push(fieldIndex)
  else invalidFields[bottleIndex] = [fieldIndex]

  //   return invalidFields
}
