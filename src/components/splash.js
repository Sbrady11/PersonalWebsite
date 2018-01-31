import React from 'react';
import TextLoop from 'react-text-loop';


class Splash extends React.Component {
  render() {
    return (
      <div>
        Splash
        <div className='page'>
          <TextLoop springConfig={{ stiffness: 180, damping: 8 }}
                    children={[
                      "Full Stack",
                      "Front End",
                      "Back End",
                      "Web"
                    ]} 
                    speed={1800}>
          </TextLoop> Developer
        </div>
      </div>
    )
  }
}

export default Splash;