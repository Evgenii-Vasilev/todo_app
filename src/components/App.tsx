import { Switch, Route, Redirect } from 'react-router'
import { AuthProvider } from '../context/AuthContext'
import Singup from './singup/Singup'
import Main from './main/Main'
import List from './list/List'

const App = () => {

  return (
    <div className='App'>
      <AuthProvider>
        <Switch>
          <Route path='/singup' component={Singup} />
          <Route path='/main' exact component={Main} />
          <Route path='/main/:id' component={List} />
          <Redirect from='**' to='main' />
        </Switch>
      </AuthProvider>
    </div>
  )
}

export default App
