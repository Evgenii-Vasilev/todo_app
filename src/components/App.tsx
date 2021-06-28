import './App.scss'
import { Container } from '@material-ui/core'
import { Switch, Route, Redirect } from 'react-router'
// @ts-ignore
import { AuthProvider } from '../context/AuthContext'
import Singup from './singup/Singup'
import AllTasks from './allTasks/AllTasks'
import Main from './main/Main'
import List from './list/List'

const App = () => {
  return (
      <Container style={{height: '100vh', paddingTop: '4vh'}} >
        <AuthProvider>
          <Switch>
            <Route path='/singup' component={Singup} />
            <Route path='/main' exact component={Main} />
            <Route path='/main/hitriiPupsik' component={AllTasks} />
            <Route path='/main/:id' component={List} />
            <Redirect from='**' to='main' />
          </Switch>
        </AuthProvider>
      </Container>
  )
}

export default App
