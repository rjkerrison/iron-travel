import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const incrementCount = (change) => {
    setCount(count + change)
  }

  return (
    <section>
      <h2>Counter</h2>
      <p>{count}</p>
      <div className='flex-row'>
        <button onClick={() => incrementCount(-1)}>-1</button>
        <button onClick={() => incrementCount(1)}>+1</button>
        <button onClick={() => incrementCount(5)}>+5</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  )
}

export default Counter
