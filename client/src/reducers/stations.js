// const STATION_LIST_ALL = 'STATION_LIST_ALL'
// const STATION_NEAR_BY = 'STATION_NEAR_BY'
// const STATION_LIST_OBSERVATIONS = 'STATION_LIST_OBSERVATIONS'

// NOTE: For testing only
import dataSeries from '../charts/stations'

const stations = ( state = {}, action ) => {
  switch( action.type ) {
    case 'STATION_LIST_ALL':
      // return { ...state, data: action.data }
      return { ...state, data: dataSeries.features }
    case 'STATION_NEAR_BY':
      return { ...state, data: action.data }
    case 'STATION_LIST_OBSERVATIONS':
      return { ...state, data: action.data }
    default:
      return state
  }
}

export default stations
