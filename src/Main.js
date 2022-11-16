import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import news10 from './news10.jpg'; 
import './App.css';


const Main = ()  => {
  

  const [stories, setStories ] = useState([]);
  const parse = require('html-react-parser');
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
                {stories.map((story, i) => (
                  <div className="feature_post_section_url">
                    <a key="{story.id}" href={story.webUrl} >
                    <div>
                      <img className="feature_post_section_image" src={story.fields.thumbnail} /> 
                       
                      <br/>
                        <div  className="Feature_webText">
                          <strong className="Feature_webTitle">{story.webTitle}</strong>  
                          <br/>
                          <div> { parse(story.fields.trailText) }</div>  
                        </div>
                       
                    </div>
                  </a>
                </div>
                ))}
                </div>
              </div>
          );
  }
  
        
export default Main;