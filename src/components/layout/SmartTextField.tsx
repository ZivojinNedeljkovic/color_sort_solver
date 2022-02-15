import { TextField, TextFieldProps } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'

type FieldChangeEvent =
  | ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  | undefined

function SmartTextField(props: TextFieldProps) {
  const [changeEvent, setChangeEvent] = useState<FieldChangeEvent>()

  const { onChange, value } = props

  useEffect(() => {
    if (!changeEvent) return

    const timeoutID = setTimeout(() => onChange?.(changeEvent), 300)

    return () => clearTimeout(timeoutID)
  }, [onChange, changeEvent])

  const muiTextFieldProps: TextFieldProps = {
    ...props,
    value: changeEvent?.target.value ?? value,
    onChange: setChangeEvent,
  }

  return <TextField {...muiTextFieldProps} />
}
export default SmartTextField
