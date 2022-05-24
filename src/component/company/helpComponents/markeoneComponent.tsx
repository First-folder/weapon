import React from "react"
import s from "./style.module.css"

type MarkerOne= {
    content:string
}
let MarkerOne:React.FC<MarkerOne> = (props)=>{
    return(
        <div className={s.wrapperMarker}>          
            <div className={s.contentM}>{props.content} </div>
        </div>
    )
}

export default MarkerOne;