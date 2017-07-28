import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Divider } from 'semantic-ui-react'
import WeatherRecRow from './WeatherRecRow'
import InfiniteScroll from 'react-infinite-scroller'
import styled from 'styled-components'
import { humidityRecords, clearHumidityRecords } from '../actions/weatherRecordings'
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
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding: 0.5rem 0.5rem !important;
`

/**
 * Component for displaying data readings in table format
 * @extends {React.Component}
 */
class WeatherReadings extends Component {
  state = { dataType: null, itemsPerPage: 5, hasMore: true, dates: null, loader: humidityRecords }

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
    let { dates, loader } = this.state
    let { weatherRecordings: wc, dispatch, dataType = 'humidity' } = this.props
    if( wc[dataType] && wc[dataType].pagination.total_pages ) {
      if( page <= wc[dataType].pagination.total_pages ) {
        // debugger
        dates ? dispatch(loader(dates,page)) : dispatch(loader(page))
      } else {
        this.setState({ hasMore: false })
      }
    }
  }

  handleQuery = ( dates, loader ) => {
    let { dispatch } = this.props
    this.setState({
      dates,
      loader,
    }, () => {
      dispatch(clearHumidityRecords())
      dispatch(loader(dates,1))
    })
  }

  render() {
    return (
      <TableArea>
        <Grid>
          <WeatherQueryForm handleQuery={this.handleQuery} />
          <Grid.Row columns={3} style={{ paddingTop: '0'}}>
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
