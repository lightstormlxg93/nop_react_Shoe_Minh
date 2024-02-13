import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
  renderListShoe=() => { 
    return this.props.shoeArr.map((item) => { 
        return <Item handelClickDetail={this.props.handelViewDetail} key={item.id} data={item}/>
     })
   }
    render() {
    return (
      <div className='row col-8'>
        {this.renderListShoe()}
      </div>
    )
  }
}
