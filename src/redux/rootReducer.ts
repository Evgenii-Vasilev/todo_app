import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'


const rootReducer = combineReducers({

})

const store = createStore(rootReducer, applyMiddleware(thunk))
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store