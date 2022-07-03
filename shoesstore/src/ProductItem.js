import React, { Component } from 'react'
import './ProductItem.css';
import Button from 'react-bootstrap/Button';

export default class ProductItem extends Component {
  render() {
    return (
      <div className="c" > 
        <img className='b' src={this.props.product.image}></img>
        <p>{this.props.product.name}</p>
        <p>{this.props.product.price}</p>
        <Button variant="dark">add to carts <i class="fa fa-shopping-cart" ></i></Button>
      </div>
    )
  }
}
