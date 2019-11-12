/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React,{useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import PageHeader from "./components/PageHeader/PageHeader"
import Projects from "./components/Projects/Projects"
import AboutMe from  "./components/AboutMe/AboutMe"
import Contact from "./components/Contact/Contact"



function App() {
  useEffect(()=>{
    document.body.classList.toggle("index-page");
  },[])

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <PageHeader />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
