import { useState } from 'react';

function ObjectState() {
  const [user, setUser] = useState({
    name: 'Alaric',
    counter: 0
  });
  
  function increment() {
    setUser(prev => ({
      ...prev,
      counter: prev.counter + 1
    }));
  }
  
  return (
    <>
      <p>Name: {user.name}</p>
      <p>Counter: {user.counter}</p>
      <button onClick={increment} className="counter__button">increment</button>
    </>
  )
}

export default ObjectState;