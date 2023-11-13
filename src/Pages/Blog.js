import React from 'react'
import '../Maincss/Blog.css';
import { FaConnectdevelop, FaLinux } from "react-icons/fa";
import { BsHdd } from "react-icons/bs";
import { PiDiscordLogoLight } from "react-icons/pi";




function Blog() {
  const fontStyles = {
    fontSize: 18,
    color: 'white',

  }
  const iconStyles = {
    fontSize: 100,
    color: 'white',
    // marginTop: -50,
    //   paddingLeft: 0,
    //   paddingRight: 0,
  }

  return (

    <div className='Blog-wrapper'>
      <div className='Blog-box'>
        <div className='headerBlog-box'>
          <h3>Blog</h3>
          <div className="textBlog-box">
            <p>Explore with the latest and gain insight and inspiration dor digital service</p>
          </div>

        </div>
        <div class="gridBlog-container">
          <div class="gridBlog-item">
            <div className="inner-wrapperBlog">


              <div className="inner-itemBlog">
                <span style={iconStyles}><BsHdd />
                </span>


              </div>
              <div className="inner-BlogBox">
                <p style={fontStyles}>
                  How to price freelance your web project and development service?
                </p>
                <div className="fade-date">November 12, 2023</div>



              </div>
            </div>
          </div>
          <div class="gridBlog-item">
            <div className="inner-wrapperBlog">


              <div className="inner-itemBlog">
                <span style={iconStyles}><PiDiscordLogoLight />
                </span>


              </div>
              <div className="inner-BlogBox">
                <p style={fontStyles}>
                  How to price freelance your web project and development service?
                </p>
                <div className="fade-date">November 12, 2023</div>



              </div>
            </div>
          </div>
          <div class="gridBlog-item">
            <div className="inner-wrapperBlog">


              <div className="inner-itemBlog">
                <span style={iconStyles}><FaConnectdevelop />
                </span>


              </div>
              <div className="inner-BlogBox">
                <p style={fontStyles}>
                  How to price freelance your web project and development service?
                </p>
                <div className="fade-date">November 12, 2023</div>



              </div>
            </div> </div>
          <div class="gridBlog-item">
            <div className="inner-wrapperBlog">


              <div className="inner-itemBlog">
                <span style={iconStyles}><FaLinux />
                </span>


              </div>
              <div className="inner-BlogBox">
                <p style={fontStyles}>
                  How to price freelance your web project and development service?
                </p>
                <div className="fade-date">November 12, 2023</div>



              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default Blog