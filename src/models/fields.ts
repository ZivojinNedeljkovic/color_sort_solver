import { compact } from 'lodash'
import { getElementsThatDoNotOccurNTimesInArray } from './arrayHelpers'
import { Bottle } from './bottle'

export type Field = string | undefined

/** @returns colors that appear less then four times. */
export const getInvalidColorsOfFields = (fields: Field[]) =>
  getElementsThatDoNotOccurNTimesInArray(compact(fields), 4)

export const isThereAnEmptyField = (fields: Field[]) =>
  fields.some(field => !field)

export const isThereAnColoredField = (fields: Field[]) =>
  fields.some(field => !!field)

export const areFieldsValid = (fields: Field[]) =>
  getInvalidColorsOfFields(fields).length === 0 &&
  isThereAnEmptyField(fields) &&
  isThereAnColoredField(fields)

export function getFieldsTextContentForBottles(
  bottles: Bottle[],
  invalidColors: string[]
) {
  const invalidColorCounters: { [color: string]: number } = Object.fromEntries(
    invalidColors.map(color => [color, 0])
  )

  return bottles.map(bottle =>
    bottle.map(fieldColor =>
      fieldColor
        ? fieldColor in invalidColorCounters
          ? (++invalidColorCounters[fieldColor]).toString()
          : ''
        : ''
    )
  )
}
