function getNumberOfTimesEachElementOccursInArray<T>(array: T[]) {
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

export function getElementsThatDoNotOccurNTimesInArray<T>(
  array: T[],
  n: number
) {
  if (n < 1) return []

  const result = []
  const occurrenceMap = getNumberOfTimesEachElementOccursInArray(array)

  for (const [element, occurrence] of occurrenceMap) {
    if (occurrence !== n) result.push(element)
  }

  return result
}
