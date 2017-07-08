import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import navbar from './navbar'
import { locations } from './locations'
import favorites from './favorites'
import currentLocation from './currentLocation'
import addresses from './addresses'

const rootReducer = combineReducers({
  user,
  flash,
  navbar,
  locations,
  favorites,
  currentLocation,
  addresses,
})

export default rootReducer
