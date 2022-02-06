import useAppSelector from '../../hooks/useAppSelector'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

function LevelBuilderSnackbar() {
  const { setFiledError } = useAppSelector(store => store.levelBuilder)
  const { validationReport } = useAppSelector(store => store.bottlesValidation)

  let content

  if (setFiledError)
    content = (
      <Alert severity="info" variant="filled">
        {setFiledError}
      </Alert>
    )

  if (validationReport)
    content = (
      <Alert severity="error" variant="filled">
        {validationReport + setFiledError}
      </Alert>
    )

  return (
    <Snackbar
      open={!!(setFiledError || validationReport)}
      transitionDuration={{ enter: 500, exit: 500 }}
    >
      {content}
    </Snackbar>
  )
}
export default LevelBuilderSnackbar
