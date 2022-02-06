import { Button, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import useSolutionSearch from '../hooks/useSolutionSearch'
import { Bottle } from '../models/bottle'
import { Step } from '../models/step'
import { goToNextStep, goToPreviousStep } from '../store/solutionSlice'
import Bottles from './bottles/Bottles'

type SolutionProps = {
  level: Bottle[]
}

function Solution({ level }: SolutionProps) {
  const {
    step: solutionStep,
    hasASolutionBeenFound,
    isThereNextStep,
    isTherePreviousStep,
  } = useAppSelector(store => store.solution)
  const dispatch = useAppDispatch()

  useSolutionSearch()

  const solutionJsx = (
    <Grid container rowSpacing={5} justifyContent={'center'}>
      <Grid item xs={12} md={8} lg={5} xl={4}>
        <Bottles bottles={solutionStep} maxBottlesPerRow={5} />
      </Grid>

      <Grid item md={12}></Grid>
      <Grid item>
        <Button
          variant="contained"
          disabled={!isTherePreviousStep}
          onClick={() => dispatch(goToPreviousStep())}
        >
          previous step
        </Button>
      </Grid>
      <Grid item marginLeft={4}>
        <Button
          variant="contained"
          disabled={!isThereNextStep}
          onClick={() => dispatch(goToNextStep())}
        >
          next step
        </Button>
      </Grid>
    </Grid>
  )

  const noSolutionJsx = (
    <Typography variant={'h4'}>There is no solution.</Typography>
  )

  return <>{hasASolutionBeenFound ? solutionJsx : noSolutionJsx}</>
}

export default Solution
