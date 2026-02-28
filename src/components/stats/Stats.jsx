import './Stats.css'

function Stats() {
  return (
    <section id='stats'>
      <div className="container statsCls">
        <div className="statsCard studentCountDiv">
          <div className="statCardIcon">
            👨‍🎓
          </div>
          <div className="statCardTxt">
            <h6> 1.5k+</h6>
            <p className='op7'>Studnets</p>
          </div>
        </div>
        <div className="statsCard studentCountDiv">
          <div className="statCardIcon">
            📚
          </div>
          <div className="statCardTxt">
            <h6>22+</h6>
            <p className='op7'>Programes</p>
          </div>
        </div>
        <div className="statsCard studentCountDiv">
          <div className="statCardIcon">
            👨‍🏫
          </div>
          <div className="statCardTxt">
            <h6>100+</h6>
            <p className='op7'>Faculty</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
