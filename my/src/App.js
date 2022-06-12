import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';

import Getall from './Components/Getall';
import Header from './Components/Header';
import Add from './Components/Add';
import Pdetails from './Components/Pdetails';
import Proupdate from './Components/Proupdate';

// import Showdetails from './Components/Showdetails';



function App() {

  
  return (

    
    <div className="">
      <Header/>
      {/* <Getall/> */}

        <Router>
        <Routes>
        <Route path="/" element={<Getall/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/:id/" element={<Pdetails/>} />
        <Route path="/:id/update" element={<Proupdate/>} />
        {/* <Route path="/a" element={<Articals/>} />
        <Route path="/ad" element={<AddArtical/>} /> */}
        </Routes>
        </Router>
    </div>
  );
}

export default App;

