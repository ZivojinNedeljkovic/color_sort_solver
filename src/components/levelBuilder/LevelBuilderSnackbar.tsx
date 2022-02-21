import useAppSelector from '../../hooks/useAppSelector'
import Alert, { AlertColor } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import useFrozenState from '../../hooks/useFrozenState'
import { useEffect } from 'react'

type AlertState =
  | {
      content: string
      severity: AlertColor
    }
  | undefined

function LevelBuilderSnackbar() {
  const {
    levelBuilder: { setFiledError },
    levelValidation: { validationReport },
    solution: { hasNoSolution },
  } = useAppSelector(store => store)

  const exitAnimationDuration = 500

  const [alertState, setAlertState] = useFrozenState<AlertState>(
    undefined,
    exitAnimationDuration
  )

  useEffect(() => {
    if (validationReport)
      setAlertState({ content: validationReport, severity: 'error' })
    else if (setFiledError)
      setAlertState({ content: setFiledError, severity: 'info' })
    else if (hasNoSolution)
      setAlertState({ content: 'There is no solution.', severity: 'error' })
    else setAlertState(undefined)
  }, [hasNoSolution, setAlertState, setFiledError, validationReport])

  const openSB = !!(validationReport || setFiledError || hasNoSolution)

  return (
    <Snackbar open={openSB}>
      <Alert severity={alertState?.severity} variant="filled">
        {alertState?.content}
      </Alert>
    </Snackbar>
  )
}
export default LevelBuilderSnackbar
