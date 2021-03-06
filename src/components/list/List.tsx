import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import createTask from '../../firebase/functions/createTask'
import todoFireHook from '../../firebase/hooks/todoFireHook'
import { TasksType } from '../../types/todoTypes'
import GoBack from '../buttons/GoBack'
import Task from '../task/Task'

const List = () => {
  const params = useParams<any>()
  const { currentUser } = useAuth()

  const { tasks }: TasksType = todoFireHook(currentUser.email)
  
  const mappingArr = tasks.filter(task => task.list === params.id && task.isDone === false)
  const taskRef = useRef<any>()

  const addNewTask = () => {
    createTask(currentUser.email, params.id, taskRef.current.value)
  }


  return (
    <div>
      <GoBack />
      <input type='text' ref={taskRef}/>
      <button onClick={addNewTask}>Add</button>
      {mappingArr.map((task, i) => (
        <Task key={i} task={task} email={currentUser.email}></Task>
      ))}
    </div>
  )
}

export default List
