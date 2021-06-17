import { firestore } from '../firebase'
import firebase from "firebase/app";


async function createTask(email, list, taskName) {
  try {
    const newListRef = firestore.collection(email).doc(taskName)
    newListRef.set({
      taskName,
      list,
      isDone: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
  } catch (e) {
    console.error(e)
  }
}

export default createTask