import { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Singup = () => {
  const history = useHistory()
  const loginRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const { singup, login, currentUser } = useAuth()

  const register = () => {
    singup(loginRef?.current?.value, passwordRef?.current?.value)
  }

  const logIn = () => {
    login(loginRef?.current?.value, passwordRef?.current?.value)
  }

  if (currentUser) history.push('/main')

  return (
    <div>
      <input type='text' ref={loginRef} />
      <input type='text' ref={passwordRef} />
      <button onClick={register}>Register</button>
      <button onClick={logIn}>Login</button>
    </div>
  )
}

export default Singup
