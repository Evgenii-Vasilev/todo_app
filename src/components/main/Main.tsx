import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'
import { useCustomDispatch, useCustomSelector } from '../../types/reduxHooks'
import { toggleDeleteMode } from '../../redux/popup/popupActions'

import { List, ListItem, ListItemText, Box, Input, Button } from '@material-ui/core'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'

import todoFireHook from '../../firebase/hooks/todoFireHook'
import createList from '../../firebase/functions/createList'
import deleteList from '../../firebase/functions/deleteList'

const Main = () => {
  const history = useHistory()
  const { currentUser } = useAuth()

  if (!currentUser) history.push('/singup')

  const { lists } = todoFireHook(currentUser.email)
  const [newList, setNewList] = useState('')
  const { deleteMode } = useCustomSelector((state) => state.popup)
  const dispatch = useCustomDispatch()

  const addNewList = async () => {
    if (newList.trim() === '') return console.log('hui')
    try {
      await createList(currentUser.email, newList)
      setNewList('')
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

  const toggleMode = () => {
    dispatch(toggleDeleteMode())
  }

  const removeList = async (list: string) => {
    try {
      await deleteList(currentUser.email, list)
      dispatch(toggleDeleteMode())
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Box>
      <Input value={newList} onChange={(e) => setNewList(e.target.value)} />
      <Button variant='contained' color='primary' onClick={addNewList}>
        Add
      </Button>
      <Button onClick={toAllTasks}>Show All Tasks</Button>
      <List>
        {Object.keys(lists).map((list) => (
          <ListItem key={list}>
            <ListItemText className={deleteMode ? 'animation' : ''} primary={list} onClick={() => toList(list)} />
            {deleteMode && (
              <DeleteOutlinedIcon className='list__icon' onClick={() => removeList(list)} color='secondary' />
            )}
          </ListItem>
        ))}
      </List>
      <Button variant='contained' color='secondary' onClick={toggleMode}>
        Delete
      </Button>
    </Box>
  )
}

export default Main
