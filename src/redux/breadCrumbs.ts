import { ThunkAction } from "redux-thunk";
import React from "react"
import { AppStateType } from "./reducer_store";
import { useDispatch } from "react-redux";
const LOCATION_ADD_PATH = "LOCATION_ADD_PATH";
type initializeStateType = typeof initializeState;
export type LocationType = {
    path : string,
    name: string,
    my_location_changes:boolean

   
}
let initializeState = {
    my_location: [{path:"/catalog",name:"Каталог товаров12"}] as Array<LocationType>,
    my_location_changes:false

}
type ActionType = AddLocationPathACtype
export let LocationReducer = (state = initializeState,action:ActionType):initializeStateType=>{
    switch (action.type){    
        case LOCATION_ADD_PATH:
         //  debugger
            return {...state, my_location:action.newMyLocation}
        default : return state 
    }
}
type AddLocationPathACtype = {
    newMyLocation:Array<LocationType>,
    type :typeof LOCATION_ADD_PATH
}

type ThunkType = ThunkAction<Promise<void>,AppStateType,unknown,ActionType> 
 let AddLocationPathAC=(newMyLocation:Array<LocationType>):AddLocationPathACtype=>({type:LOCATION_ADD_PATH,newMyLocation})
 export let addLocationCrumbsThunk = (data:Array<LocationType>)=>(dispatch:any)=>{
   //debugger
 //   console.log("addLocationCrumbsThunk");
    dispatch(AddLocationPathAC(data));
 }

 