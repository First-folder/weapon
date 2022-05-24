import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { NavLink } from "react-router-dom"
import { CartItem } from "../../redux/cart"
import { moneyFormat } from "../../redux/secondary_function"
import s from "./cart.module.css"
import CartClear from "./cartClear"
import ItemCart from "./CartItem"

type CartType={
    cart:                   Array<CartItem>
    DeleteItemCart:         (id:number)=>void
    PlusCountItem:          (id:number)=>void
    MinusCountItemProduct:  (id:number,count:number)=>void
    ClearCart:              ()=>void
}
let Cart:React.FC<CartType> = (props)=>{
    return(
        <div>
               
                {props.cart.length?<div>
                    <div className={s.item}>
                        <div className={s.photoItem}></div>
                        <div className={s.nameItem}>Наименование</div>
                        <div className={s.countItem}>Кол-во</div>
                        <div className={s.priceItem}>Стоимость</div>
                        <div className={s.priceItem}>Итого</div>                       
                        <div className={s.deleteItem}>  </div>          
                    </div>   

                {props.cart.map(p=>{return <ItemCart DeleteItemCart={props.DeleteItemCart} PlusCountItem={props.PlusCountItem} MinusCountItemProduct={props.MinusCountItemProduct}  item={p}/>})}
               
                <div className={s.wrapperOrderShopping}>
                    <div className={s.butClear+" "+s.go_shopping} onClick={()=>{props.ClearCart()}}> <FontAwesomeIcon className={s.iconTimes} icon={['fas','times']}/> Очистить</div>
                    <div className={s.summa}>Итого: {moneyFormat(props.cart.reduce((sum,p) => sum + (p.price*p.count),0))} руб.</div>
                </div>
                <div className={s.wrapperOrderShopping}>
                    <NavLink to={"/catalog"} className={s.go_shopping}> Продолжить покупки </NavLink>
                    <NavLink to={"/catalog"} className={s.place_order}> Оформить заказ </NavLink>
                </div>

             </div>   
                :<CartClear/> }

            </div>
    )
}

export default Cart