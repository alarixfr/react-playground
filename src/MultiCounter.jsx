import ColoredCounter from './ColoredCounter.jsx'

function MultiCounter() {
  return (
    <>
      <ColoredCounter color="red" />
      <ColoredCounter color="green"/>
      <ColoredCounter color="blue" />
    </>
  );
}

export default MultiCounter;