import useAppSelector from '../../hooks/useAppSelector'
import Alert, { AlertColor } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import useFrozenState from '../../hooks/useFrozenState'
import { useEffect } from 'react'

function LevelBuilderSnackbar() {
  const {
    levelBuilder: { setFiledError },
    levelValidation: { validationReport },
  } = useAppSelector(store => store)

  const exitAnimationDuration = 500

  const [content, setContent] = useFrozenState('', exitAnimationDuration)
  const [alertSeverity, setAlertSeverity] = useFrozenState<
    AlertColor | undefined
  >(undefined, exitAnimationDuration)

  useEffect(() => {
    if (validationReport) {
      setContent(validationReport)
      setAlertSeverity('error')
    } else if (setFiledError) {
      setContent(setFiledError)
      setAlertSeverity('info')
    } else {
      setContent('')
      setAlertSeverity(undefined)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setFiledError, validationReport])

  const openSnackBar = !!(validationReport || setFiledError)

  return (
    <Snackbar open={openSnackBar}>
      <Alert severity={alertSeverity} variant="filled">
        {content}
      </Alert>
    </Snackbar>
  )
}
export default LevelBuilderSnackbar
