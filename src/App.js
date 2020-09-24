import React from 'react';

//Components
import NavBar from './components/navbar/navbar.component'
import Carousal from './components/carousal/carousal.component'
import TitleMessage from './components/title-massage/title.message.component'

import './App.css';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Carousal/>
      <TitleMessage />
    </div>
  );
}

export default App;
