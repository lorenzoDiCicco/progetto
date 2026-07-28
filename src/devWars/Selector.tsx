import type { Dev } from "./Dev";

type SelectorProps={
    developers:Dev[]
    selectedDevA: Dev
    selectedDevB: Dev
    onSelectA:(dev:Dev)=>void
    onSelectB:(dev:Dev)=>void
}

export default function ({developers,selectedDevA,selectedDevB,onSelectA,onSelectB}:SelectorProps){
    return(
        <div className="selector">
            {developers.map(dev=>{
                const isSelectedA=dev.id===selectedDevA.id
                const isSelectedB=dev.id===selectedDevB.id
                return(
                    <div className={`devMini ${isSelectedA? "selectedA":''} ${isSelectedB? "selectedB":''}`}
                    onClick={()=>{
                        if(isSelectedA){
                            onSelectA(dev)
                        }else if (isSelectedB){
                            onSelectB(dev)
                        }else {
                            onSelectA(dev)
                        }
                    }}
                    >
                        <img src={dev.imageUrl} alt="" />
                        {isSelectedA && (
                            <span className="miniLabel labelA">A</span>
                        )}
                        {isSelectedB && (
                            <span className="miniLabel labelB">B</span>
                        )}
                        <span>
                            {dev.firstname} {dev.lastname}
                        </span>


                    </div>
                )
            })}
        </div>
    )
}