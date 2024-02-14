import Home from "./components/home";
import HomePage from "./components/practiceuseState";
import { MapArrary } from "./components/mapArrary";
import { Navbar } from "./components/navbar";
import Practice from "./components/practiceMap";


function App() {
  return (
    <div>
     <Navbar/>
   <Home/>
  <MapArrary/> 
      {/* <HomePage />
      <Practice/> */}
    </div>
  );
}

export default App;
