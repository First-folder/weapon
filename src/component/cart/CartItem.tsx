import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { CartItem } from "../../redux/cart"
import { moneyFormat } from "../../redux/secondary_function"
import s from "./cart.module.css"
type ItemCartType ={
    item:CartItem
    DeleteItemCart:(id:number)=>void
    PlusCountItem:(id:number)=>void
    MinusCountItemProduct:(id:number,count:number)=>void
}

let ItemCart:React.FC<ItemCartType> = (props)=>{
    
    return(
        <div className={s.item}>
            <div className={s.photoItem} style={{backgroundImage:"url("+props.item.link+")"}}> <img src={props.item.link}/></div>
            <div className={s.nameItem}>{props.item.name}</div>
            <div className={s.countItem}><div className={s.countBut} onClick={()=>{props.MinusCountItemProduct(props.item.id,props.item.count)}}><FontAwesomeIcon icon={['fas','minus']}/></div>{props.item.count}<div className={s.countBut} onClick={()=>{props.PlusCountItem(props.item.id)}}><FontAwesomeIcon icon={['fas','plus']}/></div></div>
            <div className={s.priceItem}>{moneyFormat(props.item.price)}</div>
            <div className={s.priceItem}> {moneyFormat(props.item.price * props.item.count)}</div>
            <div className={s.deleteItem} onClick={()=>{props.DeleteItemCart(props.item.id)}}> <FontAwesomeIcon icon={['fas','times']}/></div>            
        </div>
    )
}
export default ItemCart