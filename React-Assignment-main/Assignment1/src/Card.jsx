import React from 'react'
import Price from './Price'
import laptop from './assets/laptop.jpg'
import '../src/Card.css'

function Card({ product }) {
  return (

    <div className='box'>
      <h2>{product.heading}</h2>
      <img src={product.img} />
      <p>{product.sub1}</p>
      <p>{product.sub2}</p>
      <Price price1={product.price1} price2 = {product.price2}/>
    </div>
  )
}

export default Card