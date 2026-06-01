import { useState } from 'react';

function UselessToggle() {
  const [isOn, setIsOn] = useState(false);
  
  function toggle() {
    setIsOn(prev => !prev)
  }
  
  return (
    <button onClick={toggle} className="counter__button">Useless Toggle: {isOn ? 'On' : 'Off'}</button>
  );
}

export default UselessToggle;