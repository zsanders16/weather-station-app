const favorites = ( state = [], action ) => {
  switch( action.type ) {
    case 'FAVORITES':
      return action.favorites
    default:
      return state
  }
}

export default favorites
