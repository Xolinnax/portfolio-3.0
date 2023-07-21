import React from "react";
import GitHub from "./images/Github.png";
import LinkedIn from "./images/LinkedIn.png"
import OutLook from "./images/OutLook.png";
import { useSpring,animated } from "react-spring";

function ContactMe()
{
    const [overContact,setoverContact]=React.useState(false);

    const anim=useSpring(
        {
            left:overContact?'94%':'97%'
        }
    )

    function mouseOverContact()
    {
        setoverContact(true);
    }

    function mouseLeaveContact()
    {
        setoverContact(false);
    }

    return (            
        <animated.div style={anim} className="contactMe" onMouseOver={mouseOverContact} onMouseLeave={mouseLeaveContact}>             
            <h3 className="contactMeText">Contact Me</h3>
            <div className="links">
                <a className="gitHubLogo" href="https://github.com/Xolinnax"><img className="contactLogos" src={GitHub} alt="GitHub Logo"/></a>
                <a className="LinkedInLogo" href="https://www.linkedin.com/in/ashwin-suresh-9b7a79275/"><img className="contactLogos" src={LinkedIn} alt="LinkedIn Logo"/></a>
                <a className="" href="mailto:ashwinsbabu@hotmail.com"><img className="contactLogos outLookLogo" src={OutLook} alt="OutLook Logo"/></a>
            </div>
        </animated.div>
    )
}

export default ContactMe;