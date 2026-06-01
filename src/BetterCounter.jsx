import { useState } from 'react';

function BetterCounter() {
  const [count, setCount] = useState(0);
  
  function increment() {
    setCount(prev => prev + 1);
  }
  
  function decrement() {
    setCount(prev => prev - 1);
  }
  
  return (
    <>
      <p>{count}</p>
      <button onClick={increment} className="counter__button">Counter: increment</button>
      <button onClick={decrement} className="counter__button">Counter: decrement</button>
    </>
  );
}

export default BetterCounter;