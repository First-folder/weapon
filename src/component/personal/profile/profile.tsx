import React from "react"
import { connect } from "react-redux"
import { AppStateType } from "../../../redux/reducer_store"
import { getAuthenticationFamilySelector, getAuthenticationLoginSelector, getAuthenticationMailSelector, getAuthenticationNameSelector, getAuthenticationPhoneSelector } from "../../../redux/Selectors"
import BreadCrumbsContainer from "../../breadCrumbs/BreadCrumbsContainer"
import s from "../../registration/registration.module.css"
type  ProfileType={
    family: string 
    name:   string 
    login:  string
    mail:   string 
    phone:  string 

}
let Profile:React.FC<ProfileType>=(props)=>{
    let ChangeLogin = (e:any)=>{       
       
    }
    let ChangePass = (e:any)=>{
       
    }
    let ChangeFamily=(e:any)=>{
       
    }
    let ChangeName=(e:any)=>{
       
    }
    let ChangeMail=(e:any)=>{           
       
    }
    let SendDataUser = ()=>{
       
    }
    return(
        <div className={s.wrapperProfile}>
           
             <div className={s.info_user}>
                    <label><span>*</span>Имя:</label>
                    <input value={props.name} onChange={ChangeName} />
                </div>
                <div className={s.info_user}>
                    <label><span>*</span>Фамилия:</label>
                    <input value={props.family} onChange={ChangeFamily}/>
                </div>
                <div className={s.info_user}>
                    <label><span>*</span>Логин:</label>
                    <input value={props.login} onChange={ChangeLogin}/>
                </div>
               
                <div className={s.info_user}>
                    <label><span>*</span>Подтверждение пароля:</label>
                    <input/>
                </div>
                <div className={s.info_user}>
                    <label><span>*</span>E-mail:</label>
                    <input value={props.mail} onChange={ChangeMail}/>
                </div>
                <div className={s.send_info}>
                    <div className={s.button_reg}  onClick={SendDataUser}>Сохранить</div>
                    <div className={s.consent_data} ><span>Я согласен(а) на обработку персональных данных.</span></div>
                </div>
        </div>
    )
}
type ProfileContainerType={
    family: string 
    name:   string 
    login:  string
    mail:   string 
    phone:  string 
}
class ProfileContainer extends React.Component<ProfileContainerType>{
    render(){
        return( 
        <Profile family={this.props.family} name={this.props.name} mail={this.props.mail} phone={this.props.phone} login={this.props.login}/>)
    }
}
type mapStateToPropsType = {
    family: string 
    name:   string 
    login:  string
    mail:   string 
    phone:  string 
}
let mapStateToProps = (state:AppStateType):mapStateToPropsType=>({
 family:getAuthenticationFamilySelector(state),
 name:getAuthenticationNameSelector(state),
 login:getAuthenticationLoginSelector(state),
 mail:getAuthenticationMailSelector(state),
 phone:getAuthenticationPhoneSelector(state)
})

export default connect(mapStateToProps,{})(ProfileContainer)