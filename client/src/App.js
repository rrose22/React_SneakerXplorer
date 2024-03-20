
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './Components/LandingPage.js';
import ResellPage from './Components/ResellPage.js';
import ViewSneaker from './Components/ViewSneaker.js'
import Calendar from './Components/Calendar.js'
import Login from './Components/Login.js'
import Register from './Components/Register.js';
import Forum from './Components/Forum.js';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPage/>}></Route>
    <Route path='/resell' element={<ResellPage/>}></Route>
    <Route path='/view' element={<ViewSneaker/>}></Route>
    <Route path='/calendar' element={<Calendar/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/forum' element={<Forum/>}></Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
