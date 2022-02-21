import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import NavigationLink from './NavigationLink'

function Header() {
  const location = useLocation()
  let navigate = useNavigate()
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar className={styles.header_content}>
        <Grid container justifyContent={'space-between'} alignItems={'center'}>
          <Grid item>
            <Typography
              variant="h6"
              component="h1"
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              Color sort solver
            </Typography>
          </Grid>
          {location.pathname !== '/' && (
            <Grid item>
              <NavigationLink name={'home'} to={''} />
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
