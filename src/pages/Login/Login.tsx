import { ChangeEvent, FormEvent, useState } from 'react'

import { useJwtToken } from '../../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Form/Input'

const Login: React.FC = () => {
  const [email, setEmail] = useState<String>('')
  const [password, setPassword] = useState<String>('')

  const navigate = useNavigate()

  const { setJwtToken, setAlertMessage, setAlertClassName } = useJwtToken()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    if (email == "admin@example.com") {
      setJwtToken('asd')
      setAlertClassName('d-none')
      setAlertMessage('')
      navigate('/')
    } else {
      setAlertClassName('alert-danger')
      setAlertMessage('Invalid credentials')
    }
  }

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Login</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <Input
          title="Email Address"
          type="email"
          className="form-control"
          name="email"
          autoComplete="email-new"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
        <Input
          title="Password"
          type="password"
          className="form-control"
          name="password"
          autoComplete="password-new"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />
        <hr />
        <Input
          name="submit"
          type="submit"
          className="btn btn-primary"
          value="Login"
        />
      </form>
    </div>
  )
}

export default Login
