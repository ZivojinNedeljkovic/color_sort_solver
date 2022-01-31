import useAppSelector from '../../hooks/useAppSelector'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

function LevelBuilderSnackbar() {
  const { setFiledError } = useAppSelector(store => store.levelBuilder)

  let content

  if (setFiledError)
    content = (
      <Alert severity="info" variant="filled">
        {setFiledError}
      </Alert>
    )

  // if (submitError.message)
  //   content = (
  //     <Alert severity="error" variant="filled">
  //       {submitError.message + setFiledError}
  //     </Alert>
  //   )

  return (
    <Snackbar
      open={
        !!setFiledError
        // || !!submitError.message
      }
      //   message={setFiledError}
      transitionDuration={{ enter: 500, exit: 500 }}
    >
      {content}
    </Snackbar>
  )
}
export default LevelBuilderSnackbar
