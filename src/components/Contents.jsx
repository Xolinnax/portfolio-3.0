import React from "react";
import {useSpring,animated} from "react-spring";
import {Link} from "react-scroll";

function Contents()
{
    const [overContact,setoverContact]=React.useState(false);

    const anim=useSpring(
        {
            right:overContact?'90%':'97%'
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
        <animated.div style={anim} className="scrollContents" onMouseOver={mouseOverContact} onMouseLeave={mouseLeaveContact}>             
            <h3 className="Contents">Content</h3>
            <div className="contentScrolls">
                <div className="contentLinks">
                    <Link to="home" spy={true} smooth={true} duration={100}>Home</Link>
                </div>
                <div className="contentLinks">
                    <Link to="about" spy={true} offset={0} smooth={true} duration={100}>About</Link>
                </div>
                <div className="contentLinks">
                    <Link to="skills" spy={true} offset={10} smooth={true} duration={100}>Skills</Link>
                </div>
                <div className="contentLinks">
                    <Link to="projects" spy={true} offset={10} smooth={true} duration={100}>Projects</Link>
                </div>
            </div>
        </animated.div>
    )
}

export default Contents;