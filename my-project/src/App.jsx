import React from 'react';
// import Header from './component/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from './pages/About';
import Main from './pages/Main';
import Skills from './pages/Skills';
import Project from './pages/Project';

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
           </Route>
         </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
