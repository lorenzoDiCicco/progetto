import type { Dev } from "./Dev";
import Card from "./Crad";

type CompareProps={
    devA: Dev
    devB: Dev
}

export default function Compare ({devA,devB}:CompareProps){
    return(
        <div className="compare">
            <Card dev={devA} label="DEV A"/>
            <div className="vs">VS</div>
            <Card dev={devB}label="DEV B"/>
        </div>
        
    )
}