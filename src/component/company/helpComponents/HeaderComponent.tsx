import React from "react"
type HeaderComponent={
    content:string
}
let HeaderComponent:React.FC<HeaderComponent> = (props)=>{
    return(
        <div> <h1>{props.content}</h1></div>
    )
}
export default HeaderComponent