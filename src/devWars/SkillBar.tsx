import type { Skill} from "./Dev";

type SkillBarProps ={
    skill: Skill
}

export default function SkillBar({skill}:SkillBarProps){
    return(
        <div className="skill">
            <div className="info">
                <span>{skill.label}</span>
                <span>{skill.value}/100</span>
            </div>
            <div className="backgruond">
                <div className={`progress ${skill.type}`}
                style={{width:`${skill.value}%`}}
                ></div>
            </div>
        </div>
    )
}