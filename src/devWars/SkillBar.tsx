import type { Skill} from "./Dev";

type SkillBarProps ={
    skill: Skill
}

export default function SkillBar({skill}:SkillBarProps){
    return(
        <div className="skill">
            <div className="info">
                <div className="infoSx">
                    <div className="infoLabel">{skill.label} {" "}</div>
                    <div className="infoType">{skill.type}</div>
                </div>
                <div className="infoDx">
                    <div className="infoValue">{skill.value}/100</div>
                </div>
                
            </div>
            <div className="backgruond">
                <div className={`progress ${skill.type}`}
                style={{width:`${skill.value}%`}}
                ></div>
            </div>
        </div>
    )
}