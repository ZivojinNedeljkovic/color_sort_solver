import { Button, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import useSolutionSearch from '../hooks/useSolutionSearch'
import { Bottle } from '../models/bottle'
import { Step } from '../models/step'
import Bottles from './bottles/Bottles'

type SolutionProps = {
  level: Bottle[]
}

function Solution({ level }: SolutionProps) {
  const [solution, setSolution] = useState<Step[] | undefined>(undefined)
  const [step, setStep] = useState(0)

  useEffect(() => {
    let worker = new Worker('worker.js')

    worker.postMessage(JSON.stringify(level))

    worker.onmessage = function (message) {
      const response: Step[] = JSON.parse(message.data)
      console.log(response)
      setSolution(response)
      worker.terminate()
    }
  }, [])

  return (
    <Grid container rowSpacing={5} justifyContent={'center'}>
      {solution && (
        <>
          <Grid item xs={12} md={8} lg={5} xl={4}>
            <Bottles bottles={solution[step]} maxBottlesPerRow={5} />
          </Grid>

          <Grid item md={12}></Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => setStep(prev => (prev > 0 ? prev - 1 : prev))}
            >
              previous step
            </Button>
          </Grid>
          <Grid item marginLeft={4}>
            <Button
              variant="contained"
              onClick={() =>
                setStep(prev => (prev < solution.length - 1 ? prev + 1 : prev))
              }
            >
              next step
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  )
}

export default Solution
