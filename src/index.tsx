import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Route } from 'react-router-dom'
import App from './components/App'

import store from './redux/rootReducer'

ReactDOM.render(
  <React.StrictMode>
    <Route>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </Route>
  </React.StrictMode>,
  document.getElementById('root')
)
