import { ThunkAction } from "redux-thunk";
import { ApiContactData } from "../dal/api";
import { AppStateType } from "./reducer_store";
const CONTACT_CONTACT_ADD = "CONTACT_CONTACT_ADD";
 export type ContactType = {
    id:number,
    adress:string,
    workingDayHours:string,
    weekendHours:string,
    phone:string,
    email:string,
    link:string
    coordinates_map: Array<number>

}



type initializeStateType  = typeof initializeState
let initializeState = {
   contact:[]  as Array<ContactType>  
}
type ActionType = ContactAddACType
export let ContactReducer = (state = initializeState,action:ActionType):initializeStateType=>{
    switch(action.type){
        case CONTACT_CONTACT_ADD: return {...state, contact:action.contact

        }
        default : return state
    }

}
type ContactAddACType = {
    type:typeof CONTACT_CONTACT_ADD,
    contact:Array<ContactType>  
}
type ThunkType = ThunkAction<Promise<void>,AppStateType,unknown,ActionType>
let ContactAddAC = (contact:Array<ContactType>):ContactAddACType=>({type:CONTACT_CONTACT_ADD,contact});

export let ContactThunkAdd = ():ThunkType=>async (dispatch)=>{
        let response = await ApiContactData.getContactAll();
        dispatch(ContactAddAC(response))
        console.log(response);
}