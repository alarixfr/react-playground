import { useEffect, useState } from 'react';

function ConsoleCounter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log(`Counter changed: ${count}`)
  }, [count])
  
  function increment() {
    setCount(prev => prev + 1);
  }
  
  return (
    <button onClick={increment} className="counter__button">Counter: {count}</button>
  )
}

export default ConsoleCounter;