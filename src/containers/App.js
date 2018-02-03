import React, { Component } from 'react';
import About from '../components/about.js';
import Contact from '../components/contact.js';
import Projects from '../components/projects.js';
import Resume from '../components/resume.js';
import TextLoop from 'react-text-loop';
import Logo from '../images/Logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header'>
          <div className='logo'>
            <img src={Logo} alt='logo'/>
          </div>
          <div className='title'>
            <TextLoop springConfig={{ stiffness: 180, damping:15}}
                      children={[
                        "Full Stack",
                        "Front End",
                        "Back End",
                        "Web"
                      ]} 
                      speed={2300}>
            </TextLoop> Developer
            <p></p>
          </div>
        </div>
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
    );
  }
}

export default App;
