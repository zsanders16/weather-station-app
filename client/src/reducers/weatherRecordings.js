const weatherRecordings = ( state = {}, action ) => {
  switch( action.type ) {
    case 'HUMIDITY_RECORDS':
      return { series: [ ...state.series, ...action.data ] }
    default:
      return state
  }
}
