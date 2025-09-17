import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import AvatarImage from '../assets/images/IMG_0620.jpg';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={AvatarImage} alt="Sumanth Mittapally" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Sumanth2399" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sumanth-mittapally-86831a271/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Sumanth Mittapally</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Sumanth2399" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sumanth-mittapally-86831a271/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;