import React from "react";
import ReactLogo from "./images/React.png";
import ReactRouterLogo from "./images/React-Router-v2.png";
import ReactSpringLogo from "./images/React-Spring-v2.png";
import NodeJS from "./images/NodeJS-v2.png";
import ExpressJS from "./images/ExpressJS.png";
import HTML from "./images/HTML.png";
import CSS from "./images/CSS.png";
import JS from "./images/JS.png"

function Skill(props)
{
    if(props.id===0)
    {
        return(
            <div>
                <div className="Images">
                    <img className="SkillsImages" src={ReactLogo} alt="React logo"/>
                    <img className="SkillsImages" src={ReactRouterLogo} alt="React Router logo"/>
                    <img className="SkillsImages" src={ReactSpringLogo} alt="React Spring logo"/>
                </div>
                <div className="SkillNames">
                    <h4 className="SkillAppNames">
                        React
                    </h4>
                    <h4 className="SkillAppNames">
                        React-Router
                    </h4>
                    <h4 className="SkillAppNames">
                        React-Spring
                    </h4>
                </div>
            </div>

        )
    }
    else if(props.id===1)
    {
        return (
        <div>
            <div className="Images">
                <img className="SkillsImages" src={NodeJS} alt="NodeJS logo"/>
                <img className="SkillsImages" src={ExpressJS} alt="ExpressJS logo"/>
            </div>
            <div className="SkillNames">
                <h4 className="SkillAppNames">
                    NodeJs
                </h4>
                <h4 className="SkillAppNames">
                    Express
                </h4>
            </div>
        </div>)
    }
    else if(props.id===2)
    {
        return (
            <div>
                <div className="Images">
                    <img className="SkillsImages" src={HTML} alt="HTML logo"/>
                    <img className="SkillsImages" src={CSS} alt="CSS logo"/>
                    <img className="SkillsImages" src={JS} alt="JS logo"/>
                </div>
                <div className="SkillNames">
                    <h4 className="SkillAppNames">
                        HTML
                    </h4>
                    <h4 className="SkillAppNames">
                        CSS
                    </h4>
                    <h4 className="SkillAppNames">
                        JS
                    </h4>
                </div>
            </div>
        )
    }
}

export default Skill;