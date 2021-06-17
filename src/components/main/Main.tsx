import { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import createList from '../../firebase/functions/createList'
import todoFireHook from '../../firebase/hooks/todoFireHook'

const Main = () => {
  const history = useHistory()
  const { currentUser } = useAuth()

  if (!currentUser) history.push('/singup')

  const { lists } = todoFireHook(currentUser.email)
  const newListRef = useRef<any>()

  const addNewList = async () => {
    try {
      createList(currentUser.email, newListRef.current.value)
    } catch (e) {
      console.error(e)
    }
  }

  const toList = (list: string) => {
    history.push(`/main/${list}`)
  }

  const obj = {}

  return (
    <div>
      <input type='text' ref={newListRef} />
      <button onClick={addNewList}>Add</button>
      {Object.keys(lists).map((list) => (
        <div className='list' key={list} onClick={() => toList(list)}>
          {list}
        </div>
      ))}
    </div>
  )
}

export default Main
