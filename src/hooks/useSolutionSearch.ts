import { useEffect } from 'react'
import SolutionSearch from '../models/solutionSearch'
import { commitSolution } from '../store/solutionSlice'
import useAppDispatch from './useAppDispatch'
import useAppSelector from './useAppSelector'

function useSolutionSearch() {
  const {
    level: { level },
    solution: { canAcceptBetterSolution },
  } = useAppSelector(store => store)

  const dispatch = useAppDispatch()

  const bottles = level?.bottles

  useEffect(() => {
    if (!canAcceptBetterSolution || !bottles) return

    const solutionSearch = new SolutionSearch()

    solutionSearch.startSearch(bottles, solution => {
      console.log(solution)
      dispatch(commitSolution(solution))
    })

    return () => solutionSearch.terminateSearch()
  }, [bottles, canAcceptBetterSolution, dispatch])
}

export default useSolutionSearch
