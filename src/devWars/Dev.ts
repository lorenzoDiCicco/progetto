export type SkillType = 'front-end'|'back-end'

export type Skill ={
    label: string
    type: SkillType
    value:number
}

export type Gender= 'm'|'f'

export type Dev = {
    id: number
    imageUrl:string
    firstname:string
    lastname:string
    birthDate:string
    gender:Gender
    skills:Skill[]
}