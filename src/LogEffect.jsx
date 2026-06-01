import { useEffect } from 'react';

function LogEffect() {
  useEffect(() => {
    console.log('component rendered, hello!');
  });
  
  return (
    <p>there should be message in the console!</p>
  )
}

export default LogEffect;