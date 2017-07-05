const address = ( state = [], action ) => {
  switch( action.type ) {
    case 'ADDRESS':
      return action.addresses

    case 'ADDRESS_CREATE':
      // insert new address at the top of the list
      return [ action.address, ...state ]

    case 'ADDRESS_SHOW':
      // ids should be integers
      return state.find( (address) => action.id === address.id )

    case 'ADRESS_EDIT':
      // find the address to edit from the list
      return state.find( (add) => action.address_id === add.id )

    case 'ADDRESS_UPDATE':
      // remove the old address
      let filtered = state.filter( (add) => action.address.id !== add.id )
      // update the redux list with new
      return [ action.address, ...filtered ]

    case 'ADDRESS_DELETE':
      // remove the old address from the local list
      return state.filter( (add) => action.address_id !== add.id )

    default:
      state
  }
}

export default address
