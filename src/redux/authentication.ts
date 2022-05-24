import { getRegistrationLoginSelector } from './Selectors';
import { PhotoNewsType } from './company';
import { AppStateType } from './reducer_store';
import { ThunkAction } from "redux-thunk"
import { ApiAuthData } from '../dal/api';
import { StringMappingType } from 'typescript';

const AUTHENTICATION_AUTH_TRUE = "AUTHENTICATION_AUTH_TRUE"
const AUTHENTICATION_AUTH_FALSE = "AUTHENTICATION_AUTH_FALSE"
const AUTHENTICATION_AUTH_CHANGE_AUTH_DATA = "AUTHENTICATION_AUTH_CHANGE_AUTH_DATA"
const AUTHENTICATION_LOGOUT_DATA = "AUTHENTICATION_LOGOUT_DATA"

type InitializeStateType ={
    auth    : boolean
    name    : string | null
    family  : string | null
    phone   : string | null
    mail    : string | null
    login   : string | null

}


//type InitializeStateType = typeof initializeState
let initializeState = {
    auth : false,
    name    : null,
    family  : null,
    phone   : null,
    mail    : null,
    login   : null,
    
    
}

export let AuthReducer = (state = initializeState, action:ActionType ):InitializeStateType=>{
    switch(action.type){
        case AUTHENTICATION_AUTH_TRUE: return {...state}
        case AUTHENTICATION_AUTH_CHANGE_AUTH_DATA: return {...state, name:action.name, family: action.family , auth:true,phone:action.phone,mail:action.mail,login:action.login}
        case AUTHENTICATION_LOGOUT_DATA: return {...state, name:action.name, family: action.family , auth:false,phone:action.phone,mail:action.mail,login:action.login}
        default : return state 
    }

}
type ActionType =  ChangeStatusAuth | AuthenticationAcType | LogOutAcType
type ChangeStatusAuth = {
    type : typeof AUTHENTICATION_AUTH_TRUE
    auth:boolean
}
type AuthenticationAcType = {
    type:typeof AUTHENTICATION_AUTH_CHANGE_AUTH_DATA
    family:string | null
    name:string     | null 
    mail:string  | null
    phone:string | null
    login:string | null
}
type LogOutAcType = {
    type:typeof AUTHENTICATION_LOGOUT_DATA
    family:string 
    name:string 
    mail:string
    phone:string
    login:string | null
    auth:boolean
}

let authenticationAC = (name:string,family:string,mail:string,phone:string,login:string):AuthenticationAcType=>({type:AUTHENTICATION_AUTH_CHANGE_AUTH_DATA,family,name,mail,phone,login})
let logOutAC = (name:string,family:string,mail:string,phone:string,login:string,auth:boolean):LogOutAcType=>({type:AUTHENTICATION_LOGOUT_DATA,family,name,mail,phone,login,auth})
type ThunkType = ThunkAction<Promise<void>,AppStateType,unknown,ActionType>

export let AuthThunk =(login:string,pass:string):ThunkType => async (dispatch)=>{
    let response = await  ApiAuthData.Auth(login,pass)
    if(response.auth){      
        dispatch(authenticationAC(response.name,response.family,response.mail,response.phone,response.login))
    }
    console.log(response)
}
export let StatusAuthThunk = ():ThunkType => async (dispatch)=>{
    let response = await ApiAuthData.AuthStatus()
   
   if(response.auth)  dispatch(authenticationAC(response.name,response.family,response.mail,response.phone,response.login))
}

export let AuthenticationLogoutThunk=():ThunkType=> async (dispatch)=>{
    let response =await ApiAuthData.Logout()
   
    if (response.result){ 
        debugger  
        dispatch(logOutAC(response.name,response.family,response.mail,response.phone,response.login,false))
      }
   
  
}