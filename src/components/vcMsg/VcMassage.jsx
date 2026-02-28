import './VcMassage.css'
import vcProPic from "../../assets/vcPic.jpg"

function VcMassage() {
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
            <button>Read More &rarr;</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VcMassage
