import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import useAppSelector from '../../../hooks/useAppSelector'
import useAppDispatch from '../../../hooks/useAppDispatch'
import { validateBottles } from '../../../store/levelValidationSlice'
import { useEffect, useState } from 'react'
import { setLevel } from '../../../store/levelSlice'
import { clearSetFiledError } from '../../../store/levelBuilderSlice'

function FindSolutionBtn() {
  const [disabledBtn, setDisabledBtn] = useState(false)

  const {
    levelBuilder: { bottles, maxNumOfBottlesPerRow: maxBottlesPerRow },
    levelValidation: { isValidLevel },
  } = useAppSelector(store => store)

  const dispatch = useAppDispatch()

  const onFindSolutionHandler = () => {
    dispatch(clearSetFiledError())
    dispatch(validateBottles(bottles))
    setDisabledBtn(true)
  }

  useEffect(() => {
    if (isValidLevel) dispatch(setLevel({ bottles, maxBottlesPerRow }))
  }, [bottles, dispatch, isValidLevel, maxBottlesPerRow])

  useEffect(() => {
    setDisabledBtn(false)
  }, [bottles])

  return (
    <Button
      variant="contained"
      endIcon={<SearchIcon />}
      onClick={onFindSolutionHandler}
      disabled={disabledBtn}
    >
      find solution
    </Button>
  )
}

export default FindSolutionBtn
