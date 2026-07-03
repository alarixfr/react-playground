import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Card from './Card.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Journey from './Journey.jsx';
import Props from './Props.jsx';
import UseState from './UseState.jsx';
import UseEffect from './UseEffect.jsx';
import StateLifting from './StateLifting.jsx';
import Calculator from './Calculator.jsx';
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
      <Props />
      <UseState />
      <UseEffect />
      <StateLifting />
      <Calculator />
    </>
  );
}

export default App;
