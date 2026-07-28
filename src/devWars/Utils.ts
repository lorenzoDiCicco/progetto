import type { Dev } from "./Dev";
import type { Skill } from "./Dev";
import type { SkillType} from "./Dev";

export function getSkill(dev: Dev , label:string):Skill | undefined{
    return dev.skills.find(skill=>skill.label===label)
}

export function getAverage(dev:Dev):number{
    const sum= dev.skills.reduce(
        (total, skill)=>total+skill.value,0
    )
    return sum/dev.skills.length
}

export function getAverageType(dev:Dev, type:SkillType):number{
    const skills= dev.skills.filter(skill=>skill.type===type)
    if (skills.length===0){
        return 0
    }
    const sum = skills.reduce(
        (total, skill)=>total+skill.value,0)
        return sum/skills.length
 }
export function compare(valueA:number,valueB:number):number{
    if(valueA>valueB){
        return 1
    }
    if(valueB>valueA){
        return -1
    }
    return 0
}

