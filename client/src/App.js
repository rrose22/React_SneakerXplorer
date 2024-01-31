
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './Components/LandingPage.js';
import ResellPage from './Components/ResellPage.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/home' element={<LandingPage/>}></Route>
    <Route path='/resell' element={<ResellPage/>}></Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
