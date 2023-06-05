import './App.css';
import Cycle2 from "./pages/dashBoard/component/Cycle2";
 import Colour from "./pages/dashBoard/component/colour";
 import CycleApp from "./pages/dashBoard/component/CycleApp";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Exit from "./pages/dashBoard/component/exit";
import LoginPage from "./pages/dashBoard/component/loginPage";
import RegisterPage from "./pages/dashBoard/component/register";
import PregnancyTrackerPage from "./pages/dashBoard/component/pregnancy";
import AboutUs from "./pages/dashBoard/component/aboutUs";
import UserComponent from "./pages/dashBoard/component/userComponent";
function App() {
  return (
    <div className="App">
      <UserComponent/>
  
      { <Router>
        /*<Routes>
          <Route path="/"element={<CycleApp/>} />
          <Route path="/page2"element={<Cycle2/>}/>
          <Route path="/page3" element={<Colour/>}/>
          <Route path="/page4" element={<Colour/>}/>
          <Route path="/page5" element={<Exit/>}/>
          <Route path="/page6" element={<LoginPage/>}/>
          <Route path="/page7" element={<RegisterPage/>}/>
          <Route path="/page8" element={<PregnancyTrackerPage/>}/>
          <Route path="/page9" element={<CycleApp/>}/>
          <Route path="/page10" element={<AboutUs/>}/>
          <Route path="/page11" element={<AboutUs/>}/>
        </Routes>*/
      </Router> }
    </div>
  );
}

export default App;