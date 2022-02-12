import { AppBar, Toolbar, Typography } from '@mui/material'
import styles from './Header.module.scss'

function Header() {
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar className={styles.header_content}>
        <Typography variant="h6" component="h1">
          Color Sort Solver
        </Typography>

        
      </Toolbar>
    </AppBar>
  )
}

export default Header
