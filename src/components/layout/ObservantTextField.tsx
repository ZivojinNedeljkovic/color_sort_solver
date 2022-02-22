import { TextField, TextFieldProps } from '@mui/material'
import { useEffect, useRef } from 'react'

/** When default value changes dom value is updated. */
function ObservantTextField(props: TextFieldProps) {
  if (props.value)
    throw new Error('ObservantTextField can not have value property')

  const textFieldRef = useRef<HTMLInputElement>()

  const defaultValue = props.defaultValue as any

  useEffect(() => {
    if (!(textFieldRef.current && defaultValue)) return
    textFieldRef.current.value = defaultValue.toString()
  }, [defaultValue])

  return <TextField {...props} inputRef={textFieldRef} />
}
export default ObservantTextField
