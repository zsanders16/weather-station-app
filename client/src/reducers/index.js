import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import navbar from './navbar'
import { locations } from './locations'
import favorites from './favorites'

const rootReducer = combineReducers({
  user,
  flash,
  navbar,
  locations,
  favorites,
})

export default rootReducer
