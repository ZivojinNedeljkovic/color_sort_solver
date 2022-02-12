import { Button, Grid } from '@mui/material'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import { goToNextStep, goToPreviousStep } from '../../store/solutionSlice'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

function SolutionDisplayButtonMenu() {
  const { isThereNextStep, isTherePreviousStep } = useAppSelector(
    store => store.solution
  )
  const dispatch = useAppDispatch()

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Button
          variant="contained"
          disabled={!isTherePreviousStep}
          onClick={() => dispatch(goToPreviousStep())}
          startIcon={<ChevronLeftIcon />}
        >
          previous step
        </Button>
      </Grid>
      <Grid item ml={5} mr={3.5}>
        <Button
          variant="contained"
          disabled={!isThereNextStep}
          onClick={() => dispatch(goToNextStep())}
          endIcon={<ChevronRightIcon />}
        >
          next step
        </Button>
      </Grid>
    </Grid>
  )
}

export default SolutionDisplayButtonMenu
