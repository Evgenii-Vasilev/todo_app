import { TasksType } from '../../types/todoTypes'
import { useAuth } from '../../context/AuthContext'
import todoFireHook from '../../firebase/hooks/todoFireHook'
import Task from '../task/Task'
import GoBack from '../buttons/GoBack'

const AllTasks = () => {
  const { currentUser } = useAuth()

  const { tasks }: TasksType = todoFireHook(currentUser.email)

  const mappingArr = tasks.filter((task) => task.isDone === false)

  return (
    <div>
      <GoBack />
      {mappingArr.map((task, i) => (
        <Task key={i} task={task} email={currentUser.email}></Task>
      ))}
    </div>
  )
}

export default AllTasks
