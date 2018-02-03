import React from 'react';
import ProfilePic from '../images/profilePicture.png';

class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <div className='page'>
          <div className='aboutText'>
            <div className='profilePicture'>
              <img className='logo' src={ProfilePic} alt='proPic' />
            </div>
            <p>
              My name is Simon. I am a New York based Full Stack Developer and Web Designer.
            </p>
            <p>
              I strive to build modern, clean, and user friendly experiences for my clients.
            </p>
            <p>
              I graduated from Binghamton University with a degree in History, and completed a 19 week coding intesnive bootcamp, the Dev Bootcamp.
            </p>
            <p>
              Not only am I fascinated with medieval history, but I have a passion for sleek, modern, and effective web design.
            </p> 

          </div>
        </div>
      </div>
    )
  }
}

export default About;