import './Admission.css'

function Admission() {
  return (
    <section id="admissionSection">
      <div className="container">
      <div className="admissionHeroTxt">
        <h1>Join FATA University</h1>
        <p className='op7'>Be a part of FATA university's family.</p>
      </div>
      <div className="admissionCardsContainer">
        <div className="leftCard">
          <div className="admissionCard documentCard">
            <h6>Required Documents</h6>
            <p className='op7'>Make sure you have all these documents ready before applying.</p>
            <ul>
              <li>Complete Application Form</li>
              <li>Provide Academic Records (Matric, FSc)</li>
              <li>CNIC/B-Form Copy</li>
              <li>Passport Size Photo</li>
              <li>Domicile Certificate</li>
            </ul>
            <button>Read More...</button>
          </div>
        </div>
        <div className="rightCard">
          <div className="admissionCard feeStructureCard">
            <h6>Fee Structure</h6>
            <p className='op7'>FATA University offers affordable education with flexible payment plans.</p>
            <ul>
              <li> Undergraduate <span>RS. 25k/sem </span></li>
              <li> Graduate <span>RS. 35k/sem</span></li>
            </ul>
            <button>View Fee Structure</button>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Admission
