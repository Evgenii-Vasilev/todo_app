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
      await createList(currentUser.email, newListRef.current.value)
      newListRef.current.value = ''
    } catch (e) {
      console.error(e)
    }
  }

  const toList = (list: string) => {
    history.push(`/main/${list}`)
  }

  const toAllTasks = () => {
    history.push(`/main/hitriiPupsik`)
  }

  return (
    <div>
      <input type='text' ref={newListRef} />
      <button onClick={addNewList}>Add</button>
      <button onClick={toAllTasks}>Show All Tasks</button>
      {Object.keys(lists).map((list) => (
        <div className='list' key={list} onClick={() => toList(list)}>
          {list}
        </div>
      ))}
    </div>
  )
}

export default Main
