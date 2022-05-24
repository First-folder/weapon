import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"
import { AppStateType } from "../redux/reducer_store"
import { getAuthenticationStatusSelector } from "../redux/Selectors"

 export const withAuthRedirect = <P extends object>(Component:React.ComponentType<P>) => { 
     class RedirectComponent extends React.Component <RedirectComponentType>{
         render(){
             if(this.props.auth === false) return <Redirect to={"/authentication"}/>
             return(
                 <Component {...this.props as P} />
             );
         }
       }  
     let ConnectAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);
     return ConnectAuthRedirectComponent;
    }
  

type RedirectComponentType = {
    auth:boolean
}
type mapStateToPropsType = {
    auth:boolean
}
let mapStateToProps =(state:AppStateType):mapStateToPropsType=>({
    auth:getAuthenticationStatusSelector(state)
})