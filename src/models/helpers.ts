import { Bottle } from './bottle'

export const removeFalsyValues = (array: any[]) =>
  array.filter(element => !!element)
