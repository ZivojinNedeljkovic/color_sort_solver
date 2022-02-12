import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SolutionDisplay from '../components/solutionDisplay/SolutionDisplay'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import { getLevelFromId } from '../models/level'
import { setLevel } from '../store/levelSlice'
import { validateBottles } from '../store/levelValidationSlice'
// import { setLevelId } from '../store/levelSlice'

function Solution() {
  const {
    level: { level },
    levelValidation: { isValidLevel },
    solution: { hasASolutionBeenFound },
  } = useAppSelector(store => store)
  const dispatch = useAppDispatch()

  const { levelId } = useParams()

  const levelFromUrl = getLevelFromId(levelId ?? '')

  // if (!level) {
  //   dispatch(validateBottles(levelFromUrl?.bottles ?? []))
  // }

  useEffect(() => {
    if (isValidLevel && !level && levelFromUrl) {
      dispatch(setLevel(levelFromUrl))
    }
  }, [dispatch, isValidLevel, level, levelFromUrl])

  return <SolutionDisplay />
}
export default Solution
