import React from 'react'
import '../Maincss/Services.css';




function Services() {
  const HomeStyles = {
    fontWeight: 900,
    color: 'white',
    fontSize: 60,
  };
  return (
    <div className='service-Container'>
      <div className="item-container">
        <span className='item-header' style={HomeStyles}>
          Developing Software Products,User Interfaces and Experience
        </span>

      </div>


    </div>
  )
}

export default Services