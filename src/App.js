import React from 'react';
import TopBar from './sections/TopBar'
import Attention from './sections/Attention'
import Team from './sections/Team'
import Offer from './sections/Offer'
import Footer from './sections/Footer'

import './App.css';

function App() {
  return (
    <div className="app">
      {/* wywołanie komponentu */}
       <TopBar/>
       <Attention/>
       <Team/>
       <Offer/>
       <Footer/>
    </div>
  );
}

export default App;
