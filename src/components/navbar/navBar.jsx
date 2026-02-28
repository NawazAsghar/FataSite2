import './navBar.css';
import logoImg from '../../assets/uniLogo.png'
import { FaBars } from "react-icons/fa6";


function NavBar() {
  return (
    <nav id='navBar'>
      <div className="container navLlogAndlinkSection">
        <ul id='navLogoSection'>
          <li> <img id='logoImg' src={logoImg} alt="logo" /> </li>
          <h1>FATA UNIVERSITY</h1>
        </ul>
        <ul id='navLinksSection'>
          <li> <a href="#academicsSection">Academics</a></li>
          <li> <a href="#admissionSection">Admissions</a></li>
          <li><a href="#campus">Campus Life</a></li>
          <li><a href="#">About</a></li>
          <li><button id='NavApplyNowBtn'>Apply Now</button></li>
        </ul >
        <ul id='hamBargerIcon'>
          <li><FaBars /></li>
        </ul>
      </div >
    </nav >
  )
}

export default NavBar
