import { async } from "q";
import React from "react"
import { ThunkAction } from "redux-thunk";
import { ApiWorkShopData } from "../dal/api";
import { AppStateType } from "./reducer_store";


const WORKSHOP_ADD_SERVICE = 'WORKSHOP_ADD_SERVICE';
export type serviceType={
    id:number       | null
    service:string  | null
    price:number    | null
}
let initializeState = {
    service:[] as Array<serviceType>

}
type ActionType = ServiceAcType
type InitializeStateType = typeof initializeState
export let WorkshopReducer = (state = initializeState,action:ActionType):InitializeStateType=>{
    switch(action.type){
        
        case WORKSHOP_ADD_SERVICE : 
        return  {...state, service:action.service}
        default: return state 
    }
}
type ServiceAcType = {
    type: typeof WORKSHOP_ADD_SERVICE
    service : Array<serviceType>
}
let ServiceAC=(service: Array<serviceType>):ServiceAcType=>({type:WORKSHOP_ADD_SERVICE,service});
type ThunkType = ThunkAction<Promise<void>,AppStateType,unknown,ActionType>
export let ServiceAddThunk =():ThunkType => async (dispatch)=>{
    let response = await ApiWorkShopData.getServiceAll()
   // debugger
    console.log(response);
    dispatch(ServiceAC(response));


}
export let TestCookie=():ThunkType => async(dispatch)=>{
    let response = await ApiWorkShopData.getTestCookie()
    console.log(response);
}
