import { AppStateType } from './reducer_store';
import { ThunkAction } from 'redux-thunk';
import { ApiVideoData } from '../dal/api';



const VIDEO_ADD_LIST_VIDEO = "VIDEO_ADD_LIST_VIDEO"

export type videoClipType = {
    id:number
    link:string
    name_clip:string
    title:string
    banner_link:string
}
let initializeState = {
    videoClip:[] as Array<videoClipType>
}
type ActionType = addVideoClipAcType
type initializeStateType = typeof initializeState
export let VideoReducer = (state=initializeState,action:ActionType):initializeStateType=>{
        switch(action.type){
            case VIDEO_ADD_LIST_VIDEO: return {...state, videoClip:action.videoClip}
            default: return state
        }
}
type addVideoClipAcType = {
    type: typeof VIDEO_ADD_LIST_VIDEO
    videoClip:Array<videoClipType>
}
let addVideoClipAC = (videoClip:Array<videoClipType>):addVideoClipAcType=>({type:VIDEO_ADD_LIST_VIDEO,videoClip})

type ThunkType = ThunkAction<Promise<void>,AppStateType,unknown,ActionType>
export let AddVideoClipThunk = ():ThunkType => async (dispatch)=>{
    let result = await ApiVideoData.getVideoClip()
    dispatch(addVideoClipAC(result))
   
}