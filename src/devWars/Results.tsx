import type { Dev } from "./Dev";
import type { Skill } from "./Dev";
import '../Css/Result.css'

type ResultProps ={
    devA:Dev 
    devB:Dev
}

function getSkill(dev: Dev , label:string):Skill | undefined{
    return dev.skills.find(skill=>skill.label===label)
}

 function compare(valueA:number,valueB:number):"A"|"B"|"DRAW"{
    if(valueA>valueB){
        return "A"
    }
    if(valueB>valueA){
        return "B"
    }
    return "DRAW"
}

 function getAverage(dev:Dev,type?:"front-end"|"back-end"):number{
    const skills=type? dev.skills.filter(skill=>skill.type===type):dev.skills
    return(
        skills.reduce((sum,skill)=>sum+skill.value,0)/skills.length
    )
 }

 export default function Result({devA,devB}:ResultProps){
    const sharedSkills=devA.skills.filter(skillA=>devB.skills.some(skillB=>skillB.label===skillA.label))
    const firstNameA= devA.firstname
    const firstNameB= devB.firstname
    return(
        <div className="comparison">
            <h2>Chi dovresti scegliere?</h2>
            <div className="list">
                {sharedSkills.map(skill=>{
                    const skillB=getSkill(devB,skill.label)
                    if(!skillB){
                        return null
                    }
                    const result= compare(skill.value,skillB.value)
                    if(result === "DRAW"){
                        return(
                            <div className="comparisonItem draw">
                                in {skill.label} i due sviluppatori sono alla pari
                            </div>
                        )
                    }
                    const winner= result==="A"?firstNameA:firstNameB
                    const winnerClass = result ==="A"? "winnerA":"winnerB"
                    return(
                        <div className="comparisonItem">
                            Se vuoi il migliore in {skill.label}, scegli <strong className={winnerClass}>{winner}</strong>
                        </div>
                    )
                })}
            </div>
            <div className="averageResults">
                <div className="averageResult frontend-result">
                    <p>Per il Front-end,la scelta migliore è{" "}
                         <strong className={getAverage(devA,"front-end")>getAverage(devB,"front-end")? 'winnerA':'winnerB'}>{getAverage(devA,"front-end")>getAverage(devB,"front-end")?firstNameA:firstNameB}
                         </strong>
                    </p>
                </div>
                <div className="averageResult backend-result">
                    <p>Per il Back-end,la scelta migliore è{" "} 
                        <strong className={getAverage(devA,"back-end")>getAverage(devB,"back-end")?'winnerA':'winnerB'}>{getAverage(devA,"back-end")>getAverage(devB,"back-end")?firstNameA:firstNameB}
                        </strong>
                    </p>
                </div>
                <div className="averageResult overall-result">
                    <p>
                        Complessivamente scegli {" "}
                        <strong className={getAverage(devA)>getAverage(devB)?'winnerA':'winnerB'}>
                            {getAverage(devA)>getAverage(devB)?firstNameA:firstNameB}
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    )
 }
    