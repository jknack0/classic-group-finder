import { createStore, combineReducers, applyMiddleware } from 'redux'
import groupReducer from './reducers/groupReducer'
import navigationReducer from './reducers/navigationReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  groups: groupReducer,
  navigation: navigationReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store