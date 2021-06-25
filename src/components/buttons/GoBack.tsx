import { useHistory } from 'react-router-dom'

const GoBack = () => {
  const history = useHistory()

  const goBack = () => history.goBack()

  return <button onClick={goBack}>Back</button>
}

export default GoBack
