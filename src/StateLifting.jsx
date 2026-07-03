import { useState } from 'react';

function StateLifting() {
  const [count, setCount] = useState(0);
  
  return (
    <section className="card card--section">
      <h2>State Lifting example</h2>
      <p>shared state to multiple components</p>
      <Header count={count}/>
      <Button setCount={setCount}/>
    </section>
  );
}

function Header({ count }) {
  return (
    <h3>total count: {count}</h3>
  );
}

function Button({ setCount }) {
  return (
    <button class="counter__button" onClick={() => setCount(c => c + 1)}>count + 1</button>
  );
}

export default StateLifting;