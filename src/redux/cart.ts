import { ThunkAction } from "redux-thunk"
import { ApiCartData } from "../dal/api"
import { AppStateType } from "./reducer_store"

const  CART_CART_ADD_PRODUCT            =   "CART_CART_ADD_PRODUCT"
const CART_CART_DELETE_PRODUCT          =   "CART_CART_DELETE_PRODUCT"
const CART_CART_PLUS_COUNT_ITEM         =   "CART_CART_PLUS_COUNT_ITEM"
const CART_CART_MINUS_COUNT_ITEM         =  "CART_CART_MINUS_COUNT_ITEM"
const CART_CART_CLEAR                   =   "CART_CART_CLEAR"
const CART_CART_CHANGE_COUNT_PRODUCT    =   "CART_CART_CHANGE_COUNT_PRODUCT"
const CART_CART_ADD_PRODUCT_TEST        =   "CART_CART_ADD_PRODUCT_TEST"

export type CommentsItemsType = {
    author: string
    date:Date
    articles:string


}
type CartItemTest={
    id:number
    name:string
}
export type CartItem={
    id:number
    name:string
    description:string
    specification:string
    price:number
    manufacturer:string
    link:string
    count:number
    //comments:Array<CommentsItemsType>

}

type initializeStateType = typeof initializeState
let initializeState={
 cart:[] as Array<CartItem>,
 //cartOne: {} as CartItem
}
export let  CartReducer = (state = initializeState,action:ActionType):initializeStateType=>{
    switch(action.type){        
        case CART_CART_ADD_PRODUCT:  return  {...state,  ...state.cart.find(p=> p.id == action.item.id) ? {
                                              //если найден аналогичный товар то увеличиваем count  
                                                  cart: [...state.cart.map(p=>{
                                                     if(p.id == action.item.id){ return (Object.assign({...p},{count:p.count+1}))}else{return p}
                                                  })]
                                              //  иначе добавляем в корзину                                                   
                                                  }:{cart:[...state.cart,action.item]}}
        case CART_CART_DELETE_PRODUCT:       
        return{...state, cart: [...state.cart.filter( p=> p.id != action.id)]}

        case CART_CART_PLUS_COUNT_ITEM:         
        return {...state, cart:[...state.cart.map(p=>{if(p.id == action.id){let copyP={...p};copyP.count++; return copyP}else return p})]}

        case CART_CART_MINUS_COUNT_ITEM:         
        return {...state, cart:[...state.cart.map(p=>{if(p.id == action.id){let copyP={...p};copyP.count--; return copyP}else return p})]}
        
        case CART_CART_CLEAR:
            return{...state,cart:[]}
        case CART_CART_ADD_PRODUCT_TEST: return {...state, cart:[...state.cart,action.item]}
                
        default : return state 
    }

}
type ActionType = cartAddItemInCartType | cartAddItemInCartTESTType | cartDeleteItemAcType | cartPlusItemAcType | cartMinusItemAcType | cartClearCartACType
type cartAddItemInCartType={
    type:typeof CART_CART_ADD_PRODUCT
    item:CartItem
}
type cartAddItemInCartTESTType={
    type:typeof CART_CART_ADD_PRODUCT_TEST
    item: CartItem
}

type cartDeleteItemAcType = {
    type : typeof CART_CART_DELETE_PRODUCT
    id:number
}
type cartPlusItemAcType = {
    type : typeof CART_CART_PLUS_COUNT_ITEM
    id:number
}
type cartMinusItemAcType = {
    type : typeof CART_CART_MINUS_COUNT_ITEM
    id:number
}
type cartClearCartACType = {
    type: typeof CART_CART_CLEAR    
}
let cartClearCartAc     =():cartClearCartACType=>({type:CART_CART_CLEAR})
let cartMinusItemCartAc =(id:number):cartMinusItemAcType =>({type:CART_CART_MINUS_COUNT_ITEM,id})
let cartPlusItemCartAc  = (id:number):cartPlusItemAcType =>({type:CART_CART_PLUS_COUNT_ITEM,id})
let cartDeleteItemAC    = (id:number):cartDeleteItemAcType=>({type:CART_CART_DELETE_PRODUCT,id})
export let cartAddItemInCartTESTAC = (item:CartItem):cartAddItemInCartTESTType=>({type:CART_CART_ADD_PRODUCT_TEST,item})
export let cartAddItemInCartAC = (item:CartItem):cartAddItemInCartType=>({type:CART_CART_ADD_PRODUCT,item})

type ThunkType = ThunkAction<Promise<void>,AppStateType,unknown,ActionType>

export let cartAddItemInCartThunk = (item:CartItem):ThunkType=> async(dispatch)=>{   
    dispatch(cartAddItemInCartAC(item))
}
export let cartDeleteItemCartThunk = (id:number):ThunkType => async (dispatch)=>{
    let response = await ApiCartData.DeleteItem(id)  
    if (response.result) dispatch(cartDeleteItemAC(id))
    console.log(response);
}
export let addCountItemCartThunk = (id:number):ThunkType=> async (dispatch)=>{
    let response = await ApiCartData.PlusCountItem(id)
    if(response.result) dispatch(cartPlusItemCartAc(id))
    console.log(response)
}
export let minusCountItemThunk = (id:number):ThunkType => async(dispatch)=>{
    let response  = await ApiCartData.MinusCountItem(id)
    if(response.result) dispatch(cartMinusItemCartAc(id))
    console.log(response)
}
export let cartClearCartThunk = ():ThunkType=> async (dispatch)=>{
    let response = await ApiCartData.ClearCart()
    if(response.result) dispatch(cartClearCartAc())
}