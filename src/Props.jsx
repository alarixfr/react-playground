import Profile from './Profile.jsx';

function Props() {
  return (
    <section className="card card--section">
      <h2>Props and stuff..</h2>
      <p>This is where i learn about react props!</p>
      <Profile name="User 1" description="this is example of react element with props, basically just components with parameter lol"/>
      <Profile name="User 2" description="very cool reusable components"/>
      <Profile name="User 3" description="react is amazing"/>
      <Profile name="User 0" description="Hello World!"/>
    </section>
  );
}

export default Props;