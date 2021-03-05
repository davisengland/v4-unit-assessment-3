import React, {Component} from 'react'

export default class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ''
        }
    }

    handleChange = (val) => this.setState({userInput: val})

    render() {
        return(
            <h1 className='search-bar'>
                <input onChange={event => this.handleChange(event.target.value)}/>
                <button onClick={() => this.props.filterBooks(this.state.userInput)}>search</button>
                <button onClick={() => this.props.reset()}>clear search</button>
            </h1>
        )
    }
}