import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        let {image,name}=this.props.data;
        return (
            <div className='col-4'>
                <img className='w-100' src={image} alt="" />
                <h6>{name}</h6>
                <button className=' btn-success'>Add</button>
                <button 
                className=' btn-dark' 
                onClick={() => {this.props.handelClickDetail(this.props.data)  }}>View</button>
            </div>
        )
    }
}
