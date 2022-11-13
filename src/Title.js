import React from 'react'
import Logo_the_peaks from './Logo_White.png';

function Title() {

  
  return (
    
    <div class="topnav">
     <div className="grid-container">
     <div className="item3"> 
      <img  class="logo_peaks" src={Logo_the_peaks} /> 
      <div class="search-container">
        <form action="/action_page.php">
        <input type="text" name="name" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div></div>  

      
    </div>
  </div>
  )
}

export default Title