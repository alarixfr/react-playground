import { useState } from 'react';

function InputName() {
  const [name, setName] = useState('Alaric');
  
  function changeName() {
    if (name === 'Alaric') {
      setName('Abyasa');
    } else {
      setName('Alaric');
    }
  }
  
  return (
    <>
      <p>Name: {name}</p>
      <button onClick={changeName} className="counter__button">Switch name</button>
    </>
  );
}

export default InputName;