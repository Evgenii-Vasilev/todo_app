import { firestore } from '../firebase'
import firebase from 'firebase/app'

const deleteList = async (email: string, list: string) => {
  try {
    const newListRef = firestore.collection(email).doc('tasks')
    const removeField = newListRef.update({
      [list]: firebase.firestore.FieldValue.delete(),
    })
  } catch (e) {
    throw e
  }
}

export default deleteList
