import React from "react"
type TitleTwoComponentType = {
    content: string
}
let TitleTwoComponent:React.FC<TitleTwoComponentType> = (props)=>{
    return(
        <div><h4>{props.content}</h4></div>
    )

}
export default TitleTwoComponent