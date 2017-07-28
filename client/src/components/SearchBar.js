import React from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Segment } from 'semantic-ui-react'

class SearchBar extends React.Component {
    state = { searchInput: '', results: []} 


    searchInputChange = (e) => {
        this.setState({ searchInput: e})
    }




    render(){
        let { searchInput } = this.state
        return(
            <Segment basic > 
                <Select placeholder='Search by City...'  onInputChange={this.searchInputChange} />
            </Segment>
        )
    }
}


export default SearchBar