import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Typing from './Pages/Typing';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagecomponent from './Components/Imagecomponent';
import Formcomponent from './Components/Formcomponent';
import Bannercomponent from './Components/Bannercomponent';
import Loadingcomponent from './Components/Loadingcomponent';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    
      <Routes> 
        <Route path='' element={<Bannercomponent/>}></Route>
        <Route path='game' element={<Imagecomponent/>}></Route>
        <Route path='typing' element={<Typing/>}></Route>
        <Route path='loading' element={<Loadingcomponent/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
