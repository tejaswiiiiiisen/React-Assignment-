import React from 'react'
import Card from './Card'
import laptop  from './assets/laptop.jpg'

function App() {
  
  const obj = [
    { 
      heading : "Laptop",
      img : "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
      sub1 : "Best Laptop in the World",
      sub2: "With Amazing features",
      price1: 80000,
      price2: 70000
    },
    {
      heading : "Mobile",
      img : "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
      sub1 : "Best Mobile in the World",
      sub2 : 'With Amazing Camera',
      price1: 50000,
      price2: 40000
    },
    {
      heading : "PS5",
      img : "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80",
      sub1 : "Best PS5 in the World",
      sub2 : 'With Amazing Games',
      price1: 40000,
      price2: 30000
    },
    {
      heading : "Fitbit",
      img : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
      sub1 : "Best Fitbit in the World",
      sub2 : 'With Amazing Tech',
      price1: 15000,
      price2: 10000
    },


  ]
  return (
    <div>
      <h1 className='header'>Trending Products</h1>
    <div className='main'>
      <Card product={obj[0]}/>
      <Card product={obj[1]}/>
      <Card product={obj[2]}/>
      <Card product={obj[3]}/>
      
    </div>
    </div>
  )
}

export default App