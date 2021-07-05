import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import { theme } from './context/themeContext'
import App from './components/App'

import store from './redux/rootReducer'

ReactDOM.render(
  <React.StrictMode>
    <Route>
      <Provider store={store}>
        <ScopedCssBaseline>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ScopedCssBaseline>
      </Provider>
    </Route>
  </React.StrictMode>,
  document.getElementById('root')
)
