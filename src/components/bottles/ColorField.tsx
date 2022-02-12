import fontColorContrast from 'font-color-contrast'
import styles from './ColorField.module.scss'

type ColorFieldProps = {
  id: number
  color?: string
  onClick?: (ColorFieldID: number) => void
  invalid?: boolean
  textContent?: string
}

function ColorField({
  id,
  color,
  onClick,
  invalid,
  textContent,
}: ColorFieldProps) {
  const classes = `${styles.color_field} 
  ${onClick && styles.editable} 
  ${invalid && styles.invalid}  
  ${id === 3 && styles.top_field} 
  ${id === 0 && styles.bottom_field}`

  const style = color
    ? { backgroundColor: color, color: fontColorContrast(color) }
    : undefined

  return (
    <div className={classes} style={style} onClick={() => onClick?.(id)}>
      {textContent}
    </div>
  )
}

export default ColorField
