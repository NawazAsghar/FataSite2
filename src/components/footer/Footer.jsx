import './Footer.css'
import logoImg from '../../assets/uniLogo.png'
import { BsTwitterX } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";




function Footer() {
    return (
        <footer>
            <div className="container">

                <div className="footerUpperSection">
                    <div className="footerLogoSection">
                        <ul>
                            <li> <img className='footerLogo' src={logoImg} alt="logo" /> </li>
                            <h3>FATA UNIVERSITY</h3>
                        </ul>
                        <p>Providing quality education to help Pakistan's youth to lead their communities.</p>
                        <div className="footerLogoSectionSocialIconsSection">
                            <div className="footerSocialCard"><a href="https://x.com/FATA_University"><BsTwitterX /></a></div>
                            <div className="footerSocialCard"><a href="https://www.facebook.com/FataUniversityOfficial/"><FaSquareFacebook /></a></div>
                            <div className="footerSocialCard"><a href="https://www.linkedin.com/company/fata-university/?originalSubdomain=pk"><FaLinkedin /></a></div>
                            <div className="footerSocialCard"><a href="https://www.instagram.com/fata_university_official/"><FaInstagramSquare /></a></div>
                        </div>
                    </div>
                    <div className="footerAcademicSectionPagesLinks">
                        <div className="footerAcademicsSection">
                            <h6>Academics</h6>
                            <ul className='footerUl-links'>
                                <li>Undergraduate Programes</li>
                                <li>Graduate Programes</li>
                                <li> <a href="#academicsSection">Departments</a></li>
                                <li>Academic Calendar</li>
                                <li>Faculty</li>
                            </ul>
                        </div>
                        <div className="footerAddmisionSection">
                            <h6>Addmission</h6>
                            <ul className='footerUl-links'>
                                <li>How To Apply</li>
                                <li>Requirements</li>
                                <li>Fee Structure</li>
                                <li>Scholarships</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className="footerAboutSection">
                            <h6>About</h6>
                            <ul className='footerUl-links'>
                                <li> <a href="">About FATA University  </a></li>
                                <li><a href="#vcMsgSection">VC massage </a></li>
                                <li><a href="#admissionSection">Administration </a></li>
                                <li> <a href="#footerContact">Contact Us</a></li>
                                <li> <a href="#newsSection">News & Events</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='footerUpperHR' />
                <div className="footerLowerSection" id='footerContact'>

                    <div className="LowerFooterVisitUs">
                        <div className="iconAndHeading">
                            <h6><FaLocationDot /></h6>
                            <h6>Visite Us</h6>
                        </div>
                        <p>FATA University,Tehsil Sub Division (TSD) Darra Adam Khel, Newly Merged District (NMD) Kohat, Khyber Pakhtunkhwa, Pakistan 26100.</p>
                    </div>
                    <div className="LowerFooterCallUs">
                        <div className="iconAndHeading">
                            <h6><FaPhoneAlt /></h6>
                            <h6>Call Us</h6>
                        </div>
                        <p><a href="tel:0915885507">0915885507</a></p>
                        {/* <p>0311-9337719</p> */}
                    </div>
                    <div className="LowerFooterEamilUs">
                        <div className="iconAndHeading">
                            <h6><IoMdMail /></h6>
                            <h6>Mail Us</h6>
                        </div>
                        <p><a href="mailto:info@fu.edu.pk">Info@fu.edu.pk</a></p>
                        <p><a href="mailto:registrar@fu.edu.pk">Registrar@fu.edu.pk</a></p>
                    </div>
                    <div className="LowerFooterMap">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.6992440209333!2d71.50472102607748!3d33.73896085927608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d8e1005dab028d%3A0x6687707f3066fe06!2sAQ%20KHAN%20BLOCK%2C%20FATA%20UNIVERSITY!5e0!3m2!1sen!2s!4v1772257757216!5m2!1sen!2s"
                            width="300"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

            </div>
            <div className="footerBottom">
                <hr className='footerLowerHR' />
                <p>© 2026 FATA University. All rights reserved. Develop By NZA</p>
            </div>

        </footer>
    )
}

export default Footer
