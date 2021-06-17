import { useEffect, useState } from 'react'
import { firestore } from '../firebase'

const todoFireHook = (email) => {
  const [lists, setLists] = useState({})
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const todoRef = firestore.collection(email).onSnapshot((snap) => {
      const tmpTasks = []
      snap.forEach((doc) => {
        doc.id === 'tasks' ? setLists(doc.data()) : tmpTasks.push(doc.data())
      })
      setTasks(tmpTasks)
    })

    return () => todoRef()
  }, [email])

  return { lists, tasks }
}

export default todoFireHook
