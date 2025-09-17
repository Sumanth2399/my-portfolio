import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/cricket-stats.jpg';
import mock03 from '../assets/images/original.png';
import mock04 from '../assets/images/keyword-research-tools-1200x900.webp';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">

            <div className="project">
                <a href="https://github.com/Sumanth2399/FlaskSecureX-A-RESTful-API-with-JWT-Authentication-Error-Handling-File-Uploads" target="_blank" rel="noreferrer">
                    <img src={mock01} className="zoom" alt="FlaskSecureX" width="100%"/>
                </a>
                <a href="https://github.com/Sumanth2399/FlaskSecureX-A-RESTful-API-with-JWT-Authentication-Error-Handling-File-Uploads" target="_blank" rel="noreferrer">
                    <h2>FlaskSecureX</h2>
                </a>
                <p>
                    Built a secure RESTful API with Flask, JWT authentication, file upload handling, and custom error management.
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/Sumanth2399/Cricket-Match-Analysis-Decoding-the-Game-Through-Data" target="_blank" rel="noreferrer">
                    <img src={mock02} className="zoom" alt="Cricket Analysis" width="100%"/>
                </a>
                <a href="https://github.com/Sumanth2399/Cricket-Match-Analysis-Decoding-the-Game-Through-Data" target="_blank" rel="noreferrer">
                    <h2>Cricket Match Analysis</h2>
                </a>
                <p>
                    Data-driven analysis of cricket matches using Python, Pandas, and visualization libraries to uncover player and match insights.
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/Sumanth2399/NutriGenie" target="_blank" rel="noreferrer">
                    <img src={mock03} className="zoom" alt="NutriGenie" width="100%"/>
                </a>
                <a href="https://github.com/Sumanth2399/NutriGenie" target="_blank" rel="noreferrer">
                    <h2>NutriGenie</h2>
                </a>
                <p>
                    A nutrition recommendation system leveraging AI to provide personalized meal suggestions based on user health data.
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/Sumanth2399/SEO-Keyword-Tracker-and-Analyzer-main" target="_blank" rel="noreferrer">
                    <img src={mock04} className="zoom" alt="SEO Keyword Tracker" width="100%"/>
                </a>
                <a href="https://github.com/Sumanth2399/SEO-Keyword-Tracker-and-Analyzer-main" target="_blank" rel="noreferrer">
                    <h2>SEO Keyword Tracker</h2>
                </a>
                <p>
                    Developed a keyword tracking and analysis tool to monitor SEO performance, identify trends, and optimize content strategy.
                </p>
            </div>

        </div>
    </div>
    );
}

export default Project;
