import './Alumni.css'
import vcProPic from "../../assets/vcPic.jpg"
import { RiDoubleQuotesR } from "react-icons/ri";


function Alumni() {
  return (
    <section id='Alumni'>
      <div className="container">

        <div className="alumniSectionsHeroTxtSection">
          <p className="alumniSectionsSectionTag" >Distinguished Alumni</p>
          <h6 className='alumniSectionsTitle'>Faces of Our Legacy</h6>
          <p className="alumniSectionsSectionDesc op7" >Graduates who have gone on to make their mark in industry, academia, and public service.</p>
        </div>
        <div className="alumniCardContainerWrapper">
          <div className="alumniCardContainer">
            <div className="alumniCard">
              <h1><RiDoubleQuotesR /></h1>
              <div className="alumniInfo">
                <img src={vcProPic} loading='lazy' />
                <div className="alumniNameAndJob">
                  <h6>Nawaz Asghar</h6>
                  <p className='op7'>SDE at Amzon</p>
                </div>
              </div>
              <p className='alumniAbout'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa saepe voluptate nobis, similique, sunt amet harum laboriosam debitis hic maiores voluptates repellendus adipisci atque officiis quaerat, laborum a repudiandae. Debitis.</p>
            </div>
            <div className="alumniCard">
              <h1><RiDoubleQuotesR /></h1>
              <div className="alumniInfo">
                <img src={vcProPic} loading='lazy' />
                <div className="alumniNameAndJob">
                  <h6>Nawaz Asghar</h6>
                  <p className='op7'>SDE at Amzon</p>
                </div>
              </div>
              <p className='alumniAbout'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa saepe voluptate nobis, similique, sunt amet harum laboriosam debitis hic maiores voluptates repellendus adipisci atque officiis quaerat, laborum a repudiandae. Debitis.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Alumni
