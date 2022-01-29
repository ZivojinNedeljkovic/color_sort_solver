import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { setSelectedColor } from '../../../store/levelBuilderSlice'
import styles from './PaletteColor.module.css'

type PaletteColorProps = {
  color: string
}

function PaletteColor({ color }: PaletteColorProps) {
  const { selectedColor } = useAppSelector(state => state.levelBuilder)
  const dispatch = useAppDispatch()

  const classes = `${styles.color_field} ${
    color === selectedColor ? styles.selected : ''
  }`

  return (
    <div
      className={classes}
      style={{
        backgroundColor: color,
      }}
      onClick={() => dispatch(setSelectedColor(color))}
    />
  )
}

export default PaletteColor
