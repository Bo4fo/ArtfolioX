import React from 'react'
import '../Maincss/Components.css';
import { FaFolderOpen, FaForumbee, FaFigma } from "react-icons/fa";
import { PiPlugs } from "react-icons/pi";






function Components() {
  //   const HomeStyles = {
  //     fontWeight: 400,
  //     color: 'white',
  //     fontSize: 45,
  //     paddingLeft: '0.8%',
  //   };
  //   const FontStyles = {
  //     marginTop: '-9%',
  //     textAlign: "center",
  //     paddingLeft: '2%',
  //     fontSize: 15,
  //     color: 'white',
  //     textAlign: 'left'
  //   }
  //   const FontStyles1 = {
  //     marginTop: '-15%',
  //     textAlign: "center",
  //     paddingLeft: '2%',
  //     fontSize: 15,
  //     color: 'white',
  //     textAlign: 'left'
  //   }
  //   const moveLeft ={
  //     paddingLeft: '1%',
  // }

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
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>

      </div>


      </div>
  

    </div>

  )
}

export default Components