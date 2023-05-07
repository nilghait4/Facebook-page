import React from 'react'
import {FaFacebook,
    FaSistrix,FaHome,
    FaFontAwesomeFlag,
    FaVideo,
    FaUser,
    FaGamepad,
    FaPlus,
    FaFacebookMessenger,
    FaBell,
    FaCaretDown} 
    from "react-icons/fa"

const Navbar = () =>{
    return (
        <div className="Navbar">
          <div className="Navbar__first">
            <div className="Navbar__first-logo">
              <FaFacebook className="Navbar__logo" />
            </div>
            <div className="Navbar__first-search">
              <input
                type="text"
                className="Navbar__first-searchbar"
                placeholder="Facebook Search"
              />
              <FaSistrix className="Navar__searchIcon" />
            </div>

            </div>
            <div className='Navbar__middle'>
                <span className='middleIcon'>
                    <FaHome className='Navbar__middle-icons' />
                </span>
                <span className='middleIcon'>
                    <FaFontAwesomeFlag className='Navbar__middle-icons' />
                    <span className='Navbar__notify'>3</span>
                </span>
                <span className='middleIcon'>
                    <FaVideo className='Navbar__middle-icons' />
                    <span className='Navbar__notify'>10</span>
                </span>
                <span className='middleIcon'>
                    <FaUser className='Navbar__middle-icons' />
                    <span className='Navbar__notify'>22</span>
                </span>
                <span className='middleIcon'>
                    <FaGamepad className='Navbar__middle-icons'/>
                    <span className='Navbar__notify'>5</span>
                </span>    
            </div>
            <div className='Navbar__last'>
                <span className='Navbar__last-section'>
                    <FaPlus/>

                </span>
                <span className='Navbar__last-section'>
                <FaFacebookMessenger/>
                </span>
                <span className='Navbar__last-section'>
                <FaBell/>
                </span>
                <span className='Navbar__last-section'>
                <FaCaretDown/>
                </span>


            </div>
        </div>
    )
}
export default Navbar;