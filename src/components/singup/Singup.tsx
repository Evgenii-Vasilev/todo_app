import { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Singup = () => {
  const history = useHistory()
  const loginRef = useRef<any>()
  const passwordRef = useRef<any>()
  const { singup, currentUser } = useAuth()

  const register = (e: any) => {
    e.preventDefault()
    singup(loginRef.current.value, passwordRef.current.value)
  }

  if (currentUser) history.push('/main')

  return (
    <div>
      <input type='text' ref={loginRef} />
      <input type='text' ref={passwordRef} />
      <button onClick={register}>Register</button>
    </div>
  )
}

export default Singup
