import React from 'react'

class Hog extends React.Component {
  constructor () {
    super()

    this.state = {
      display: false,
      liked: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleLike = this.handleLike.bind(this)
  }
  handleClick = (e) => {
    this.setState({
      display: !this.state.display
    })
  }

  handleLike = (e) => {
    this.setState({
      liked: !this.state.liked
    })
  }

  render() {
    return(
      <div id="card" className='ui raised card'>
        <a className='image' href='#'>
          <img alt="hog" src={require('../hog-imgs/' + this.props.image + '.jpg')} />
        </a>
        <div className='content'>
          <div className='description'>
            <strong>Name:</strong> {this.props.hog.name}
            <span className='right floated'>
              {!this.state.liked ? <i className='heart outline like icon' onClick={this.handleLike} /> :
              <i className='heart like icon red' onClick={this.handleLike}/>}
            </span>
          </div>
        </div>
        {this.state.display ?
        <button className="ui button"  onClick={this.handleClick}>Less<i className="dropdown icon"></i></button> :
        <button className="ui button"  onClick={this.handleClick}>More<i className="dropdown icon"></i></button>}

        {this.state.display &&
          <div className="ui selection dropdown" id="info">
            <p className="dropdowns"><strong>Specialty:</strong> {this.props.hog.specialty}</p>
            <p className="dropdowns"><strong>Weight / Fridge Ratio:</strong> {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
            <p className="dropdowns"><strong>Highest Medal:</strong> {this.props.hog['highest medal achieved']}</p>
          </div>}
      </div>
    )
  }
}
export default Hog
