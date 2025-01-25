import Landing from "./Pages/Landing";
import Ramayana from "./Pages/Ramayana";
import BhagwatGita from "./Pages/BhagwatGita";

import { Routes , Route } from "react-router-dom";


const App = () => {

  return (

      <Routes>

          <Route path="/" element={<Landing/>} /> 

          <Route path="/ramayana" element={<Ramayana/>} /> 

          <Route path="/gita" element={<BhagwatGita/>} /> 

      </Routes>



 

  );

};

export default App;
