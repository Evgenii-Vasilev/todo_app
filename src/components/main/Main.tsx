import { useRef } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'

import { List, ListItem, ListItemText, Box, Input, Button } from '@material-ui/core'

import todoFireHook from '../../firebase/hooks/todoFireHook'
import createList from '../../firebase/functions/createList'

const Main = () => {
  const history = useHistory()
  const { currentUser } = useAuth()

  if (!currentUser) history.push('/singup')

  const { lists } = todoFireHook(currentUser.email)
  const newListRef = useRef<any>('')

  const addNewList = async () => {
    if (newListRef.current.value === '') return console.log('hui')

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
    <Box>
      <Input ref={newListRef} />
      <Button variant='contained' color='primary' onClick={addNewList}>
        Add
      </Button>
      <Button onClick={toAllTasks}>Show All Tasks</Button>
      <List>
        {Object.keys(lists).map((list) => (
          <ListItem key={list} onClick={() => toList(list)}>
            <ListItemText primary={list} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Main
