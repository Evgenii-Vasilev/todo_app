import { FC, useState } from 'react'

import {ListItem, ListItemText, Checkbox} from '@material-ui/core'

import executeTask from '../../firebase/functions/executeTask'
import { TaskType } from '../../types/todoTypes'

interface PropTypes {
  task: TaskType
  key: number
  email: string
}

const Task: FC<PropTypes> = ({ task, email }) => {

  const [taskIsDone, setTaskDone] = useState(false)

  const changeIsDone = async (task: TaskType) => {
    try {
      setTaskDone(true)
      setTimeout(() => {
        executeTask(email, task)

      }, 500)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <ListItem>
      <ListItemText primary={task.taskName}/>
      <Checkbox
        inputProps={{ 'aria-label': 'primary checkbox' }}
        checked={taskIsDone}
        onChange={() => changeIsDone(task)}
      />
    </ListItem>
  )
}

export default Task
