import React from 'react';
import { Button } from 'reactstrap';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className='page'>
          <div className='contactInfo'>
            <p>
              <Button><a href='mailto:simonbrady@mac.com'>Email</a></Button>
            </p>
            <p>
              914 483 9583
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;