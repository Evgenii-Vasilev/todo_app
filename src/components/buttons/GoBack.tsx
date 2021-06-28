import { useHistory } from 'react-router-dom'

import { Button } from '@material-ui/core'

const GoBack = () => {
  const history = useHistory()

  const goBack = () => history.goBack()

  return <Button onClick={goBack}>Back</Button>
}

export default GoBack
