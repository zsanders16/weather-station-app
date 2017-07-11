import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import { locations } from './locations'
import favorites from './favorites'
import currentLocation from './currentLocation'
import addresses from './addresses'
import weather from './weather'
import sensor from './sensor'


const rootReducer = combineReducers({
  user,
  flash,
  locations,
  favorites,
  currentLocation,
  addresses,
  weather,
  sensor,
})

export default rootReducer
