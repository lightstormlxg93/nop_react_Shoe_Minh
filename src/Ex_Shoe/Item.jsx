import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        let {image,name}=this.props.data;
        return (
            <div className='item_Background col-4'>
                <div className='item_Shoe '>
                    <img style={{width:"100%"}}  src={image} alt="" />
                    <h6>{name}</h6>
                    <button className=' btn-success' onClick={() => {this.props.handelAddToCart(this.props.data)  }}>Add</button>
                    <button 
                    className=' btn-dark' 
                    onClick={() => {this.props.handelClickDetail(this.props.data)  }}>View</button>
                </div>
            </div>
            
        )
    }
}
