import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(10)

  const incrementBy2 = () => {
    setCount(count + 2)
  }

  const decrementBy1 = () => {
    setCount(count - 1)
  }

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <div className="count-display">
        <h2>{count}</h2>
      </div>
      <div className="buttons-container">
        <button className="increment-btn" onClick={incrementBy2}>
          Add 2
        </button>
        <button className="decrement-btn" onClick={decrementBy1}>
          Sub 1
        </button>
      </div>
    </div>
  )
}

export default Counter
