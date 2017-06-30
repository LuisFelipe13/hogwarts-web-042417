import React from 'react'
import Hog from './Hog'

class HogList extends React.Component {
  constructor() {
    super()
    this.sortArray = this.sortArray.bind(this)
    this.allSearch = this.allSearch.bind(this)
    this.greasedSearch = this.greasedSearch.bind(this)
    this.ungreasedSearch = this.ungreasedSearch.bind(this)
  }
  sortArray (sortOption) {
    if(this.props.sortOption === 'name') {
      return this.props.hogs.name.sort()
    } else if (this.props.sortOption === 'weight') {
      return this.props.hogs.weight.sort()
    }
  }

  allSearch(sortOption) {
    let allHogs = this.props.hogs.map(hog => <div><Hog hog={hog} image={hog.name.toLowerCase().split(" ").join("_")} /><br></br></div>)
    if(sortOption === 'name') {
      allHogs.sort(function(a, b){
        console.log(a.props.children[0].props.image)
        if(a.props.children[0].props.image < b.props.children[0].props.image) return -1
        if(a.props.children[0].props.image > b.props.children[0].props.image) return 1
        return 0
    })} else if (sortOption === 'weight') {
      allHogs.sort(function(a, b){
        if(a.props.children[0].props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b.props.children[0].props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) return 1
        if(a.props.children[0].props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b.props.children[0].props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) return -1
        return 0
    })}
    return allHogs
  }
  greasedSearch(sortOption) {
    let allGreasedHogs = this.props.greasedHogs.map(hog => <div><Hog hog={hog} image={hog.name.toLowerCase().split(" ").join("_")} /><br></br></div>)
    if(sortOption === 'name') {
      allGreasedHogs.sort(function(a, b){
        if(a.props.children[0].props.image < b.props.children[0].props.image) return -1
        if(a.props.children[0].props.image > b.props.children[0].props.image) return 1
        return 0
    })} else if (sortOption === 'weight') {
      allGreasedHogs.sort(function(a, b){
        if(a.props.children[0].props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b.props.children[0].props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) return 1
        if(a.props.children[0].props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b.props.children[0].props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) return -1
        return 0
    })}
    return allGreasedHogs
  }
  ungreasedSearch(sortOption) {
    let allUngreasedHogs = this.props.ungreasedHogs.map(hog => <div><Hog hog={hog} image={hog.name.toLowerCase().split(" ").join("_")} /><br></br></div>)
    if(sortOption === 'name') {
      allUngreasedHogs.sort(function(a, b){
        if(a.props.children[0].props.image < b.props.children[0].props.image) return -1
        if(a.props.children[0].props.image > b.props.children[0].props.image) return 1
        return 0
    })} else if (sortOption === 'weight') {
      allUngreasedHogs.sort(function(a, b){
        if(a.props.children[0].props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b.props.children[0].props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) return 1
        if(a.props.children[0].props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b.props.children[0].props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) return -1
        return 0
    })}
    return allUngreasedHogs
  }

  render() {
    return(
      <div className='ui segment link four cards' id='cards-list'>
        {this.props.filterOption === 'all' &&
          this.allSearch(this.props.sortOption)}
        {this.props.filterOption === 'greased' &&
          this.greasedSearch(this.props.sortOption)}
        {this.props.filterOption === 'ungreased' &&
          this.ungreasedSearch(this.props.sortOption)}
      </div>
    )
  }
}

export default HogList
