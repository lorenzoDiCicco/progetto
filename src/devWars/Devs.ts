import type { Dev } from "./Dev";

export const developers: Dev[]=[
    {
        id:1,
        imageUrl:'https://i.pravatar.cc/400?img=64',
        firstname:'Luca',
        lastname:'Ferrari',
        birthDate:'1992-04-18',
        gender: 'm',
         skills:[
            {label:"HTML/CSS", type:"front-end", value:88 },
            {label:"JavaScript", type:"front-end", value:91 },
            {label:"React", type:"front-end", value:86 },
            {label:"Node.js", type:"back-end", value:72 },
            {label:"Algorithms", type:"back-end", value:68 }
        ]
    },
    {
        id:2,
        imageUrl:"https://i.pravatar.cc/400?img=47",
        firstname:"Anna",
        lastname:"Bianchi",
        birthDate:"1995-07-09",
        gender:"f",
        skills:[
            { label:"HTML/CSS", type:"front-end", value:96 },
            { label:"JavaScript", type:"front-end", value:89 },
            { label:"React", type:"front-end", value:94 },
            { label:"Node.js", type:"back-end", value:70 },
            { label:"Algorithms", type:"back-end", value:75 }
        ]
    },
    { id: 3,
        imageUrl:"https://i.pravatar.cc/400?img=54",
        firstname:"Marco",
        lastname:"Romano",
        birthDate:"1990-11-22",
        gender:"m",
        skills:[
            {label:"HTML/CSS", type:"front-end", value:74 },
            {label:"JavaScript", type:"front-end", value:82 },
            {label:"React", type:"front-end", value:78 },
            {label:"Node.js", type:"back-end", value:94 },
            {label:"Algorithms", type:"back-end", value:91 }
        ]
    },
    {
        id: 4,
        imageUrl:"https://i.pravatar.cc/400?img=39",
        firstname:"Sara",
        lastname:"Conti",
        birthDate:"1997-02-14",
        gender:"f",
        skills:[
            {label:"HTML/CSS", type:"front-end", value:91 },
            {label:"JavaScript", type:"front-end", value:95 },
            {label:"React", type:"front-end", value:90 },
            {label:"Node.js", type:"back-end", value:63 },
            {label:"Algorithms", type:"back-end", value:70 }
        ]
    },
    {
        id: 5,
        imageUrl:"https://i.pravatar.cc/400?img=18",
        firstname:"Davide",
        lastname:"Greco",
        birthDate:"1993-09-03",
        gender:"m",
        skills:[
            {label:"HTML/CSS", type:"front-end", value:83 },
            {label:"JavaScript", type:"front-end", value:87 },
            {label:"React", type: "front-end", value:81 },
            {label:"Node.js", type:"back-end", value:86 },
            {label:"Algorithms", type:"back-end", value:89 }
        ]
    },
    {
        id: 6,
        imageUrl:"https://i.pravatar.cc/400?img=26",
        firstname:"Elena",
        lastname:"Marini",
        birthDate:"1996-12-28",
        gender:"f",
        skills:[
            {label:"HTML/CSS", type:"front-end", value:78 },
            {label:"JavaScript", type:"front-end", value:84 },
            {label:"React", type: "front-end", value:80 },
            {label:"Node.js", type:"back-end", value:92 },
            {label:"Algorithms", type:"back-end", value:85 }
        ]
    },

]