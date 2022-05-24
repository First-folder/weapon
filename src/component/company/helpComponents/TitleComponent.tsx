import React from "react"
type TitleComponent = {
    content: string
}
let TitleComponent:React.FC<TitleComponent> = (props)=>{
    return(
        <div><h3>{props.content}</h3></div>
    )

}
export default TitleComponent