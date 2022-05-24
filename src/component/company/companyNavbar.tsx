import React from "react"
import { NavLink } from "react-router-dom"
import s from "./company.module.css"
type propsType = {

}

 let CompanyNavigation:React.FC<propsType> = (props)=>{
    return(
       <div className={s.menu}>
        <ul>
            <li> <NavLink to={"/company/article"} activeClassName={s.activenav}> Статьи </NavLink> </li>
            <li><NavLink to={"/company/reviews"} activeClassName={s.activenav} > Отзывы     </NavLink></li>
            <li> <NavLink to={"/company/certificate"} activeClassName={s.activenav}>  Сертификаты </NavLink> </li>
            <li> <NavLink to ={"/company/photo"} activeClassName={s.activenav}>  Фотогалерея </NavLink> </li>
            <li> <NavLink to ={"/company/news"}  activeClassName={s.activenav}>    Новости  </NavLink></li>
        </ul>
    </div>
    )
}
export default CompanyNavigation;
