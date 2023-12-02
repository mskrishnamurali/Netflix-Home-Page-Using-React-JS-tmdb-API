// App.js
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import { action, original } from './Components/Urls';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Rowpost url={original} title='Netflix Originals' />
      <Rowpost url={action} title='Action' isSmall />
    </div>
  );
}

export default App;

