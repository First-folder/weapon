import React from "react"
import s from "./style.module.css"

type MarkerTwoType= {
    content:string
}
let MarkerTwo:React.FC<MarkerTwoType> = (props)=>{
    return(
        <div className={s.wrapperMarker}>          
            <div className={s.contentMtwo}>{props.content} </div>
        </div>
    )
}

export default MarkerTwo;