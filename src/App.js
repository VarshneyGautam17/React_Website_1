import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Parallex from './components/Parallex/Parallex';
import data from "./utils/slider.json";
import data1 from "./utils/slider1.json";
import data2 from "./utils/slider2.json";
import data3 from "./utils/slider3.json";
import back from "./Images/back.PNG"
import back2 from "./Images/back2.PNG"
import BrandAmbassador from './components/BrandAmbassador/BrandAmbassador';
import ContactNew from './components/ContactNew/ContactNew';
import Footer from './components/Footer/Footer';


// import vd from '../public/videoback.mp4'

function App() {
  return (
    <div className="App">
      <div>
        <div className='white-gradient'></div>
      <Header />
      <Hero /> 
      </div>
      <Companies />
      <Parallex back={back}/>
      <Residencies data={data1} text1="Silver"/>
      <Residencies data={data} text1="Gold"/>
      <Residencies data={data2} text1="Diamond"/>
      <Residencies data={data3} text1="Platinum"/>
      <Value />
      <GetStarted />
      <Parallex back={back2}/>
      <BrandAmbassador />
      <ContactNew/>
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
