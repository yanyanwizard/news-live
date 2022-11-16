import React, { useState, useEffect, useContext, useReducer } from 'react'; 
import ReactDOM from "react-dom/client"; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect
} from "react-router-dom"; 
//import {  Link, Navigate,BrowserRouter,Outlet, Routes, Route } from "react-router-dom"; 
 
import Store from "./context";
import reducer from "./reducer"; 
import { usePersistedContext, usePersistedReducer } from "./usePersist";  


import TodoForm from './components/TodoForm'; 
import Main from './Main'; 
import Title from './Title'; 
import LeftFeature from './LeftFeature';
import axios from 'axios'; 
import './App.css';
import BookmarkForm from './BookmarkForm';
 
 
 
const App = () => { 
  
  const globalStore = usePersistedContext(useContext(Store), "state");

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" // The localStorage key
  );

  return (
    
    <div className="App">
 
    <div >
          <div className="item1"> 
         
          <Title />
           
          </div>  
    </div>
    <div className="grid-container"> 
      <div className="Bookmark">
          
       
    
          
       <BookmarkForm />
         
         
          
         
      </div>  
      <div className="item3">  
      {  <Main /> }
      </div>  
      
       
      <div className="block1">
       Test
      </div> 
      <div className="block1">
       Test
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
