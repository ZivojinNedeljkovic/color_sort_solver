import { CircularProgress } from '@mui/material'
import styles from './LoadingScreen.module.scss'

function LoadingScreen() {
  return (
    <div className={styles.loading_screen}>
      <CircularProgress />
      <p>&ensp;Loading...</p>
    </div>
  )
}
export default LoadingScreen
