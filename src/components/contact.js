import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className='page'>
          <div className='contactInfo'>
            <p>
              email: <a href='mailto:simonbrady@mac.com'>simonbrady@mac.com</a>
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