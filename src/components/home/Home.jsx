import './Home.css'
import homeGB from "../../assets/AniFataGate.jpg"

function Home() {
    return (
        <section id='Home'>
            <img src={homeGB} loading='lazy'/>
            <div className="container">
                <div className="heroText">
                    <h6>Wellcom to</h6>
                    <h1>FATA University</h1>
                    <p>Providing quality education to help Pakistan's youth lead their communities. A premier institution in Khyber Pakhtunkhwa dedicated to excellence, research, and opportunity.</p>
                    <div className="homeBtns">
                        <button><a href="#admissionSection"> Apply Now &nbsp;  &rarr; </a></button>
                        <button> <a href="#academicsSection"> Explore programs </a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
