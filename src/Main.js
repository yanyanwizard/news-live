import React, { useState, useEffect } from 'react';
import axios from 'axios';

import news10 from './news10.jpg';

import './App.css';


const Main = ()  => {
  

  const [stories, setStories ] = useState([]);

  useEffect(() => {
  //  const key = process.env.REACT_APP_API_KEY;
   const key = "0e83104f-24c5-4514-890c-4e9a155ebfc1";
    axios.get(`https://content.guardianapis.com/search?show-fields=all&show-related=true&page-size=5&api-key=${key}`)
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
                {stories.map(story => (
                  <a href={story.webUrl}>
                  <div>
                    <img  src={story.fields.thumbnail} /> 
                      <strong>{story.webTitle}</strong>  
                      <br/>
                      <strong>{story.fields.trailText}</strong>   
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                  </div>
                </a>
                ))}
                </div>
              </div>
          );
  }
  
        
export default Main;