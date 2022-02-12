import { Bottle, getBottleId, getBottleFromId } from './bottle'

export type Level = { bottles: Bottle[]; maxBottlesPerRow: number }

export const getLevelId = ({ bottles, maxBottlesPerRow }: Level) =>
  maxBottlesPerRow + bottles.map(bottle => getBottleId(bottle)).join('')

export const getLevelFromId = (levelString: string) => {
  const maxBottlesPerRow = +levelString[0]
  const bottleIds = levelString.substring(1)

  if (!maxBottlesPerRow || bottleIds.length % 4 !== 0) return

  const bottles: Bottle[] = []

  for (let i = 0; i < bottleIds.length; i += 4) {
    bottles.push(getBottleFromId(bottleIds.substring(i, i + 4))!)
  }

  return { bottles, maxBottlesPerRow } as Level
}
