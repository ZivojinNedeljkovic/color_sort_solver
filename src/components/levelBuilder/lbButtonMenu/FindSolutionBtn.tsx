import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import useAppSelector from '../../../hooks/useAppSelector'
import useAppDispatch from '../../../hooks/useAppDispatch'
import { validateBottles } from '../../../store/levelValidationSlice'
import { useEffect, useState } from 'react'
import { setLevel } from '../../../store/levelSlice'

function FindSolutionBtn() {
  const [searchingForSolution, setSearchingForSolution] = useState(false)

  const {
    levelBuilder: { bottles, maxNumberOfBottlesPerRow: maxBottlesPerRow },
    levelValidation: { isValidLevel },
    solution: { hasASolutionBeenFound, hasNoSolution },
  } = useAppSelector(store => store)

  const dispatch = useAppDispatch()

  const onFindSolutionHandler = () => dispatch(validateBottles(bottles))

  useEffect(() => {
    if (!isValidLevel) return setSearchingForSolution(false)

    dispatch(setLevel({ bottles, maxBottlesPerRow }))
    setSearchingForSolution(true)
  }, [bottles, dispatch, isValidLevel, maxBottlesPerRow])

  useEffect(() => {
    if (hasASolutionBeenFound || hasNoSolution) setSearchingForSolution(false)
  }, [hasASolutionBeenFound, hasNoSolution])

  return (
    <Button
      variant="contained"
      endIcon={<SearchIcon />}
      onClick={onFindSolutionHandler}
      disabled={hasNoSolution || searchingForSolution}
    >
      find solution
    </Button>
  )
}

export default FindSolutionBtn
