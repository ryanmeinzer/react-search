import React, {Component} from 'react'

export default class Results extends Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.searchResult.map(element => {
                        return <li key={element.id}>{element.title}</li>
                    }
                    )}
                </ul>
            </div>
        )
    }
}