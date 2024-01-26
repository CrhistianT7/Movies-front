import { ChangeEvent, forwardRef } from 'react'

interface Props {
  type: 'text' | 'submit' | 'email' | 'password'
  name: string
  title?: string
  className: string
  placeholder?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  autoComplete?: string
  value?: string
  errorDiv?: string
  errorMessage?: string
}

type Ref = HTMLInputElement

const Input = forwardRef<Ref, Props>((props, ref) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <input
        id={props.name}
        type={props.type}
        className={props.className}
        name={props.name}
        ref={ref}
        placeholder={props.placeholder}
        onChange={props.onChange}
        autoComplete={props.autoComplete}
        value={props.value}
      />
      <div className={props.errorDiv}>
        {props.errorMessage}
      </div>
    </div>
  )
})

export default Input
