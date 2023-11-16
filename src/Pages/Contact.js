import React from 'react'
import { useState } from 'react';
import '../Maincss/Form-Contact.css';
import { FaEnvelope, FaTwitter } from 'react-icons/fa';


function Contact() {
    const [animate, setAnimate] = useState(false);
    const handlePageClick = () => {
      setAnimate(true);

  };


  return (

     <div className={`contact-wrapper ${animate ? 'animate' : ''}`} onClick={handlePageClick}>
      <div className={`contact-box ${animate ? 'animate' : ''}`}>
        <div className={`headercontact-box ${animate ? 'animate' : ''}`}>
          <h2>Get in touch</h2>
          <div className={`textcontact-box ${animate ? 'animate' : ''}`}>
            <p>
              Have a project in mind? Looking to partner or work together? Reach out through the form, and I'll get back to you in the next 48 hours.
            </p>
          </div>
        </div>

        {/* Other sections go here */}
        
        <div className={`contact-container ${animate ? 'animate' : ''}`}>
          <div className={`contact-item ${animate ? 'animate' : ''}`}>
            <FaEnvelope className="logo" />
            <span className="contact-info">philipboafo@gmail.com</span>
          </div>

          <div className={`contact-item ${animate ? 'animate' : ''}`}>
            <FaTwitter className="logo" />
            <span className="contact-info">Twitter DM</span>
          </div>
        </div>

        <div className={`gridContact-container ${animate ? 'animate' : ''}`}>
          <div className={`name-box gridContainer-item ${animate ? 'animate' : ''}`}>
            <label>
              <input
                placeholder=' Name'
                type="text"
              />
            </label>
          </div>

          <div className={`email-box gridContainer-item ${animate ? 'animate' : ''}`}>
            <label>
              <input
                placeholder=' Email'
                type="email"
              />
            </label>
          </div>
        </div>

        <div className={`message-box ${animate ? 'animate' : ''}`}>
          <label>
            <textarea
              placeholder='Message'
            />
          </label>
        </div>

        <div className={`formbtn ${animate ? 'animate' : ''}`}>
          <span className='btn-arrow'>
            {/* <FaArrowRight/> */}
          </span>
          <input type="submit" value="Send" />
        </div>
      </div>
    </div>
 




  )
}

export default Contact