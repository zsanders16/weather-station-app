import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Loader } from 'semantic-ui-react'
import WeatherRecRow from './WeatherRecRow'
import InfiniteScroll from 'react-infinite-scroller'
import styled from 'styled-components'


/**
 * Custom Styed Components
 */
  const ScrollArea = styled(Segment)`
    height: 200px;
    overflow: auto;
  `

/**
 * Component for displaying data readings in table format
 * @extends {React.Component}
 */
class WeatherReadings extends Component {
  state = { itemsPerPage: 5, tableData: [] }

  /**
   * Renders each row of the data series. Inserts values and sets markers
   * @return {Array} Component Sets for the table body
   */
  displayDataSeries = () => {
    let { tableData } = this.state
    if( !tableData || tableData.length <= 0 ){
      this.loadMoreRecords()
    }
    debugger
    if( tableData && tableData.length > 0 ){
      return series.map( (data,index) => {
        return (
          <WeatherRecRow key={index} data={data} />
        )
      })
    }
  }

  loadMoreRecords = () => {
    let { series } = this.props
    let { tableData, itemsPerPage } = this.state
    let leftOver = series.length - tableData.length
    let newItems = []
    if( leftOver <= itemsPerPage ) {
      newItems = series.slice(tableData.length, series.length)
    } else if ( leftOver >= itemsPerPage ) {
      newItems = series.slice( tableData.length, tableData.length + itemsPerPage )
    }
    this.setState({
      tableData: [ ...tableData, ...newItems ]
    })
  }

  hasMore = () => {
    let { tableData} = this.state
    let { series } = this.props
    if( tableData.length < series.length )
      return true
    return false
  }

  render() {
    return (
      <ScrollArea>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMoreRecords}
          hasMore={this.hasMore()}
          loader={<Loader active />}
          useWindow={false} >
          { this.displayDataSeries() }
        </InfiniteScroll>
      </ScrollArea>
    )
  }
}

/**
 * Maps Redux state values to local component state
 * @param {Object} state - reference to redux state
 * @param {Obect} props = properties passed down from parent component
 */
const mapStateToProps = ( state, props ) => {
  return {}
}

export default connect(mapStateToProps)(WeatherReadings)
