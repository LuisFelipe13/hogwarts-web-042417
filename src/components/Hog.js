import React from 'react'

class Hog extends React.Component {
  constructor () {
    super()

    this.state = {
      display: false
    }

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    if (this.state.display) {
    this.setState({
      display: false
    })} else {
    this.setState({
      display: true
    })}
  }

  render() {
    return(
      <div className='ui raised card'>
        <a className='image' href='#'>
          <img src={require('../hog-imgs/' + this.props.image + '.jpg')} />
        </a>
        <div className='content'>
          <div className='description'>
            {this.props.hog.name}
            <span className='right floated'>
              <i className='heart outline like icon' />
            </span>
          </div>
        </div>
        {this.state.display ?
        <button className="ui button"  onClick={this.handleClick}>Less</button> : <button className="ui button"  onClick={this.handleClick}>More</button>}
        {this.state.display && <div id="info">
          <p>{this.props.hog.specialty}</p>
          <p>{this.props.hog.greased}</p>
          <p>{this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
          <p>{this.props.hog['highest medal achieved']}</p>
        </div>}
      </div>
    )
  }
}
export default Hog
