import './Campus.css'
import librarImg from '../../assets/laibraryBG.jfif'
import sportMenGroupPic from '../../assets/sportPicOfAll.jpg'
import football from '../../assets/sportPicTeamBlack.jpg'
import computerLab from '../../assets/lab.jpg'
import jawanSportPic from '../../assets/sportPicFlag.jpg'
import cumpusBG from '../../assets/AQblock.jpg'

function Campus() {
    return (
        <section id='campus'>
            <div className="container">
                <div className="campusHeroTxt">
                    <h3>Campus Life</h3>
                    <p className='op7'>FATA University offers a vibrant campus life with excelent facilities and opportunities for persnal growth.</p>
                    <img src={cumpusBG} loading='lazy' />
                </div>
                <div className="cumpusSubSections">
                    <div className='cumpusSubSectionsImgSection'>
                        <img src={librarImg} loading='lazy' />
                    </div>
                    <div className="cumpusSubSectionsHeroTxtSection">
                        <p className="cumpusSubSectionsSectionTag" >Knowledge Hub</p>
                        <h6 className='cumpusSubSectionsTitle'>The Heart of Intellectual Life</h6>
                        <p className="cumpusSubSectionsSectionDesc op7" >Our award-winning Evergreen Library is one of the most well-equipped academic libraries — a sanctuary for deep thinking, research, and discovery.</p>
                    </div>
                </div>
                <div className="cumpusSubSections">
                    <div className="cumpusSubSectionsHeroTxtSection">
                        <p className="cumpusSubSectionsSectionTag" >Practical World</p>
                        <h6 className='cumpusSubSectionsTitle'>Digital & Research Labs</h6>
                        <p className="cumpusSubSectionsSectionDesc op7" >Theory gets you started. The lab gets you there. Equipped with modern tools and open to every curious mind on campus.</p>
                    </div>
                    <div className='cumpusSubSectionsImgSection'>
                        <img src={computerLab} loading='lazy' />
                    </div>
                </div>
                <div className="sports">
                    <h6>Sports</h6>
                    <p className="op7">Sport at FATA University isn't just about winning. It's about showing up.</p>
                    <div className="sportsCardContainer">
                        <div className="sportCard">
                            <img src={sportMenGroupPic} loading='lazy' />
                        </div>
                        <div className="sportCard">
                            <img src={football} loading='lazy' />
                        </div>
                        <div className="sportCard">
                            <img src={jawanSportPic} loading='lazy' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Campus
