import { TaskType } from '../../types/todoTypes'
import { firestore } from '../firebase'

async function executeTask(email: string, task: TaskType) {
  try {
    const taskRef = firestore.collection(email).doc(task.taskName).set(
      {
        isDone: true,
      },
      { merge: true }
    )
  } catch (e) {
    console.error(e)
  }
}

export default executeTask
