import React from 'react'
import '../Maincss/Services.css';
import { FaFolderOpen, FaForumbee, FaFigma } from "react-icons/fa";
import { PiPlugs } from "react-icons/pi";




function Services() {
  const HomeStyles = {
    fontWeight: 900,
    color: 'white',
    fontSize: 40,
  };

  return (
    <div className='service-Container'>
      <div className="service-container-item">
        
        <div className="box-one">
        <h4 className='service-header' style={HomeStyles}>
          Services
        </h4>
        <div className="small-service">
          <h4>
            I specialize in Front end Development, User Interface & Experience Design
          </h4>
        </div>
          <div className="box-inner">
            <span className='icon icon-large'>
              <FaFolderOpen />
            </span>
            <p>
              <h3>
                UI & UX
              </h3>
            </p>
            <div className="inside-text">
              <span>Adding some magic to your website with this funky Component for figma. Component made by Boafo Philip and friends.
              </span>
            </div>
          </div>
          <div className="box-inner">
            <span className='icon icon-large'>
              <PiPlugs />
            </span>
            <p>
              <h3>
                Design & Creative
              </h3>
            </p>
            <div className="inside-text">
              <span>Crafting visually stunning design that connect with your audience.</span>
            </div>
          </div>
          <div className="box-inner">
            <span className='icon icon-large'>
              <FaForumbee />
            </span>
            <p>
              <h3>
                Development
              </h3>
            </p>
            <div className="inside-text">
              <span>Bringing your vision to life with the latest technology and trends.
              </span>
            </div>
          </div>
          <div className="box-inner">
            <span className='icon icon-large'>
              <FaFigma />
            </span>
            <p>
              <h3>
                Figma
              </h3>
            </p>
            <div className="inside-text">
              <span> Crafting exceptional digital experiences with figma.
              </span>
            </div>
          </div>      
        </div>
        
      </div>


    </div>



  )
}

export default Services