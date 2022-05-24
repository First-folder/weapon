import React from "react"
type TextComponent={
    content:string
}

let TextComponent:React.FC<TextComponent>= (props:any)=>{
    return(
        <div> <p>{props.content}</p> </div>
    )

}
export default TextComponent