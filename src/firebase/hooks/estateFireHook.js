import { useEffect, useState } from 'react'
import { firestore } from '../firebase'

const EstateHook = (email) => {
  const [estates, setEstates] = useState([])

  useEffect(() => {
    const estateRef = firestore.collection('rent-estates')
    if (!email) {
      estateRef
      .get()
      .then((snap) => {
        let arr = []
        snap.forEach((doc) => {
          arr.push({ ...doc.data(), id: doc.id })
        })
        setEstates(arr)
      })
    } else {
      estateRef
        .where('email', '==', email)
        .get()
        .then(snap => {
          let arr = []
          snap.forEach(doc => {
            arr.push({ ...doc.data(), id: doc.id })
          })
          setEstates(arr)
        })
    }
  }, [email])

  return { estates }
}

export default EstateHook
