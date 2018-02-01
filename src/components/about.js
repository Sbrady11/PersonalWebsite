import React from 'react';
import ProfilePic from '../images/profilePicture.png';

class About extends React.Component {
  render() {
    return (
      <div>
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
          </div>
        </div>
      </div>
    )
  }
}

export default About;