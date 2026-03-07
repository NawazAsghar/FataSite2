import TopBar from '../topbar/TopBar'
import NavBar from '../navbar/navBar'
import Home from '../home/Home'
import Stats from '../stats/Stats'
import Academics from '../academics/Academics'
import JoinFata from '../admission/Admission'
import Campus from '../campus/Campus'
import './App.css'
import Footer from '../footer/footer'
import News from '../news/News'
import Gallery from '../gallery/Gallery'
import VcMassage from '../vcMsg/VcMassage'
import Alumni from '../alumni/Alumni'
import HECMandated from '../HEC-organizations/HECMandated'


function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Home />
      <Stats />
      <News />
      <Academics />
      <HECMandated />
      <JoinFata />
      <Alumni />
      <Campus />
      <Gallery />
      <VcMassage /> 
      <Footer />
    </>
  )
}

export default App


