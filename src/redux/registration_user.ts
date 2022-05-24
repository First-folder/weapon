import react from "React";
import { ThunkAction } from "redux-thunk";
import { ApiAuthData } from "../dal/api";
import { AppStateType } from "./reducer_store";

const REGISTRATION_ADD_USER_INFO = "REGISTRATION_ADD_USER_INFO";
const REGISTRATION_ADD_LOGIN_USER = "REGISTRATION_ADD_LOGIN_USER"
const REGISTRATION_ADD_PASS_USER = "REGISTRATION_ADD_PASS_USER"
const REGISTRATION_ADD_FAMILY_USER = "REGISTRATION_ADD_FAMILY_USER"
const REGISTRATION_ADD_NAME_USER = "REGISTRATION_ADD_NAME_USER"
const REGISTRATION_ADD_MAIL_USER = "REGISTRATION_ADD_MAIL_USER"
const REGISTRATION_ADD_PHONE_USER = "REGISTRATION_ADD_PHONE_USER"


type InitializeStateType = typeof initializetionState
let initializetionState = {
    login:"",
    pass:"",
    family:"",
    name:"",
    phone:"",
    mail:""
    
}
type ActionType = RegistrationUserAcType | ReginstrationLoginUserAcType | ReginstrationPassUserAcType | ReginstrationFamilyUserAcType | ReginstrationNameUserAcType | ReginstrationMailUserAcType | ReginstrationPhoneUserAcType
export let RegistrationReducer = (state =initializetionState, action:ActionType ):InitializeStateType =>{
    switch(action.type){
        
        case REGISTRATION_ADD_USER_INFO     :   return {...state, login:action.login,pass:action.pass,family:action.family,name:action.name,phone:action.phone,mail:action.mail }
        case REGISTRATION_ADD_LOGIN_USER    :   return {...state, login:action.login}
        case REGISTRATION_ADD_PASS_USER     :   return {...state, pass:action.pass}
        case REGISTRATION_ADD_FAMILY_USER   :   return {...state, family:action.family}
        case REGISTRATION_ADD_NAME_USER     :   return {...state, name:action.name}
        case REGISTRATION_ADD_MAIL_USER     :   return {...state, mail:action.mail}
        case REGISTRATION_ADD_PHONE_USER    :   return {...state, name:action.phone}
        default: return state
    }
}
type RegistrationUserAcType={
    type: typeof REGISTRATION_ADD_USER_INFO
    login:string
    pass:string
    family:string
    name:string
    phone:string
    mail:string

}
let RegistrationUserAC=( login:string, pass:string, family:string,name:string, phone:string,
                         mail:string):RegistrationUserAcType=>({type:REGISTRATION_ADD_USER_INFO,login,pass,family,name,phone,mail})
type ReginstrationLoginUserAcType = {
    type:typeof REGISTRATION_ADD_LOGIN_USER
    login:string
}
type ReginstrationPassUserAcType = {
    type:typeof REGISTRATION_ADD_PASS_USER
    pass:string
}
type ReginstrationFamilyUserAcType = {
    type:typeof REGISTRATION_ADD_FAMILY_USER
    family:string
}
type ReginstrationNameUserAcType = {
    type:typeof REGISTRATION_ADD_NAME_USER
    name:string
}
type ReginstrationMailUserAcType = {
    type:typeof REGISTRATION_ADD_MAIL_USER
    mail:string
}
type ReginstrationPhoneUserAcType = {
    type:typeof REGISTRATION_ADD_PHONE_USER
    phone:string
}
export let  ReginstrationLoginUserAC = (login:string):ReginstrationLoginUserAcType => ({type:REGISTRATION_ADD_LOGIN_USER,login})                         
export let  ReginstrationPassUserAC = (pass:string):ReginstrationPassUserAcType => ({type:REGISTRATION_ADD_PASS_USER,pass})                         
export let  ReginstrationFamilyUserAC = (family:string):ReginstrationFamilyUserAcType => ({type:REGISTRATION_ADD_FAMILY_USER,family})                         
export let  ReginstrationNameUserAC = (name:string):ReginstrationNameUserAcType => ({type:REGISTRATION_ADD_NAME_USER,name})                         
export let  ReginstrationMailUserAC = (mail:string):ReginstrationMailUserAcType => ({type:REGISTRATION_ADD_MAIL_USER,mail})                         
export let  ReginstrationPhoneUserAC = (phone:string):ReginstrationPhoneUserAcType => ({type:REGISTRATION_ADD_PHONE_USER,phone})                         

type ThuncType = ThunkAction<Promise<void>,AppStateType,unknown,ActionType>
export let ReginstrationUserThunk =( login:string,
    pass:string,
    family:string,
    name:string,
    phone:string,
    mail:string):ThuncType => async (dispatch)=>{
        let response = await ApiAuthData.Registration(name,family,login,pass,mail);
        console.log(response)
       

}

