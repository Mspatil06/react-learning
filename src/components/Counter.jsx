import { useState } from 'react'
function Counter() {
 const [count, setCount] = useState(0)
 const increaseCount = () => {
   setCount(count + 1)
 }
 const decreaseCount = () => {
   setCount(count - 1)
 }
 return (
<div className="counter-box">
<h2>Counter Application</h2>
<h1>{count}</h1>
<button onClick={increaseCount}>
       Increment
</button>
<button onClick={decreaseCount}>
       Decrement
</button>
</div>
 )
}
export default Counter