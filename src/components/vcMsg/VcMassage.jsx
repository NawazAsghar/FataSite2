import './VcMassage.css'
import vcProPic from "../../assets/vcPic.jpg"
import { useState } from 'react';
import { BsTwitterX } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";




function VcMassage() {
  const [isOpen, setIsOpen] = useState(false);
  function vcReadMoreClicked() {
    setIsOpen(!isOpen);
  }
  return (
    <section id='vcMsgSection'>
      <div className="container">
        <div className="vcMsgContainer">
          <div className="vcProfilePicContainer">
            <img src={vcProPic} loading='lazy' />
            <h6>Prof. Dr. Mohsan Nawaz</h6>
          </div>
          <div className="vcMsgTxtContainer">
            <h6>Vice Chancellor's Message</h6>
            <p>"FATA University stands as a beacon of hope and progress for this region. We are committed to providing world-class education that empowers our students to become leaders, innovators, and contributors to society. Our mission is to transform lives through the power of knowledge."</p>
            {isOpen ?
              <div className="vsReadMoreSection">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim delectus, nam voluptatum quam tenetur aliquid corporis incidunt amet totam dolorem, animi numquam perferendis, eos unde itaque possimus autem molestias.</p>
                <div className="vsMsgSocialIconsContainer">
                  <div className="vcMsgSocialCard"><a href="https://x.com/FATA_University"><BsTwitterX /></a></div>
                  <div className="vcMsgSocialCard"><a href="tel:0915885502"><FaPhoneAlt /></a></div>
                  <div className="vcMsgSocialCard"><a href="https://www.linkedin.com/in/mohsan-nawaz-09551233/?originalSubdomain=pk"><FaLinkedin /></a></div>
                  <div className="vcMsgSocialCard"><a href="mailto:pstovc@fu.edu.pk"><IoIosMail /></a></div>
                </div>
              </div>
              : ""}

            <button onClick={vcReadMoreClicked}>{isOpen ? <>Collapse  &uarr;</> : <>Read More &rarr;</>}</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VcMassage
