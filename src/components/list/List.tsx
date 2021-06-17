import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import createTask from '../../firebase/functions/createTask'
import todoFireHook from '../../firebase/hooks/todoFireHook'
import { Tasks } from '../../types/todoTypes'

const List = () => {
  const params = useParams<any>()
  const { currentUser } = useAuth()

  const { tasks }: Tasks = todoFireHook(currentUser.email)
  
  const mappingArr = tasks.filter(task => task.list === params.id)
  const taskRef = useRef<any>()

  const addNewTask = () => {
    createTask(currentUser.email, params.id, taskRef.current.value)
  }


  return (
    <div>
      <input type='text' ref={taskRef}/>
      <button onClick={addNewTask}>Add</button>
      {mappingArr.map((task, i) => (
        <div key={i}>{task.taskName}</div>
      ))}
    </div>
  )
}

export default List
