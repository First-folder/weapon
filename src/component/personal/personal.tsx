import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { NavLink } from "react-router-dom"
import BreadCrumbsContainer from "../breadCrumbs/BreadCrumbsContainer"
import s from "./personal.module.css"
type PersonalTyle={

}
let Personal:React.FC<PersonalTyle>=()=>{
    return(
        <div className={s.wrapper}>           
            <h1>Личный кабинет пользователя</h1>
            <div className={s.wrapper_item}>
               <NavLink to={'/work'} className={s.item}> <FontAwesomeIcon icon={['fas','calculator']}/> <small>Текущие заказы</small></NavLink>
               <NavLink to={'/personal/profile'} className={s.item}> <FontAwesomeIcon icon={['fas','user-secret']}/> <small>Личный кабинет</small></NavLink>
               <NavLink to={'/personal/profile/cart'} className={s.item}> <FontAwesomeIcon icon={['fas','cart-arrow-down']}/> <small>Корзина</small></NavLink>
                        
               
            </div>


        </div>
    )
}
export default Personal