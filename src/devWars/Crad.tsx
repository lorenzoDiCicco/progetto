import type { Dev } from "./Dev";
import SkillBar from "./SkillBar";

type CardProps={
    dev:Dev
    label: string
}

export default function Card({dev,label}: CardProps){
    const fullName= `${dev.firstname} ${dev.lastname}`
    const frontendSkills= dev.skills.filter(skill=>skill.type==="front-end")
    const backendSkills= dev.skills.filter(skill=>skill.type==="back-end")
    const frontendAverage= frontendSkills.reduce((sum,skill)=>sum+skill.value,0)/frontendSkills.length
    const backendAverage= backendSkills.reduce((sum,skill)=>sum+skill.value,0)/backendSkills.length
    const overallAverage=dev.skills.reduce((sum,skill)=>sum+skill.value,0)/dev.skills.length

    return(
        <div className={`card ${label==="DEV A"? "devA":"devB"}`}>
            <div className="img">
                <img src={dev.imageUrl} alt="" />
                <span className="label">{label}</span>
                <div className="devInfo">
                    <h2>{fullName}</h2>
                    <p>Nato il {dev.birthDate} • Genere:{dev.gender==='m'? "Maschile":"Femminile"}</p>
                </div>

            </div>
            <div className="averages">
                <div>
                    <span>FRONT END {" "}</span>

                    <strong>{frontendAverage.toFixed(1)}</strong>
                </div>
                 <div>
                    <span>BACK END {" "}</span>
                    <strong>{backendAverage.toFixed(1)}</strong>
                </div>
                 <div>
                    <span>OVERALL {" "}</span>
                    <strong>{overallAverage.toFixed(1)}</strong>
                </div>

            </div>
            <div className="skills">
                {dev.skills.map(skill=>(
                    <SkillBar skill={skill}/>
                ))}

            </div>
        </div>
    )

}
