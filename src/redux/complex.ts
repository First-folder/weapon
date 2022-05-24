import { AppStateType } from './reducer_store';
import { ThunkAction } from "redux-thunk";
import { ArticleDataType } from "./company";
import { ApiComplexData } from '../dal/api';

const COMPLEX_ADD_ARTICLE_COMPLEX = "COMPLEX_ADD_ARTICLE_COMPLEX";
const COMPLEX_ADD_SERVICE_COMPLEX = "COMPLEX_ADD_SERVICE_COMPLEX"
const COMPLEX_ADD_WEAPONS_COMPLEX =  "COMPLEX_ADD_WEAPONS_COMPLEX"
type serviceItemType={
    id:number
    name_service:string
    price:number
}
export  type serviceType = {
    name_weapon:string,
    service: Array<serviceItemType>
}
export type weaponType = {
    id:number,
    name:string,
    link:string
}
let initislizeState = {
    "articles": [] as Array<ArticleDataType>,
    "service" : [] as Array<serviceType>,
    "weapons" : [] as Array<weaponType>
}

type initislizeStateType = typeof initislizeState
type ActionType = articleComplexAddAcType | serviceComplexAddAcType | ComplexWeaponAddAcType
export let ComplexReducer = (state = initislizeState,action:ActionType):initislizeStateType=>{
    switch(action.type){
        case COMPLEX_ADD_ARTICLE_COMPLEX: return {...state, articles:action.articles}
        case COMPLEX_ADD_SERVICE_COMPLEX:return {...state, service:action.service}
        case COMPLEX_ADD_WEAPONS_COMPLEX :return {...state,weapons:action.weapons}
        default: return state
    }
}
type articleComplexAddAcType = {
    type: typeof COMPLEX_ADD_ARTICLE_COMPLEX
    articles:Array<ArticleDataType>
}

let articleComplexAddAC = (articles:Array<ArticleDataType>):articleComplexAddAcType=>({type:COMPLEX_ADD_ARTICLE_COMPLEX,articles})
type serviceComplexAddAcType = {
    type:typeof COMPLEX_ADD_SERVICE_COMPLEX
    service:Array<serviceType>
}
let serviceComplexAddAC = (service:Array<serviceType>):serviceComplexAddAcType=>({type:COMPLEX_ADD_SERVICE_COMPLEX,service})
type ThunkType = ThunkAction<Promise<void>,AppStateType,unknown,ActionType>
export let ComplexArticlesAddThunk= ():ThunkType => async(dispatch)=>{
    let response = await ApiComplexData.getComplexArticles()
    dispatch(articleComplexAddAC(response))
}
export let ComplexServiceAddThunk = ():ThunkType=> async (dispatch)=>{
    let response = await ApiComplexData.getComplexService()
    dispatch(serviceComplexAddAC(response))

}
type ComplexWeaponAddAcType = {
    type: typeof COMPLEX_ADD_WEAPONS_COMPLEX
    weapons:Array<weaponType>
}
let ComplexWeaponAddAC = (weapons:Array<weaponType>):ComplexWeaponAddAcType=>({type:COMPLEX_ADD_WEAPONS_COMPLEX,weapons})
export let ComplexWeaponAddThunk=():ThunkType=> async (dispatch)=>{
    let response = await ApiComplexData.getComplexWeapon()
    dispatch(ComplexWeaponAddAC(response));

}