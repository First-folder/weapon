import React from "react"
import s from "./style.module.css"

type TextBoltType= {
    content:string
}
let TextBolt:React.FC<TextBoltType> = (props)=>{
    return(
        <div className={s.wrapperMarker}>          
            <div className={s.contentBolt}>{props.content} </div>
        </div>
    )
}

export default TextBolt;