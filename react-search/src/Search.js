import React, {Component} from 'react'
import Results from './Results'

export default class Search extends Component {

    state = {
        textBox: '',
        results: []
    }

    handleChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.search(this.state.textBox)
        // the below console log was breaking promise chain:
        // console.log(this.state.textBox)
        .then(array => this.setState({results: array}))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search:
            <input type="text" name="textBox" value={this.state.textBox} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <Results searchResult={this.state.results} />
            </div>
        )
    }

}