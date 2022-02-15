import { useState } from 'react'

/** Freezes state for a period of time upon receiving falsy value.
 * @param frozenPeriod in millisecond.
 */
function useFrozenState<T>(initialState: T, frozenPeriod: number) {
  const [state, setState] = useState(initialState)

  const setFrozenState = (newState: T) => {
    newState ? setState(newState) : setTimeout(setState, frozenPeriod, newState)
  }

  return [state, setFrozenState] as [T, (newState: T) => void]
}
export default useFrozenState
