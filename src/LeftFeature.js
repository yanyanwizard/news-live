import React, { useState, useEffect } from 'react';
import axios from 'axios';

import news10 from './news10.jpg';

import './App.css';


const LeftFeature = ()  => {
  

  const [stories, setStories ] = useState([]);

  useEffect(() => {
  //  const key = process.env.REACT_APP_API_KEY;
   const key = "0e83104f-24c5-4514-890c-4e9a155ebfc1";
    axios.get(`https://content.guardianapis.com/search?api-key=${key}`)
      .then(result => {
        console.log(result)
        const newStories = result.data.response.results
        
         console.log(newStories[0])
           setStories(newStories);
         });
        }, []);
      
      
     return (
 
            <div className="App">
              <br />
              <h2 align="center">The latest news stories</h2>
              <br/>
              <div>
                {stories.map(story => (
                <div key={story.id} >
                  <strong>{story.webTitle}</strong>
                  <br />
                  <br />
                  <a href={story.webUrl}>{story.webUrl}</a>
                  <br />
                  <br />
                  <strong>{new Date(story.webPublicationDate).toDateString()}</strong>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
                ))}
                </div>
              </div>
          );
  }
  
        
export default LeftFeature;