import { AppStateType } from './reducer_store';
import { ThunkAction } from "redux-thunk"
import { ArticleDataType } from "./company"
import { ApiDeliveryData } from '../dal/api';

const DELIVERY_ADD_DELIVERY_ARTICLE = "DELIVERY_ADD_DELIVERY_ARTICLE"
let initializeState = {
    article:[] as Array<ArticleDataType>
}
type ActionType = DeliveryAddArticleAcType
type initializeStateType = typeof initializeState

export let DeliveryReducer =(state = initializeState,action:ActionType):initializeStateType=>{
        switch(action.type){
            case DELIVERY_ADD_DELIVERY_ARTICLE: return {...state,article:action.article}
            default :return state
        }
}
type DeliveryAddArticleAcType = {
    type:typeof DELIVERY_ADD_DELIVERY_ARTICLE,
    article:Array<ArticleDataType>
}
let DeliveryAddArticleAC = (article:Array<ArticleDataType>):DeliveryAddArticleAcType=>({type:DELIVERY_ADD_DELIVERY_ARTICLE,article})
type ThunkType = ThunkAction<Promise<void>,AppStateType,unknown,ActionType>
export let DeliveryAddArticleThunk = (section:string):ThunkType =>async (dispatch)=>{
    let response = await ApiDeliveryData.getDeliveryArticle(section)
    dispatch(DeliveryAddArticleAC(response))
 

}