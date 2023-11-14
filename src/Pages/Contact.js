import React from 'react'
import { useState } from 'react';
import '../Maincss/Form-Contact.css';


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`The name you entered was: ${name}\nThe email you entered was: ${email}\nThe message you entered was: ${message}`);




      
  };

 
  return (

    <div className='contact-wrapper'>
      <div className='contact-box'>
        <div className='headercontact-box'>
          <h3>Get in touch</h3>
          <div className="textcontact-box">
            <p>
              Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.</p>
          </div>
          <div className="inner-contactForm">
  <form onSubmit={handleSubmit} className="gridform-contact">
    <div className='name-box mv-one'>
      <label>
        <input
          placeholder=' Name'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </div>

    <div className='email-box mv-two'>
      <label>
        <input
          placeholder=' Email'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
    </div>

    <div className='message-box mv-three'>
      <label>
        <textarea
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4} // Adjust the number of rows to control the height
        />
      </label>
    </div>

    <div className="formbtn">
      <span className='btn-arrow'>
        {/* <FaArrowRight/> */}
      </span> 
      <input type="submit" value="Send" />
    </div>
  </form>
</div>


        </div>
       
</div>

     

    </div>
  )
}

export default Contact