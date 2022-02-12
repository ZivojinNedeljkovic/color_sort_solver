import styles from './ColorField.module.scss'

type ColorFieldProps = {
  id: number
  color?: string
  onClick?: (ColorFieldID: number) => void
  invalid?: boolean
}

function ColorField({ id, color, onClick, invalid }: ColorFieldProps) {
  const classes = `${styles.color_field} 
  ${onClick && styles.editable} 
  ${invalid && styles.invalid}  
  ${id === 3 && styles.top_field} 
  ${id === 0 && styles.bottom_field}`

  return (
    <div
      className={classes}
      style={{ backgroundColor: color }}
      onClick={() => onClick?.(id)}
    ></div>
  )
}

export default ColorField
