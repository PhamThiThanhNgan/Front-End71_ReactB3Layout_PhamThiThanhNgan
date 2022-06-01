import React, { Component } from 'react'
import './Shoesstore.css';
import Product from './Product';
import data from './data.json';
export default class Shoesstore extends Component {
  render() {
    return (
        <div className='container'>
            <h1 className='text-center'>Shoesstore</h1>
            <Product product={data}/>
        </div>
    )
  }
}
