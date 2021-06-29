import { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'

import { List, Box, Input, Button } from '@material-ui/core'

import createTask from '../../firebase/functions/createTask'
import todoFireHook from '../../firebase/hooks/todoFireHook'
import { TasksType } from '../../types/todoTypes'
import GoBack from '../buttons/GoBack'
import Task from '../task/Task'

const ListComponent = () => {
  const params = useParams<any>()
  const { currentUser } = useAuth()

  const { tasks }: TasksType = todoFireHook(currentUser?.email)

  const mappingArr = tasks.filter((task) => task.list === params.id && task.isDone === false)
  const [newTask, setNewTask] = useState('')

  const addNewTask = () => {
    if (newTask.trim() === '') return console.log('hui')
    createTask(currentUser?.email, params.id, newTask)
    setNewTask('')
  }

  return (
    <Box>
      <GoBack />
      <Input value={newTask} onChange={e => setNewTask(e.target.value)}/>
      <Button variant='contained' color='primary' onClick={addNewTask}>
        Add
      </Button>
      <List>
        {mappingArr.map((task, i) => (
          <Task key={i} task={task} email={currentUser?.email}></Task>
        ))}
      </List>
    </Box>
  )
}

export default ListComponent
