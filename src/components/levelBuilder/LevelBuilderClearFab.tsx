import { Fab } from '@mui/material'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import useAppClearState from '../../hooks/useAppClearState'

function LevelBuilderClearFab() {
  const clearAppState = useAppClearState()

  const styles = {
    position: 'fixed',
    bottom: 16,
    right: 16,
  }

  return (
    <Fab
      color="primary"
      size="medium"
      aria-label="clear"
      onClick={clearAppState}
      sx={styles}
    >
      <AutorenewIcon />
    </Fab>
  )
}
export default LevelBuilderClearFab
