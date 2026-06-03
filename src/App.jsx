import { useState } from 'react'

import './App.css'

import ProductCard from './components/ProductCard'

function App() {

  const [totalItems, setTotalItems] = useState(0)

  const products = [

    {

      id: 1,

      name: 'Laptop',

      price: 50000,

      category: 'Electronics'

    },

    {

      id: 2,

      name: 'Mobile',

      price: 25000,

      category: 'Electronics'

    },

    {

      id: 3,

      name: 'Headphones',

      price: 3000,

      category: 'Accessories'

    },

    {

      id: 4,

      name: 'Smart Watch',

      price: 5000,

      category: 'Wearables'

    },

    {

      id: 5,

      name: 'Keyboard',

      price: 1500,

      category: 'Accessories'

    }

  ]

  const handleBuy = () => {

    setTotalItems(totalItems + 1)

  }

  return (
<div className="container">
<h1>React Product Store</h1>
<h2>Cart Items: {totalItems}</h2>
<div className="product-container">

        {products.map(product => (
<ProductCard

            key={product.id}

            name={product.name}

            price={product.price}

            category={product.category}

            onBuy={handleBuy}

          />

        ))}
</div>
</div>

  )

}

export default App
 