import './Stats.css'
import CountUp from 'react-countup';

import { useInView } from "react-intersection-observer";

function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section id='stats'>
      <div className="container statsCls">
        <div className="statsCard studentCountDiv" ref={ref}>
          <div className="statCardIcon">
            👨‍🎓
          </div>
          <div className="statCardTxt">
            <h6>{inView && <CountUp end={1500} duration={2.5} suffix="+" />}</h6>
            <p className='op7'>Studnets</p>
          </div>
        </div>
        <div className="statsCard studentCountDiv">
          <div className="statCardIcon">
            📚
          </div>
          <div className="statCardTxt">
            <h6>{inView && <CountUp end={22} duration={2.5} suffix="+" />}</h6>
            <p className='op7'>Programes</p>
          </div>
        </div>
        <div className="statsCard studentCountDiv">
          <div className="statCardIcon">
            👨‍🏫
          </div>
          <div className="statCardTxt">
            <h6>{inView && <CountUp end={100} duration={2.5} suffix="+" />}</h6>
            <p className='op7'>Faculty</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
