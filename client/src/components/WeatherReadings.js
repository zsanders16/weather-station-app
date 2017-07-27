import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Loader } from 'semantic-ui-react'
import WeatherRecRow from './WeatherRecRow'
import InfiniteScroll from 'react-infinite-scroller'
import styled from 'styled-components'
import { humidityRecords } from '../actions/weatherRecordings'
import WeatherQueryForm from './WeatherQueryForm'

/**
 * Custom Styed Components
 */
const ScrollArea = styled(Segment)`
  margin: 0 0 !important;
  height: 300px;
  overflow: auto;
`
const TableArea = styled(Segment)`
  width: 50% !important;
  margin: 0 25% !important;
`
const Header = styled(Grid.Column)`
  font-weight: bold;
  font-size: 1.2rem;
`

/**
 * Component for displaying data readings in table format
 * @extends {React.Component}
 */
class WeatherReadings extends Component {
  state = { itemsPerPage: 5, tableData: [], hasMore: true }

  componentDidMount = () => {
    this.setState({ dataType: this.props.match.params.name })
  }

  /**
   * Renders each row of the data series. Inserts values and sets markers
   * @return {Array} Component Sets for the table body
   */
  displayDataSeries = () => {
    let { dataType = 'humidity' } = this.state
    let { weatherRecordings: wc } = this.props
    if( wc[dataType] && wc[dataType].records.length > 0 ){
      return wc[dataType].records.map( (data) => {
        return (
          <WeatherRecRow key={data.id} data={data} />
        )
      })
    }
  }

  loadMoreRecords = ( page ) => {
    let { dataType = 'humidity' } = this.props
    let { weatherRecordings: wc, dispatch } = this.props
    if( wc[dataType] && wc[dataType].pagination.total_pages ) {
      if( page <= wc[dataType].pagination.total_pages ) {
        dispatch(humidityRecords(page))
      } else {
        this.setState({ hasMore: false })
      }
    }
  }

  render() {
    return (
      <TableArea>
        <Grid>
          <WeatherQueryForm />
          <Grid.Row columns={3}>
            <Header width={6}>%RH</Header>
            <Header width={6}>Date</Header>
            <Header width={4}>&nbsp;</Header>
          </Grid.Row>
        </Grid>
        <ScrollArea basic>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadMoreRecords}
            hasMore={this.state.hasMore}
            loader={<div>Loading...</div>}
            useWindow={false}
            >
            { this.displayDataSeries() }
          </InfiniteScroll>
        </ScrollArea>
      </TableArea>
    )
  }
}

/**
 * Maps Redux state values to local component state
 * @param {Object} state - reference to redux state
 * @param {Obect} props - properties passed down from parent component
 */
const mapStateToProps = ( state, props ) => {
  return { weatherRecordings: state.weatherRecordings }
}

export default connect(mapStateToProps)(WeatherReadings)
