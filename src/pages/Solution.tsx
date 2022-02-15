import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import LoadingScreen from '../components/loadingScreen/LoadingScreen'
import SolutionDisplay from '../components/solutionDisplay/SolutionDisplay'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import { getLevelFromId } from '../models/level'
import {
  setBottles,
  setMaxNumberOfBottlesPerRow,
} from '../store/levelBuilderSlice'
import { setLevel } from '../store/levelSlice'

function Solution() {
  const {
    level: { level },
    solution: { hasASolutionBeenFound, hasNoSolution },
  } = useAppSelector(store => store)

  const dispatch = useAppDispatch()
  const { levelId } = useParams()

  if (level) return <SolutionDisplay />

  const urlLevel = getLevelFromId(levelId ?? '')

  if (!urlLevel || hasNoSolution)
    return (
      <Typography align="center" component="h1" variant="h3">
        Invalid link!
      </Typography>
    )

  dispatch(setLevel(urlLevel))
  dispatch(setBottles(urlLevel.bottles))
  dispatch(setMaxNumberOfBottlesPerRow(urlLevel.maxBottlesPerRow))

  return hasASolutionBeenFound ? <SolutionDisplay /> : <LoadingScreen />
}
export default Solution
