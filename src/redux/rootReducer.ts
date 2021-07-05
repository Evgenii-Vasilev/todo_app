import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import popup from './popup/popupReducer'

const rootReducer = combineReducers({
  popup,
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
