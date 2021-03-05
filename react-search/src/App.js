import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import Search from './Search'

const search = () => Promise.resolve([{id: 1, title: "product one"}, {id: 2, title: "product two"}, {id: 3, title: "product three"}]);

class App extends Component {

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Search search={search} />
      </div>
    )
  }
}

export default App