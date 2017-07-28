import React from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Segment } from 'semantic-ui-react'
import { getSearchRequest } from '../actions/searchBar'


class SearchBar extends React.Component {
    state = { searchInput: '', results: []} 


    searchInputChange = (e) => {
        this.setState({ searchInput: e})
    }

    getOptions = () => {
        let { searchInput } = this.state
        return getSearchRequest(searchInput)
    }

    render(){
        let { searchInput } = this.state
        return(
            <Segment basic > 
                 <Select.Async
                    placeholder='Search by City...' 
                    onInputChange={this.searchInputChange}
                    loadOptions={this.getOptions}
                 /> 
            </Segment>
        )
    }
}


export default SearchBar