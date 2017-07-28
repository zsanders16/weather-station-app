import React from 'react'
import { Segment, Dropdown } from 'semantic-ui-react'
import { getSearchRequest } from '../actions/searchBar'
import axios from 'axios'
import { getSearchWeather } from '../actions/weatherForecasts'
import { connect } from 'react-redux'

class SearchBar extends React.Component {
    state = { results: []} 


    getOptions = (e, value) => {

        if(value.length >= 3){
            getSearchRequest(value, this.createDropdowns)
        }
    }

    createDropdowns = (cities) => {
        this.setState( {results: cities})
    }

    onClick = (e,{value}) => {
        let { dispatch } = this.props
        dispatch(getSearchWeather(value))
    }

    render(){
        let { searchInput, results } = this.state
        return(
            <Segment basic > 
                <Dropdown
                    search={true}
                    scrolling
                    selection
                    placeholder='Input City Name...'
                    onSearchChange={this.getOptions}
                    options={results}
                    onChange={this.onClick}
                />
            </Segment>
        )
    }
}



export default connect()(SearchBar)