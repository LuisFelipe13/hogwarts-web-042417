import React from 'react'

class Form extends React.Component {
  handleChange = (e) => {
    e.target.value < 4 ? this.props.onFilter(e.target.value) : this.props.onSort(e.target.value)
  }
  render() {
    return (
      <div className="ui form">
        <div className="two fields">
          <div className="two wide field">
          <h3>Filter</h3>
          <select onChange={this.handleChange}>
            <option value="1">All</option>
            <option value="2">Greased</option>
            <option value="3">Ungreased</option>
          </select>
          </div>
          <div className="two wide field">
          <h3>Sort</h3>
          <select onChange={this.handleChange}>
            <option value="4">All</option>
            <option value="5">Alphabetically</option>
            <option value="6">By Weight</option>
          </select>
        </div>
        </div>
      </div>
    )
  }
}

export default Form
