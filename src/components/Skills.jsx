import React from "react";
import Skill from "./Skill.jsx";
import {useTransition,animated} from "react-spring";

function Skills()
{
    const [skillId,setSkillId]=React.useState(0);
    const [isVisible,setIsVisible]=React.useState(true);
    const transition=useTransition(isVisible,{
        from:{y:10,opacity:0},
        enter:{y:0,opacity:1},
        leave:{y:-10,opacity:0}
    });

    function handleClick(event)
    {
        if(event.target.outerText==="FrontEnd" && skillId===0)
        {
            return;
        }
        else if(event.target.outerText==="BackEnd" && skillId===1)
        {
            return;
        }
        else if(event.target.outerText==="Basic Web Dev" && skillId===2)
        {
            return;
        }
        else
        {
            setIsVisible(false);
            setTimeout(function () {
                if(event.target.outerText==="FrontEnd")
                {
                    setSkillId(0);
                }
                else if(event.target.outerText==="BackEnd")
                {
                    setSkillId(1);
                }
                else
                {
                    setSkillId(2);
                }
                setIsVisible(true);
            },500)
        }
    }

    return(
        <div className="Skills" id="skills">
                <h3 className="SkillsTitle">My Skills</h3>
                {transition((style,item)=>item?<animated.div style={style} className="skill"><Skill id={skillId} /></animated.div>:"")}
                
                <div className="skillButtonList">
                    <h3 className="skillButton" onClick={handleClick} value={0}>FrontEnd</h3>
                    <h3 className="skillButton" onClick={handleClick} value={1}>BackEnd</h3>
                    <h3 className="skillButton" onClick={handleClick} value={2}>Basic Web Dev</h3>
                </div>
            </div>
    )
}

export default Skills;