require('datejs')

class Timestamp {
  postgresql = 'yyyy-MM-dd HH:mm:ss'

  toString = () => {
    let today = Date.parse('today')
    return today.toString(this.postgresql)
  }
}

export default Timestamp
