const datePicker = ( state = {}, action ) => {
  switch( action.type ) {
    case 'UPDATE_DATEPICKER_DATE':
      return {
        ...state,
        [action.dataType]: {
          ...state[action.dataType],
          [action.dateType]: action.date
        }
      }
    default:
      return state
  }
}

export default datePicker
