import React from 'react';
// import Header from './component/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from './pages/About';
import Main from './pages/Main';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
    return (
      <>
        <BrowserRouter>
         <Routes>
           <Route  path="/" element={<Main/>} >
           <Route path=""  element={<Home/>} />
           <Route path="/About"  element={<About/>} />
           <Route path='/Skills' element={<Skills/> }/>
           <Route path='/Project' element={<Project/> }/>
           <Route path='/Contact' element={<Contact/> }/>
           </Route>
         </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
