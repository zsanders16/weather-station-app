import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import { locations } from './locations'
import favorites from './favorites'
import currentLocation from './currentLocation'
import addresses from './addresses'
import weatherForecasts from './weatherForecasts'
import sensor from './sensor'
import stations from './stations'
import observations from './observations'
import humidities from './humidities'
import datePicker from './datePicker'
import weatherRecordings from './weatherRecordings'


const rootReducer = combineReducers({
  weatherRecordings,
  datePicker,
  observations,
  humidities,
  user,
  flash,
  locations,
  favorites,
  currentLocation,
  addresses,
  weatherForecasts,
  sensor,
  stations,
})

export default rootReducer
