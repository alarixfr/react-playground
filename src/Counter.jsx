import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  function counterIncrease() {
    setCount(count + 1);
  };
  
  
  return (
    <button onClick={counterIncrease} className="counter__button">
      Click Me! ({count})
    </button>
  );
}

export default Counter;