import { firestore } from '../firebase'

async function createList(email, list) {
  try {
    const newListRef = firestore.collection(email).doc('tasks')
    let lists = {}
    lists[list] = 1
    await newListRef.get().then((snap) => {
      lists = { ...lists, ...snap.data() }
    })
    newListRef.set(lists)
  } catch (e) {
    console.error(e)
  }
}

export default createList
