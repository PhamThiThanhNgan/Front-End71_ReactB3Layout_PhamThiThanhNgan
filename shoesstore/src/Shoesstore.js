import React, { Component } from 'react'
import './Shoesstore.css';
import Product from './Product';
import ProductItem from './ProductItem';
import data from './data.json';
import Modal from './Modal';
export default class Shoesstore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products : data,
    };

  }
  
  render() {
    return (
        <div className='container'>
            <h1 className='text-center mb-5'>Shoesstore</h1>
            <div className='a'>
              
              {this.state.products.map((item) =>{
              return(
                <ProductItem product={item} setStateModal={this.state.setStateModal}/>
              );
              
            })}
            
           
            </div>
          
           <Modal content={this.state.ProductDetail} />
        </div>
    )
  }
}
