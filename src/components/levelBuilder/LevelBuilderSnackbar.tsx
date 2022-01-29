import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { useAppSelector } from '../../store/hooks'

function LevelBuilderSnackbar() {
  const { setFiledError, submitError } = useAppSelector(
    store => store.levelBuilder
  )

  let content

  if (setFiledError)
    content = (
      <Alert severity="info" variant="filled">
        {setFiledError}
      </Alert>
    )

  if (submitError.message)
    content = (
      <Alert severity="error" variant="filled">
        {submitError.message + setFiledError}
      </Alert>
    )

  return (
    <Snackbar
      open={!!setFiledError || !!submitError.message}
      //   message={setFiledError}
      transitionDuration={{ enter: 500, exit: 500 }}
    >
      {content}
    </Snackbar>
  )
}
export default LevelBuilderSnackbar
