import React from 'react';
import ATP from '../images/atpScreenshot.jpeg';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <div className='page'>
          <div className='projects'>
            <a href='https://peaceful-scrubland-86393.herokuapp.com/'> <img src={ATP} alt='ATPOptionsImg'/> </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;