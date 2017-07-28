const weatherRecordings = ( state = { humidity: { records: [], pagination: {} }}, action ) => {
  switch( action.type ) {
    case 'HUMIDITY_RECORDS':
      return {
        humidity: {
          records: [
            ...state.humidity.records,
            ...action.data.records
          ],
          pagination: action.data.pagination
        }
      }
    case 'UPDATE_HUMIDITY_RECORD':
      let index = state.humidity.records.findIndex( rec => {
        return parseInt(rec.id,10) === parseInt(action.data.id,10)
      })
      return {
        humidity: {
          records: [
            ...state.humidity.records.slice(0,index),
            action.data,
            ...state.humidity.records.slice(index +2)
          ],
          pagination: state.humidity.pagination
        }
      }
    case 'QUERIED_HUMIDITY_RECORDS':
      return {
        humidity: {
          records: [
            ...state.humidity.records,
            ...action.data.records
          ],
          pagination: action.data.pagination
        }
      }
    case 'CLEAR_HUMIDITY_RECORDS':
      return {
        humidity: {
          records: [],
          pagination: {},
        },
      }
    default:
      return state
  }
}

export default weatherRecordings
