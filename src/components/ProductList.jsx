import React from 'react'

const ProductList = React.memo(({ products }) => {

  console.log('ProductList Rendered')

  return (
<div>

      {products.map(product => (
<div key={product.id} className="card">
<h3>{product.name}</h3>
<p>₹ {product.price}</p>
</div>

      ))}
</div>

  )

})

export default ProductList
 