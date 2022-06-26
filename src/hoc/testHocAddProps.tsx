import React, { Component } from "react"
import { connect } from "react-redux"
import { AppStateType } from "../redux/reducer_store"
import { getAuthenticationPhoneSelector } from "../redux/Selectors"
type mypropsType = {
    a : string
    b :number
}
let myprops = {
    a:"1",
    b:2
}
export const AdDPropsHocTest =<P extends object>(Component:React.ComponentType<P>)=>{
            class AddProps extends React.Component<AddPropsType>{
                render(){
                    return(
                        <Component {...this.props as P & mypropsType} />
                       
                    )
                }
            }

           let ConnectAddProps = connect(mstp)(AddProps) 
           return ConnectAddProps;

}
type AddPropsType={
    
}
let mstp = (state:AppStateType) =>({
de:getAuthenticationPhoneSelector(state)

})