const addresses = ( state = [], action ) => {
  switch( action.type ) {
    case 'ADDRESS':
      return action.addresses

    case 'ADDRESS_CREATE':
      // insert new address at the top of the list
      return [ action.address, ...state ]

    case 'ADDRESS_SHOW':
      // ids should be integers
      return state.find( (address) => {
        return parseInt(action.address_id,10) === parseInt(address.id,10)
      })

    case 'ADRESS_EDIT':
      // find the address to edit from the list
      return state.find( (add) => {
        return parseInt(action.address_id,10) === parseInt(add.id,10)
      })

    case 'ADDRESS_UPDATE':
      // remove the old address
      let filtered = state.filter( (add) => {
        return parseInt(action.address.id,10) !== parseInt(add.id,10)
      })
      // update the redux list with new
      return [ action.address, ...filtered ]

    case 'ADDRESS_DELETE':
      // remove the old address from the local list
      return state.filter( (add) => {
        // debugger
        return parseInt(action.address_id,10) !== parseInt(add.id,10)
      })

    default:
      return state
  }
}

export default addresses
