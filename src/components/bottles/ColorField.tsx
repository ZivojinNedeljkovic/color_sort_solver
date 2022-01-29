import styles from './ColorField.module.scss'

type ColorFieldProps = {
  id: number
  color?: string
  onClick?: (ColorFieldID: number) => void
  invalid?: boolean
}

function ColorField({ id, color, onClick, invalid }: ColorFieldProps) {
  let classes = `${styles.color_field} ${onClick ? styles.editable : ''} `

  if (id === 3) classes += `${styles.top_field} `
  else if (id === 0) classes += `${styles.bottom_field} `

  if (invalid) classes += `${styles.invalid} `

  return (
    <div
      className={classes}
      style={{ backgroundColor: color }}
      onClick={() => onClick?.(id)}
    ></div>
  )
}

export default ColorField
