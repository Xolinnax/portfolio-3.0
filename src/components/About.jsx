import React from "react";
import face from "./images/pfp_edited.jpg";

function About()
{
    return (
            <div className="aboutMeSection" id="about">
                <div className="pfpDiv">
                    <img className="myFace" src={face} alt="Ashwin" />
                </div>
                <div>
                    <h2 className="hello">Hello</h2>
                    <h3 className="aboutMe">I am an avid learner, creator, and explorer. My curiosity has always led me to places unknown and my determination has let me come out a better person. I also like cats wayy too much :').</h3>
                </div>
            </div>
    );
}

export default About;