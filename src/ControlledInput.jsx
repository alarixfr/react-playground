import { useState } from 'react';

function ControlledInput() {
  const [text, setText] = useState('');
  
  return (
    <>
      <p>you typed: {text}</p>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </>
  );
}

export default ControlledInput;