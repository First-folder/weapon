import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { render } from "@testing-library/react"
import React from "react"
import { NavLink } from "react-router-dom"
import s from "./cart.module.css"
type CartCleaTyper={

}
let CartClear:React.FC<CartCleaTyper> =(props)=>{
    return(
        <div className={s.wrapper}>
            <h1>Корзина</h1>
                <div className={s.content}>
                    <FontAwesomeIcon className={s.cartIcon} icon={['fas','shopping-cart']}/>
                    <h2>Ваша корзина пуста.</h2>
                    <p>Выберите в каталоге интересующий товар и нажмите в корзину</p>
                    <NavLink className={s.butCat} to={"/catalog"}> В каталог </NavLink>
                </div>

        </div>
    )
}
 export default CartClear;