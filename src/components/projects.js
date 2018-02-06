import React from 'react';
import ATP from '../images/atpScreenshot.jpeg';

class Projects extends React.Component {
  render() {
    return (
      <div className='projects'>
        <div className='page'>
            <a href='https://peaceful-scrubland-86393.herokuapp.com/'> <img src={ATP} alt='ATPOptionsImg'/> </a>
        </div>
        <div className='spacer'>
        </div>
      </div>
    )
  }
}

export default Projects;