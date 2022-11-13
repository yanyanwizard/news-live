import React, { useState, useEffect } from 'react';
import Main from './Main';
import Guardian from './guardian.png';
import news from './news.jpg';
import news10 from './news10.jpg';
import london from './london.png';
import banner from './banner.png';
import banner2 from './banner2.png';
import banner3 from './banner3.png';
import Title from './Title';
import LeftFeature from './LeftFeature';
import axios from 'axios';

import './App.css';


const App = () => {

 

  return (
    <div className="App">

    <div className="grid-container">
      <div className="item1"> <Title /></div> 
      <div className="item3">  <Main /></div>  
      <div className="item4"> </div>
      <div className="block1">
       
      </div> 
      <div className="block1">
       
      </div> 
      <div className="item5">Footer</div>
    </div>   
      
      <div className="strip2">
      <div className="london2" />
      </div>
    </div>
  )
}

export default App;
