import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { ComponentType } from "react"
import { connect } from "react-redux"
import { NavLink, withRouter, RouteComponentProps } from "react-router-dom"
import { compose } from "redux"
import { AuthThunk } from "../../redux/authentication"
import { AppStateType } from "../../redux/reducer_store"
import { getAuthenticationFamilySelector, getAuthenticationMailSelector, getAuthenticationNameSelector, getAuthenticationPhoneSelector, getAuthenticationStatusSelector } from "../../redux/Selectors"
import s from "./auth.module.css"

type AuthenticationContainerType = {
  //  ChangeViewLoginClose:()=>void
   Authentication:(login:string,pass:string)=>void
    auth:boolean
    name:string
    family:string   
    LoginWindowClose:()=>void
  //  history:any
   
}
type AuthenticationContainerEXTERNALType = {
    LoginWindowClose:()=>void
}
    
type RouterPropsType = {
    history:string
}
class AuthenticationContainer extends React.Component<ComposeType>{
    componentDidMount(){   
        console.log(this.props.match)   
    }
    componentDidUpdate(prevProps:ComposeType){
        // на главную страницу после авторизации
        if(prevProps.auth != this.props.auth){
            //this.props.history.push('/')
            this.props.LoginWindowClose()
        
        }

    }
    changeEnter = ()=>{
        this.props.Authentication(this.state.login,this.state.pass)
       
    }
    onChangeLogin=(e:any)=>{
        this.setState({login:e.currentTarget.value})
    }
    onChangePass=(e:any)=>{
        this.setState({pass:e.currentTarget.value})
    }
    state = {
        login:"",
        pass:""
    }
    render(){
        return(
            <div className={s.wrapper_auth}>
              {!this.props.auth ?
              <div className={s.wrap_reg_auth}>
                    <div className={s.auth_form}>
                        <div> <label> Логин:</label> <input placeholder={"Логин"} value={this.state.login} onChange={this.onChangeLogin}/> </div>
                        <div> <label> Пароль:</label> <input placeholder={"Пароль"} value={this.state.pass} onChange={this.onChangePass}/> </div>
                        <div><small>Забыли пароль ?</small></div>
                        <div className={s.enter} onClick={this.changeEnter}> Вход </div>
                        <div  className={s.close_auth} onClick={()=>{
                            this.props.LoginWindowClose()
                        }} ><FontAwesomeIcon icon={['fas','window-close']}/> </div> 
                    </div>
                    <div className={s.reg_form}> 
                           <NavLink className={s.reg_button} to={'/registration'}  onClick={()=>{
                               this.props.LoginWindowClose()
                           }}> Зарегистрироваться </NavLink>
                           <div> <p>После регистрации на этом сайте Вам будет доступно отслеживание закав, личный кабинет и другие возможности</p></div>
                      
                    </div>
                </div>
                : 
                <div>
                   
                </div>}

              {!this.props.auth &&   <div className={s.back_fon}></div>}
            </div>
        )
    }
}

type mapStateToPropsType = {
   auth    :   boolean
    name    :   string
    family  :   string
    phone   :   string
    mail    :   string
}
let mapStateToProps = (state:AppStateType):mapStateToPropsType => ({
    auth    :   getAuthenticationStatusSelector(state),
    name    :   getAuthenticationNameSelector(state),
    family  :   getAuthenticationFamilySelector(state),
    phone   :   getAuthenticationPhoneSelector(state),
    mail    :   getAuthenticationMailSelector(state)

})
type AuthRouteType={
    location:string
}
type ComposeType = ComponentType<AuthenticationContainerEXTERNALType>& AuthenticationContainerEXTERNALType & AuthenticationContainerType  & RouteComponentProps


//type w1Type = RouteComponentProps <AuthenticationContainerType>
//let w1 =    withRouter(AuthenticationContainer)

export default compose<ComposeType>(withRouter, connect(mapStateToProps,{Authentication : AuthThunk}))(AuthenticationContainer)

       