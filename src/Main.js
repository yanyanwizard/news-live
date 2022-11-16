import React, { useState, useEffect } from 'react';
// import {Route, Link, Routes, useParams} from 'react-router-dom'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect
} from "react-router-dom"; 
import axios from 'axios';
import About from './About';  
import TodoForm from './components/TodoForm'; 
import parse from 'html-react-parser';
import news10 from './news10.jpg'; 
import './App.css';


const Main = ()  => {
  

  const [stories, setStories ] = useState([]);
  const parse = require('html-react-parser');
  useEffect(() => {
  //  const key = process.env.REACT_APP_API_KEY;
   const keys = "0e83104f-24c5-4514-890c-4e9a155ebfc1";
    axios.get(`https://content.guardianapis.com/search?show-fields=all&show-related=true&page-size=5&api-key=${keys}`)
      .then(result => {
        console.log(result)
        const newStories = result.data.response.results
        
         console.log(newStories[0])
           setStories(newStories);
         });
        }, []); 
      
     return (  
            <div className="App"> 
              <div>
                 
              {/* <Routes> 
              <Route path="/users/:userId" element={<Users />} /> 
              </Routes> */}
                {stories.map((story, i) => (

                  
                  <div className="feature_post_section_url">

                      <Router> 
                              <Link to="/About" key="{story.id}" > 
                          
                               
                              <div>
                                <img className="feature_post_section_image" src={story.fields.thumbnail} /> 
                                
                                <br/>
                                  <div  className="Feature_webText">
                                    <strong className="Feature_webTitle">{story.webTitle}</strong>  
                                    <br/>
                                    <div> { parse(story.fields.trailText) }</div>  
                                  </div>
                                
                              </div>
                              </Link> 
                    <Routes> 
                          <Route path="/About" element={ <TodoForm/> }></Route>
                          
                          </Routes>
                         
                      </Router>
                </div>
                ))}
                </div>
              </div>
          );
  }

        
export default Main;