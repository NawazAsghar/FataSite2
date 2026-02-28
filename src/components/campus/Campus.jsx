import './Campus.css'
import librarImg from '../../assets/laibraryBG.jfif'
import cricket from '../../assets/cricket.jpg'
import football from '../../assets/football.jfif'
import tennis from '../../assets/tennis.jpg'
import computerLab from '../../assets/computerLab.jpg'
import bioLab from '../../assets/bioLabs.jfif'

function Campus() {
    return (
        <section id='campus'>
            <div className="container">
                <div className="campusHeroTxt">
                    <h3>Campus Life</h3>
                    <p className='op7'>FATA University offers a vibrant campus life with excelent facilities and opportunities for persnal growth.</p>
                </div>
                <div className="library">
                    <div className="libraryHeroTxt">
                        <h6>Library</h6>
                        <p >with over 1k+ books and research.</p>
                    </div>
                    <img src={librarImg} loading='lazy' />
                </div>
                <div className="sports">
                    <h6>Sports</h6>
                    <div className="sportsCardContainer">
                        <div className="sportCard">
                            <img src={cricket} loading='lazy' />
                        </div>
                        <div className="sportCard">
                            <img src={football} loading='lazy' />
                        </div>
                        <div className="sportCard">
                            <img src={tennis} loading='lazy' />
                        </div>
                    </div>
                </div>
                <div className="labs">
                    <h6>University Labs</h6>
                    <div className="labImgs">
                        <div className="computerLabs">
                            <img className='LabBothImg' src={computerLab} loading='lazy' />
                        </div>
                        <div className="bioLabs">
                            <img className='LabBothImg' src={bioLab} loading='lazy' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Campus
