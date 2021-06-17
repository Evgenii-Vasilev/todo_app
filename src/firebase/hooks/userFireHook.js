import { useEffect, useState } from 'react'
import { firestore } from '../firebase'

const UserFireHook = (email) => {

  const [profile, setProfile] = useState({})

  useEffect(() => {
      const userRef = firestore.collection('users')
      userRef
        .where('email', '==', email)
        .get()
        .then(snap => {
          snap.forEach(doc => {
            setProfile({ ...doc.data(), uid: doc.id })
          })
        })

  }, [email])

  return { profile }
}

export default UserFireHook
