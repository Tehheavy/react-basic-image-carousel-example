import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './components/carousel'
import BiCarousel from './components/bicarousel'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Directional Carousel
        <div style={{height:'400px',width:'400px'}}>
          <Carousel images={['https://i.imgur.com/YLWsY4G.jpg','https://i.imgur.com/Irg9QIx.jpg','https://i.imgur.com/W9U5y71.jpg','https://i.imgur.com/rw5BnRM.jpg','https://i.imgur.com/y4njNDk.png','https://clipground.com/images/long-clipart-13.jpg']}/>
        </div>
        <br></br>
        BiDirectional Carousel
        <div style={{height:'400px',width:'400px'}}>
          <BiCarousel images={['https://i.imgur.com/YLWsY4G.jpg','https://i.imgur.com/Irg9QIx.jpg','https://i.imgur.com/W9U5y71.jpg','https://i.imgur.com/rw5BnRM.jpg','https://i.imgur.com/y4njNDk.png','https://clipground.com/images/long-clipart-13.jpg']}/>
        </div>
      </header>
    </div>
  );
}

export default App;
