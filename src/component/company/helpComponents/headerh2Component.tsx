import React from "react"
type Headerh2ComponentType={
    content:string
}

let Headerh2Component:React.FC<Headerh2ComponentType>= (props:any)=>{
    return(
        <div> <h2>{props.content}</h2> </div>
    )

}
export default Headerh2Component