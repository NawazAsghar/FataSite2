import './navBar.css';
import logoImg from '../../assets/uniLogo.png'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  function HambargerClicked() {
    setIsOpen(!isOpen);
  }
  function closeMenu() {
    setIsOpen(false);
  }
  return (
    <nav id='navBar'>
      <div className={`container ${isOpen ? 'navLogoAndlinkSectionMobile' : 'navLogoAndlinkSection'} `}>
        <div className="homeNavWithBurgerIcon">
          <a href="/">
            <ul id='navLogoSection'>
              <li> <img id='logoImg' src={logoImg} alt="logo" /> </li>
              <h1>FATA UNIVERSITY</h1>
            </ul>
          </a>
          <ul id='hamBargerIcon'>
            <li onClick={HambargerClicked}> {isOpen? <RxCross2 /> : <FaBars /> }</li>
          </ul>
        </div>
        <ul className={isOpen ? "navLinksSectionMobile" : "navLinksSection"}>
          <li onClick={closeMenu}> <a href="#academicsSection">Academics</a></li>
          <li onClick={closeMenu}> <a href="#admissionSection">Admissions</a></li>
          <li onClick={closeMenu}><a href="#campus">Campus Life</a></li>
          <li onClick={closeMenu}><a href="#campus">About</a></li>
          <li onClick={closeMenu}><a href="#admissionSection"><button id='NavApplyNowBtn'>Apply Now</button></a></li>
        </ul >
      </div >
    </nav >
  )
}

export default NavBar
