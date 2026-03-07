import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './Admission.css'

function Admission() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });

  function handleOpenFeeStructurePDF(){
    window.open("/feeStructure.pdf", "_blank");
  }

  return (
    <section id="admissionSection">
      <div className="container">
        <div className="admissionHeroTxt">
          <h1>Join FATA University</h1>
          <p className='op7'>Be a part of FATA university's family.</p>
        </div>
        <div className="admissionCardsContainer">
          <div className="leftCard">

            <motion.div ref={ref1}
              className="admissionCard documentCard"
              initial={{ opacity: 0, x: -150 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, delay: 0, ease: "easeInOut" }}
              whileHover={{ y: -6 }} >
              {/* <div className=""> */}
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
            </motion.div>
          </div>

          <div className="rightCard">
            <motion.div ref={ref2}
              className="admissionCard feeStructureCard"
              initial={{ opacity: 0, x: 150 }}
              animate={inView2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, delay: 0, ease: "easeInOut" }}
              whileHover={{ y: -6, }} >
              {/* <div className=""> */}
              <h6>Fee Structure</h6>
              <p className='op7'>FATA University offers affordable education with flexible payment plans.</p>
              <ul>
                <li> Undergraduate <span>RS. 25k/sem </span></li>
                <li> Graduate <span>RS. 35k/sem</span></li>
              </ul>
              <button onClick={handleOpenFeeStructurePDF}>View Fee Structure</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admission
