import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Cart from './Components/Cart/Cart';
import Counter from './Components/Counter/Counter';


import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Specialist from './Components/Specialist/Specialist';
import Team from './Components/Team/Team';
import WeDo from './Components/WeDO/WeDo';
import Skill from './Components/Skill/Skill';
import Advisors from './Components/Advisors/Advisors';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Specialist></Specialist>
      <WeDo></WeDo>
      <Counter></Counter>
      <Team></Team>
      <Skill></Skill>
      <Advisors></Advisors>
      <Cart></Cart>
      <Footer></Footer>
    
    </div>
  );
}

export default App;
