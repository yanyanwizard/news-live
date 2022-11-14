import React from 'react'
import Logo_the_peaks from './Logo_White.png';
import BookmarkForm from './BookmarkForm';
function Bookmark() {

  
  return (
    
    <div className="bookmark_section"> 
          
         <div>
         Top stories 
         </div> 
       
          <div className="bookmark_section_right">
            <div>
              <BookmarkForm />
            </div> 
             <div class="custom-select" >
                <select>
                  <option value="0">Newest first:</option>
                  <option value="1">Oldest first </option>
                  <option value="2">Most popular</option> 
                </select>
              </div>
          </div> 

    </div>
  )
}

export default Bookmark