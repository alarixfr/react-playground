import gymscribeBanner from './assets/gymscribeBanner.png';

function Portfolio() {
  return (
    <section className="card card--section">
      <h2>Projects i made before this messy website...</h2>
      <div className="portfolio__project">
        <p>Gymscribe - Flavortown Well Cooked!</p>
        <img alt="Gymscribe" src={gymscribeBanner}></img>
        <button className="action__button">Flavortown</button>
        <button className="action__button">Github</button>
      </div>
      <p>no other project i want to show lol</p>
    </section>
  );
}

export default Portfolio;