import { useState, useMemo, useCallback } from 'react'

import ProductList from './components/ProductList'

import SearchBox from './components/SearchBox'

import useCounter from './hooks/useCounter'

import './App.css'

function App() {

  const [search, setSearch] = useState('')

  const { count, increment, decrement } = useCounter()

  const products = [

    { id: 1, name: 'Laptop', price: 50000 },

    { id: 2, name: 'Mobile', price: 25000 },

    { id: 3, name: 'Keyboard', price: 1000 },

    { id: 4, name: 'Mouse', price: 800 },

    { id: 5, name: 'Monitor', price: 12000 }

  ]

  const filteredProducts = useMemo(() => {

    console.log('Filtering Products')

    return products.filter(product =>

      product.name

        .toLowerCase()

        .includes(search.toLowerCase())

    )

  }, [search])

  const handleSearch = useCallback(value => {

    setSearch(value)

  }, [])

  return (
<div className="container">
<h1>Product Dashboard</h1>
<SearchBox

        search={search}

        setSearch={handleSearch}

      />
<ProductList

        products={filteredProducts}

      />
<div className="counter">
<h2>Counter: {count}</h2>
<button onClick={increment}>

          Increment
</button>
<button onClick={decrement}>

          Decrement
</button>
</div>
</div>

  )

}

export default App
 