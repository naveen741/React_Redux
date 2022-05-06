import React from 'react';
import './App.css';
import Content from './Components_1/Content';
import Footer from './Components_1/Footer';
import Header from './Components_1/Header';
import SideBar from './Components_1/SideBar';
function App() {
  return (
    <div className="container">
      <Header/>
      <div className='subContainer'>
        <SideBar/>
        <Content/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
