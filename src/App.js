import React, { Component } from 'react'
import Nav from './components/Nav'
import HogList from './components/HogList'
import './App.css'
import Data from './porkers_data'
import Form from './components/Form'


class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: Data,
      greasedHogs: Data.filter(hog => hog.greased),
      ungreasedHogs: Data.filter(hog => !hog.greased),
      filterOption: 'all',
      sortOption: 'all'
    }
    this.filter = this.filter.bind(this)
    this.sort = this.sort.bind(this)
  }

  filter (value) {
    if (value === "1") {
      this.setState({
        filterOption: 'all'
    })} else if (value === "2") {
      this.setState({
        filterOption: 'greased'
    })} else {
      this.setState({
        filterOption: 'ungreased'
    })}
  }
  sort (value) {
    if (value === "4") {
      this.setState({
        sortOption: 'all'
    })} else if (value === "5") {
      this.setState({
        sortOption: 'name'
    })} else {
      this.setState({
        sortOption: 'weight'
    })}
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Form ungreasedHogs={this.state.ungreasedHogs} greasedHogs={this.state.greasedHogs} onFilter={this.filter} onSort={this.sort}/>
        <br/>
        <br/>
        <br/>
        <HogList hogs={this.state.hogs} ungreasedHogs={this.state.ungreasedHogs} greasedHogs={this.state.greasedHogs}
        filterOption={this.state.filterOption}
        sortOption={this.state.sortOption}
        />
      </div>
    )
  }
}



export default App;
