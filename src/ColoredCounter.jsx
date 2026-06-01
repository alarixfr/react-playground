import { useState } from 'react';

function ColoredCounter({ color }) {
  const [count, setCount] = useState(0);
  
  function increment() {
    setCount(prev => prev + 1);
  }
  
  return (
    <>
      <button onClick={increment} style={{ backgroundColor: color }} className="counter__button">{color} counter: {count}</button>
    </>
  );
}

export default ColoredCounter;