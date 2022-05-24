
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { connect } from "react-redux"
import { AppStateType } from "../../redux/reducer_store"
import { ReginstrationFamilyUserAC, ReginstrationLoginUserAC, ReginstrationMailUserAC, ReginstrationNameUserAC, ReginstrationPassUserAC, ReginstrationPhoneUserAC, ReginstrationUserThunk } from "../../redux/registration_user"
import { getRegistrationFamilySelector, getRegistrationLoginSelector, getRegistrationMailSelector, getRegistrationNameSelector, getRegistrationPassSelector, getRegistrationPhoneSelector } from "../../redux/Selectors"
import s from "./registration.module.css"

type RegistrationType={
    login   : string
    pass    : string
    family  : string
    name    : string
    phone   : string
    mail    : string
    ReginstrationLogin:(login:string)=>void
    ReginstrationPass:(pass:string)=>void
    ReginstrationFamily:(family:string)=>void
    ReginstrationNane   :(name:string)=>void
    ReginstrationMail   :(mail:string)=>void
    ReginstrationUser   :(login:string,
        pass:string,
        family:string,
        name:string,
        phone:string,
        mail:string )=>void
}
let Registration:React.FC<RegistrationType> = (props)=>{
    let ChangeLogin = (e:any)=>{       
        props.ReginstrationLogin(e.currentTarget.value)
    }
    let ChangePass = (e:any)=>{
        props.ReginstrationPass(e.currentTarget.value)
    }
    let ChangeFamily=(e:any)=>{
        props.ReginstrationFamily(e.currentTarget.value)
    }
    let ChangeName=(e:any)=>{
        props.ReginstrationNane(e.currentTarget.value)
    }
    let ChangeMail=(e:any)=>{           
        props.ReginstrationMail(e.currentTarget.value)
    }
    let SendDataUser = ()=>{
        props.ReginstrationUser(props.login,props.pass,props.family,props.name,"",props.mail)
    }
    return(
        <div className={s.wrapper}>
                <h1>Регистрация</h1>
                <div className={s.wrapper_warning}> 
                    <div className={s.warning}> <FontAwesomeIcon icon={['fas','exclamation-circle']}/> </div>
                    <small>После регистрации на сайте Вам будет доступно отслеживание состояния
                            заказов, личный кабинет и другие новые возможности</small>
                </div>    
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
                    <label><span>*</span>Пароль:</label>
                    <input value={props.pass} onChange={ChangePass}/>
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
                    <div className={s.button_reg}  onClick={SendDataUser}>Регистрация</div>
                    <div className={s.consent_data} ><span>Я согласен(а) на обработку персональных данных.</span></div>
                </div>
            </div>

    )
}

type RegistrationContainerType={
    login:string
    pass    : string
    family  : string
    name    : string
    phone   : string
    mail    : string
    ReginstrationLogin:(login:string)=>void
    ReginstrationPass:(pass:string)=>void
    ReginstrationFamily:(family:string)=>void
    ReginstrationNane   :(name:string)=>void
    ReginstrationMail   :(mail:string)=>void
    ReginstrationUser   :(login:string,
                             pass:string,
                             family:string,
                             name:string,
                             phone:string,
                             mail:string )=>void
    
}
class RegistrationContainer extends React.Component<RegistrationContainerType>{
    
    checkEditLogin = (e:any)=>{
        console.log(e.currentTarget)
      //  this.props.ReginstrationLogin(login);
    }     
   
    render(){
      
        return(<Registration login={this.props.login}
                             pass={this.props.pass}
                             family={this.props.family}
                             name={this.props.name}
                             phone={this.props.phone}
                             mail={this.props.mail}
                             ReginstrationLogin={this.props.ReginstrationLogin}
                             ReginstrationPass={this.props.ReginstrationPass}
                             ReginstrationFamily = {this.props.ReginstrationFamily}
                             ReginstrationNane  ={this.props.ReginstrationNane}
                             ReginstrationMail  ={this.props.ReginstrationMail}
                             ReginstrationUser  ={this.props.ReginstrationUser}
                             />
            
        )
    }

}
type MapStateToPropsType = {
    login:string
    pass    : string
    family  : string
    name    : string
    phone   : string
    mail    : string
}
let mapStateToProps = (state:AppStateType):MapStateToPropsType => ({
    login   : getRegistrationLoginSelector(state),
    pass    : getRegistrationPassSelector(state),
    family  : getRegistrationFamilySelector(state),
    name    : getRegistrationNameSelector(state),
    phone   : getRegistrationPhoneSelector(state),
    mail    : getRegistrationMailSelector(state)   

})
 export default connect(mapStateToProps,{ReginstrationLogin:ReginstrationLoginUserAC,
                                         ReginstrationPass:ReginstrationPassUserAC,
                                         ReginstrationFamily:ReginstrationFamilyUserAC,
                                         ReginstrationNane:ReginstrationNameUserAC,
                                         ReginstrationMail:ReginstrationMailUserAC,
                                         ReginstrationPhone:ReginstrationPhoneUserAC,
                                         ReginstrationUser  : ReginstrationUserThunk})(RegistrationContainer)
