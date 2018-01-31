import React, { Component } from 'react';
import About from '../components/about.js';
import Contact from '../components/contact.js';
import Projects from '../components/projects.js';
import Resume from '../components/resume.js';
import Splash from '../components/splash.js';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Splash />
        <About />
        <Contact />
        <Projects />
        <Resume />
      </div>
    );
  }
}

export default App;
