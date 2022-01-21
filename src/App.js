import React, { useState, useEffect } from 'react';
import './App.css';
import About from './Components/About/About';
import Cover from './Components/Cover/Cover';
import Footer from './Components/Footer/Footer';
import Info from './Components/Info/Info';
import NavBar from './Components/NavBar/NavBar';
import Slider from './Components/Slider/Slider';

function App() {

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <NavBar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
