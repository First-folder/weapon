import React from "react"
import s from "./style.module.css"

type MarkerThreeType= {
    content:string
}
let MarkerThree:React.FC<MarkerThreeType> = (props)=>{
    return(
        <div className={s.wrapperMarker}>          
            <div className={s.contentMthree}>{props.content} </div>
        </div>
    )
}

export default MarkerThree;