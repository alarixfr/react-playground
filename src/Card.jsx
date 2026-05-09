import profilePicture from './assets/alarixfr.png';

function Card() {
  return (
    <div className="card">
      <h2>The kid behind this website...</h2>
      <img src={profilePicture} alt="Profile Picture"></img>
      <p className="card__name">Alaric Abyasa (Alarixfr)</p>
      <p>I like building things and stuff!</p>
    </div>
  );
}

export default Card;