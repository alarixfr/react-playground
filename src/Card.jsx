import profilePicture from './assets/alarixfr.png';

function Card() {
  return (
    <div className="card">
      <img src={profilePicture} alt="Profile Picture"></img>
      <h2>Alaric Abyasa (Alarixfr)</h2>
      <p>I like building things and stuff!</p>
    </div>
  );
}

export default Card;