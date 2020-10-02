import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';

//Components
import NavBar from './components/navbar/navbar.component';
import Carousal from './components/carousal/carousal.component';
import TitleMessage from './components/title-massage/title.message.component';
import About from './pages/about/about.component';
import Skills from './pages/skills/skills.component';
import Experience from './pages/experience/experience.component';

//Styles
import './App.css';

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <NavBar/>
      <Carousal/>
      <TitleMessage />
      <div>
        <Parallax blur={{ min: -30, max: 30 }} strength={-200}>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About/>
            </Fade>
          </Container>
        </Parallax>
      </div>

      {/* Skills */}
      <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <Skills/>
            </Fade>
          </Container>
      </div>

      {/* Experience */}
      <div>
        <Parallax blur={{ min: -30, max: 30 }} strength={-200}>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <Experience/>
              </Fade>
            </Container>
          </Parallax> 
      </div>
    </div>
  );
}

export default App;
