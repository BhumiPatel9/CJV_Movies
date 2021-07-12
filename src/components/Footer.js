import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return(
 
    <footer class="page-footer text-center font-small mt-4 fadeIn">

    <div className="container">   

    <div class="container pt-4 row">
      <div class="col" style={{color:'white'}}>
        <ul class="navbar-nav">
            <li class="nav-item">Home</li>
            <li class="nav-item">Careers</li>
            <li class="nav-item">Contact Us</li>
            <li class="nav-item">Feedback</li>
        </ul>
      </div>

      <div class="col" style={{color:'white'}}>
        <ul class="navbar-nav">
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>API</li>
            <li>About Us</li>
        </ul>
      </div>

      <div class="col" style={{color:'white'}}>
        <ul class="navbar-nav">
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>API</li>
            <li>About Us</li>
        </ul>
      </div>

    
    </div>
    </div>
    

    <hr class="my-4"/>

    
    <div class="container row">
        <div class=" navbar-nav col container"> 
      <a href="https://www.facebook.com" target="_blank">
        <FacebookIcon fontSize="large" color="white" />
      </a>
      </div>

      <div class=" navbar-nav col container"> <a href="https://twitter.com" target="_blank">
      <TwitterIcon fontSize="large" color="primary" />
      </a>
      </div>
  
      <div class=" navbar-nav col container"> 
      <a href="https://www.youtube.com" target="_blank">
      <YouTubeIcon fontSize="large" color="primary" />
      </a>
      </div>
  
      <div class=" navbar-nav col container"> 
      <a href="https://pinterest.com" target="_blank">
      <PinterestIcon fontSize="large" color="primary" />
      </a>
      </div>


      <div class=" navbar-nav col container"> 
      <a href="https://github.com" target="_blank">
      <GitHubIcon fontSize="large" color="primary" />
      </a>
      </div>
      
      

    </div>


  </footer>


  
  

    );
}

export default Footer;