import React from 'react';
import "../css/projects.css"
import me from "../images/computer.png"
import project1 from "../images/project1.png"
import html from "../images/html.png"
import css from "../images/css.png"
import js from "../images/js.png"
import git from "../images/git.png"
import mysql from "../images/mysql.png"
import react from "../images/react.png"
const Projects = () => {
    return (<>
        <div className="techStack">
            <img className="techStackImages" src={html} alt="Html" title='HTML' />
            <img className="techStackImages" src={css} alt="Css" title='CSS' />
            <img className="techStackImages" src={js} alt="Javascript" title='JavaScript' />
            <img className="techStackImages" src={react} alt="React" title='ReactJS' />
            <img className="techStackImages" src={git} alt="Git" title='Git' />
            <img className="techStackImages" src={mysql} alt="MySQL" title='MySQL' />
        </div>
        <div className='projectContainer' name="projects">
            <a href='#'><div className='projects'><img src={project1} alt='meinthe' className='projectImage' /><div className='projectDescription'>Hello world</div></div></a>
            {/* <div className='projects'><img src={me} alt='meinthe' className='projectImage'/><div className='projectDescription'>Hello world</div></div> */}
            {/* <div className='projects'><img src={me} alt='meinthe' className='projectImage'/><div className='projectDescription'>Hello world</div></div> */}
            {/* <div className='projects'><img src={me} alt='meinthe' className='projectImage'/><div className='projectDescription'>Hello world</div></div> */}
        </div>
    </>
    );
}

export default Projects;
