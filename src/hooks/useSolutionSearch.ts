import { useEffect, useState } from 'react'
import SolutionSearch from '../models/solutionSearch'
import solutionSearch from '../models/solutionSearch'
import { Step } from '../models/step'
import { commitSolution } from '../store/solutionSlice'

import useAppDispatch from './useAppDispatch'
import useAppSelector from './useAppSelector'

function useSolutionSearch() {
  const { bottles } = useAppSelector(store => store.levelBuilder)
  const { canAcceptBetterSolution } = useAppSelector(store => store.solution)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!canAcceptBetterSolution) return

    const solutionSearch = new SolutionSearch()

    solutionSearch.startSearch(bottles, solution => {
      console.log(solution)
      dispatch(commitSolution(solution))
    })

    return () => solutionSearch.terminateSearch()
  }, [bottles, canAcceptBetterSolution, dispatch])
}

export default useSolutionSearch
