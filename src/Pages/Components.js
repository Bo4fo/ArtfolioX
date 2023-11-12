import React from 'react'
import '../Maincss/Components.css';
import { FaMicrosoft, FaDraftingCompass, FaRegKeyboard } from "react-icons/fa";
import { PiTimer, PiDownloadLight } from "react-icons/pi";
import { RxNotionLogo } from "react-icons/rx";





function Components() {
    const fontStyles = {
      fontSize: 18,
      color: 'white',
   
    }
 
    const iconStyles = {
      fontSize: 22,
      color: 'white',
     
    }
 

  return (

    <div className='component-wrapper'>
      <div className='component-box'>
        <div className='header-box'>
          <h3>Component</h3>
          <div className="text-box">
            <p>Explore the code component i have created for others</p>
          </div>

        </div>
        <div class="grid-container">
        <div class="grid-item">
        <div className="inner-box" style={fontStyles}>
        
        <span style={iconStyles}><FaMicrosoft />  
        </span> 
            



            <p>
              Draggable Grid
            </p>
            <h3>
              Make any set frammer component draggable
            </h3>
          </div>
        </div>
        <div class="grid-item">
        <div className="inner-box" style={fontStyles}>
        <span style={iconStyles}><PiTimer />  
        </span> 
            <p>
              Draggable Grid
            </p>
            <h3>
              Make any set frammer component draggable
            </h3>
          </div>
        </div>
        <div class="grid-item">
        <div className="inner-box" style={fontStyles}>
        <span style={iconStyles}><FaDraftingCompass />  
        </span> 
            <p>
              Draggable Grid
            </p>
            <h3>
              Make any set frammer component draggable
            </h3>
          </div>
        </div>
        <div class="grid-item"> 
         <div className="inner-box" style={fontStyles}>
         <span style={iconStyles}><PiDownloadLight />  
        </span> 
            <p>
              Draggable Grid
            </p>
            <h3>
              Make any set frammer component draggable
            </h3>
          </div>
          </div>
        <div class="grid-item">
            <div className="inner-box" style={fontStyles}>
            <span style={iconStyles}><RxNotionLogo />  
        </span> 
            <p>
              Draggable Grid
            </p>
            <h3>
              Make any set frammer component draggable
            </h3>
          </div>
          </div>
        <div class="grid-item">
        <div className="inner-box" style={fontStyles}>
             <span style={iconStyles}><FaRegKeyboard />  
        </span> 
            <p>
              Draggable Grid
            </p>
            <h3>
              Make any set frammer component draggable
            </h3>
          </div>
        </div>

      </div>


      </div>
  

    </div>

  )
}

export default Components