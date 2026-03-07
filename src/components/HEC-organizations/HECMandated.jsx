import './HECMandated.css'
import flare from "../../assets/HEC Mandated/flare.jpg"
// import oric from "../../assets/HEC Mandated/oric-logo.png"
import oric from "../../assets/HEC Mandated/oric.png"
// import qec from "../../assets/HEC Mandated/qec-logo.png"
import qec from "../../assets/HEC Mandated/qec.png"
import ydp from "../../assets/HEC Mandated/YDPbg.png"

function HECMandated() {
  return (
    <section id='HEC-dep'>
      <div className="container">
        <div className="HEC-depContainer">

          <div className="HEC-depCard">
            <img className='HEC-depLogo' src={flare} />
          </div>
          <div className="HEC-depCard">
            <img className='HEC-depLogo' src={oric} />
          </div>
          <div className="HEC-depCard">
            <img className='HEC-depLogo' src={qec} />
          </div>
          <div className="HEC-depCard">
            <img className='HEC-depLogo' src={ydp} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HECMandated
