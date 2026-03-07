import './VCFullMsgPage.css'
import vcProPic from "../../assets/vcPic.jpg"

function VCFullMsgPage() {
  return (
    <section id="VCFullMsgPage">
        <div className="vcFullMsgPageImgSection">
            <img src={vcProPic} />
            <h6>Prof. Dr. Mohsan Nawaz</h6>
            <p>Voic Chancler at FATA Univercity.</p>
        </div>
    </section>
  )
}

export default VCFullMsgPage
