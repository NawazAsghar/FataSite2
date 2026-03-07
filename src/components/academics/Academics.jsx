import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './Academics.css'


function Academics() {
const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id='academicsSection'>
      <div className="container">
        <div className="academicMainText">
          <h4>Our Departments</h4>
          <p className='op7'>Choose who you want to be. We offer diverse programs across sciences, social sciences, and the arts.</p>
        </div>
        <div className="academicCardContainer">

          <motion.div ref={ref1}
            className="academicCard science" 
            initial={{ opacity: 0, x: 150 }} 
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0, ease: "easeInOut" }}
            whileHover={{ y: -6, boxShadow: "0.1rem 0.1rem 0.1rem #0000000a" }} >

            <h6 className='academicCardIcons'>🔬</h6>
            <h3>Science & teachnology</h3>
            <ul>
              <li>Computer Science</li>
              <li>MicroBiology</li>
              <li>Geology</li>
              <li>Mathematics</li>
              <li>Electronics</li>
            </ul>
          </motion.div>


          <motion.div  ref={ref2}
            className="academicCard socialScience"
            initial={{ opacity: 0, x: 150 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0, ease: "easeInOut" }}
            whileHover={{ y: -6, boxShadow: "0.1rem 0.1rem 0.1rem #0000000a" }} >

            <h6 className='academicCardIcons'>🌍</h6>
            <h3>Social Science</h3>
            <ul>
              <li>Management Science</li>
              <li>Political Science</li>
              <li>Sociology</li>
              <li>Psychology</li>
            </ul>
          </motion.div>

          <motion.div  ref={ref3}
            className="academicCard arts"
            initial={{ opacity: 0, x: 150 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0, ease: "easeInOut" }}
            whileHover={{ y: -6, boxShadow: "0.1rem 0.1rem 0.1rem #0000000a" }} >
            <h6 className='academicCardIcons'>🎨</h6>
            <h3>Arts</h3>
            <ul>
              <li>English</li>
              <li>Education</li>
            </ul>
          </motion.div>
          
        </div>
      </div >
    </section >
  )
}

export default Academics
