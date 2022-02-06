import { useTheme } from '@mui/material'
import styles from './Footer.module.scss'

function Footer() {
  const theme = useTheme()
  return (
    <footer
    //   className={styles.footer}
      style={{ backgroundColor: theme.palette.primary.main }}
    ></footer>
  )
}

export default Footer
