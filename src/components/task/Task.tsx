import { FC } from "react"
import executeTask from "../../firebase/functions/executeTask"
import { TaskType } from "../../types/todoTypes"

interface PropTypes {
  task: TaskType,
  key: number,
  email: string
}

const Task:FC<PropTypes> = ({task, email}) => {

  const changeIsDone = async (task: TaskType) => {
    try {
      executeTask(email, task)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      { task.taskName }
      <input type="checkbox" checked={task.isDone} onChange={() => changeIsDone(task)}/>
    </div>
  )
}

export default Task