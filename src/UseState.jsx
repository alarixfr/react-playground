import Counter from './Counter.jsx';
import InputName from './InputName.jsx';
import BetterCounter from './BetterCounter.jsx';
import UselessToggle from './UselessToggle.jsx';
import ControlledInput from './ControlledInput.jsx';
import ObjectState from './ObjectState.jsx';
import ArrayState from './ArrayState.jsx';
import MultiCounter from './MultiCounter.jsx';

function useState() {
  return (
    <section className="card card--section">
      <h2>UseState experiments...</h2>
      <p>Random useState thingy</p>
      <Counter />
      <InputName />
      <p>better counter using prev:</p>
      <BetterCounter />
      <UselessToggle />
      <p>Controlled input:</p>
      <ControlledInput />
      <p>object state:</p>
      <ObjectState />
      <p>array state:</p>
      <ArrayState />
      <p>useState + props:</p>
      <MultiCounter />
    </section>
  );
}

export default useState;