import React from 'react'
import '../Maincss/Components.css';
import { FaFolderOpen, FaForumbee, FaFigma } from "react-icons/fa";
import { PiPlugs } from "react-icons/pi";






function Components() {
  const HomeStyles = {
    fontWeight: 400,
    color: 'white',
    fontSize: 45,
    paddingLeft: '0.8%',
  };
  const FontStyles = {
    marginTop: '-9%',
    textAlign: "center",
    paddingLeft: '2%',
    fontSize: 15,
    color: 'white',
    textAlign: 'left'
  }
  const FontStyles1 = {
    marginTop: '-15%',
    textAlign: "center",
    paddingLeft: '2%',
    fontSize: 15,
    color: 'white',
    textAlign: 'left'
  }
  const moveLeft ={
    paddingLeft: '1%',
}

  return (

    <div className='component-container'>
      <div className="component-header">
        <div className='component-item-header'>
          <span style={HomeStyles}>
            Components
          </span>
          <p style={moveLeft}>
            Explore the code component i have created for others.
          </p>
          <div className="grid-form">
            <div className="grid-item">
              <div className='icon-folder'>
                <span className='icon-large'>
                  <FaFolderOpen />
                </span>
                <p>
                  <h4 style={FontStyles}>
                    UI & UX
                  </h4>
                </p>
                <p>
                  <h4 style={FontStyles1}>
                    Make any set of react component <br /> draggable

                  </h4>
                </p>
                {/* <div className="inside-text">
                  <span>Adding some magic to your website with this funky Component for figma. Component made by Boafo Philip and friends.
                  </span>
                </div> */}
              </div>
            </div>
            <div className="grid-item">
              <div className='icon-folder'>
                <span className='icon-large'>
                  <FaFolderOpen />
                </span>
                <p>
                  <h4 style={FontStyles}>
                    UI & UX
                  </h4>
                </p>
                <p>
                  <h4 style={FontStyles1}>
                    Make any set of react component <br /> draggable

                  </h4>
                </p>
                {/* <div className="inside-text">
                  <span>Adding some magic to your website with this funky Component for figma. Component made by Boafo Philip and friends.
                  </span>
                </div> */}
              </div>
            </div>
            <div className="grid-item">
              <div className='icon-folder'>
                <span className='icon-large'>
                  <FaFolderOpen />
                </span>
                <p>
                  <h4 style={FontStyles}>
                    UI & UX
                  </h4>
                </p>
                <p>
                  <h4 style={FontStyles1}>
                    Make any set of react component <br /> draggable

                  </h4>
                </p>
                {/* <div className="inside-text">
                  <span>Adding some magic to your website with this funky Component for figma. Component made by Boafo Philip and friends.
                  </span>
                </div> */}
              </div>
            </div>
            <div className="grid-item">
              <div className='icon-folder'>
                <span className='icon-large'>
                  <FaFolderOpen />
                </span>
                <p>
                  <h4 style={FontStyles}>
                    UI & UX
                  </h4>
                </p>
                <p>
                  <h4 style={FontStyles1}>
                    Make any set of react component <br /> draggable

                  </h4>
                </p>
                {/* <div className="inside-text">
                  <span>Adding some magic to your website with this funky Component for figma. Component made by Boafo Philip and friends.
                  </span>
                </div> */}
              </div>
            </div>
            <div className="grid-item">
              <div className='icon-folder'>
                <span className='icon-large'>
                  <FaFolderOpen />
                </span>
                <p>
                  <h4 style={FontStyles}>
                    UI & UX
                  </h4>
                </p>
                <p>
                  <h4 style={FontStyles1}>
                    Make any set of react component <br /> draggable

                  </h4>
                </p>
                {/* <div className="inside-text">
                  <span>Adding some magic to your website with this funky Component for figma. Component made by Boafo Philip and friends.
                  </span>
                </div> */}
              </div>
            </div>
            <div className="grid-item">
              <div className='icon-folder'>
                <span className='icon-large'>
                  <FaFolderOpen />
                </span>
                <p>
                  <h4 style={FontStyles}>
                    UI & UX
                  </h4>
                </p>
                <p>
                  <h4 style={FontStyles1}>
                    Make any set of react component <br /> draggable

                  </h4>
                </p>
                {/* <div className="inside-text">
                  <span>Adding some magic to your website with this funky Component for figma. Component made by Boafo Philip and friends.
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Components