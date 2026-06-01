import { useEffect } from 'react';

function LogDependencyEffect() {
  useEffect(() => {
    console.log('dependency log!');
  }, []);
  
  return (
    <p>this one also give console message but only first time render!</p>
  )
}

export default LogDependencyEffect;