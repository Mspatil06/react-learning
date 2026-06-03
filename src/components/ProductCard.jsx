function ProductCard({ name, price, category, onBuy }) {
 return (

<div className="card">
<h2>{name}</h2>
<p>
<strong>Category:</strong> {category}
</p>
<p>
<strong>Price:</strong> ₹{price}
</p>
<button onClick={onBuy}>
       Buy Now
</button>
</div>

 )
}
export default ProductCard