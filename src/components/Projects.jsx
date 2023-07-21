import React from "react";
import Quizzio from "./images/Quizzio.png";
import Portfolio from "./images/Portfolio.png";
import Authenify from "./images/Authenify.png";
import Keymaster from "./images/Keymaster.png";

function Projects ()
{
    return (
            <div className="Projects" id="projects">
                <h3 className="ProjectsTitle">My Projects</h3>
                <div>
                    <h2 className="ProjectTitle">Keymaster</h2>
                    <p className="comingSoon">Coming soon :)</p>
                    <img className="projectSS leftimg comingSoonImg" style={{width:"auto", height:"250px"}} src={Keymaster} alt="Screenshot of keymaster"/>
                    <div className="aboutProject leftimgAbout">
                        <p className="thingUsed">
                            MongoDB
                        </p>
                        <p className="thingUsed">
                            Express
                        </p>
                        <p className="thingUsed">
                            React
                        </p>
                        <p className="thingUsed">
                            NodeJS
                        </p>
                        <p className="projectDescription">
                            MERN full stack application that uses Authenify to test your typing speed with leaderboards, currently a WIP but coming really soon :).
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="ProjectTitle"><a href="https://authenify-t9sw.onrender.com/">Authenify</a></h2>
                    <img className="projectSS rightimg" style={{width:"auto", height:"250px"}} src={Authenify} alt="Screenshot of quizzio"/>
                    <div className="aboutProject rightimgAbout">
                        <p className="thingUsed">
                            MongoDB
                        </p>
                        <p className="thingUsed">
                            Express
                        </p>
                        <p className="thingUsed">
                            React
                        </p>
                        <p className="thingUsed">
                            NodeJS
                        </p>
                        <p className="projectDescription">
                            A MERN full stack authentication web app, to be used for all of my future web apps. Done to practice backend development.
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="ProjectTitle"><a href="https://quizzio-q16m.onrender.com/">Quizzio</a></h2>
                    <img className="projectSS leftimg" style={{width:"auto", height:"250px"}} src={Quizzio} alt="Screenshot of quizzio"/>
                    <div className="aboutProject leftimgAbout">
                        <p className="thingUsed">
                            React
                        </p>
                        <p className="thingUsed">
                            API calls
                        </p>
                        <p className="projectDescription">
                            Used React for backend and frontend and made a quiz using the OpenTriviaDB. Personal project to strengthen my base in React and API calls.
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="ProjectTitle"><a href="https://xolinnax.github.io/ash-portfolio-2.0/">Personal Portfolio</a></h2>
                    <img className="projectSS rightimg" style={{width:"auto", height:"250px"}} src={Portfolio} alt="Screenshot of quizzio"/>
                    <div className="aboutProject rightimgAbout">
                        <p className="thingUsed">
                            HTML
                        </p>
                        <p className="thingUsed">
                            CSS
                        </p>
                        <p className="projectDescription">
                            Previous version of portfolio made purely with HTML and CSS.
                        </p>
                    </div>
                </div>
            </div>
            )
}

export default Projects;