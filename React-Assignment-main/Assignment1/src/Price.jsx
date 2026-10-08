import React from 'react'
import './Price.css'
function Price({price1,price2}) {
  return (
    <div className='pricing'>
    <span id='str'>{price1}</span>
    <span>{price2}</span>
    </div>
  )
}

export default Price