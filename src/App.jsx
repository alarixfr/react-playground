import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Card from './Card.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Journey from './Journey.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Card />
      <About />
      <Portfolio />
      <Journey />
    </>
  );
}

export default App
