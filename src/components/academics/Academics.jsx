import React from 'react'
import './Academics.css'
import { GiMicroscope } from "react-icons/gi";
import { GiEarthAmerica } from "react-icons/gi";


function Academics() {
  return (
    <section id='academicsSection'>
      <div className="container">
        <div className="academicMainText">
          <h4>Our Departments</h4>
          <p className='op7'>Choose who you want to be. We offer diverse programs across sciences, social sciences, and the arts.</p>
        </div>
        <div className="academicCardContainer">
          <div className="academicCard science">
            {/* <h6 className='academicCardIcons'><GiMicroscope /></h6> */}
            <h6 className='academicCardIcons'>🔬</h6>
            <h3>Science & teachnology</h3>
            <ul>
              <li>Computer Science</li>
              <li>MicroBiology</li>
              <li>Geology</li>
              <li>Mathematics</li>
              <li>Electronics</li>
            </ul>
          </div>
          <div className="academicCard socialScience">
            {/* <h6 className='academicCardIcons'><GiEarthAmerica /></h6> */}
            <h6 className='academicCardIcons'>🌍</h6>
            <h3>Social Science</h3>
            <ul>
              <li>Management Science</li>
              <li>Political Science</li>
              <li>Sociology</li>
              <li>Psychology</li>
            </ul>
          </div>
          <div className="academicCard arts">
            <h6 className='academicCardIcons'>🎨</h6>
            <h3>Arts</h3>
            <ul>
              <li>English</li>
              <li>Education</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Academics
