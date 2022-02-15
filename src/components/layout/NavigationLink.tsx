import { Link } from 'react-router-dom'
import styles from './NavigationLink.module.scss'

type NavigationLinkProps = {
  name: string
  to: string
}

function NavigationLink({ name, to }: NavigationLinkProps) {
  return (
    <Link className={styles.nav_link} to={to}>
      {name}
    </Link>
  )
}
export default NavigationLink
