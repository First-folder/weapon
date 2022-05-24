import React from "react"
import { serviceType } from "../../redux/workshop"
import s from "./workshop.module.css"


let WorkShopItem:React.FC<serviceType> = (props)=>{
    return(
        <div className={s.item}>
            <div>{props.service}</div>
            <div>{props.price}</div>
        </div>
    )
}
export default WorkShopItem