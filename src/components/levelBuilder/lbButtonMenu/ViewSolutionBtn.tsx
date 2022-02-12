import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useAppSelector from '../../../hooks/useAppSelector'

function ViewSolutionBtn() {
  const { levelId: levelAsString } = useAppSelector(store => store.level)
  const navigate = useNavigate()

  const onClickViewSolutionBtn = () => navigate(`solution/${levelAsString}`)

  return (
    <Button
      variant="contained"
      color="success"
      onClick={onClickViewSolutionBtn}
    >
      view solution
    </Button>
  )
}
export default ViewSolutionBtn
