// import {AuthApi} from "../dal/api";
// import {getMeeThunkAC} from "./auth_Reducer";

const  INICIALIZED = "INICIALIZED";
export type InitialStateType = {
    initialized:boolean
}
let initialState:InitialStateType ={
    initialized:false
}
export let appReducer =(state = initialState,action:any):InitialStateType=>{
    switch (action.type) {
        case INICIALIZED:

            return{
                ...state, initialized:true
            }
        default: return state
    }
}
type InitializedAcActionType = {
    type: typeof INICIALIZED
}
let initializedAC = ():InitializedAcActionType=>({type:INICIALIZED});

export let initializedThuncAC=()=>(dispatch:any)=>{
    dispatch(initializedAC())
  // let promise = dispatch(getMeeThunkAC());
   // promise.then(()=>{
    //   dispatch(initializedAC())
   //}
  // )

    // Promise.all([promise]).then(()=>{dispatch(initializedAC())})
// debugger
    // dispatch(initializedAC())
}