import LogEffect from './LogEffect.jsx';
import LogDependencyEffect from './LogDependencyEffect.jsx';
import ConsoleCounter from './ConsoleCounter.jsx';

function UseEffect() {
  return (
    <section className="card card--section">
      <h2>UseEffect stuff!</h2>
      <p>learning and testing useEffect usage</p>
      <LogEffect />
      <p>with dependency:</p>
      <LogDependencyEffect />
      <p>useEffect + useState:</p>
      <ConsoleCounter/>
    </section>
  );
}

export default UseEffect;