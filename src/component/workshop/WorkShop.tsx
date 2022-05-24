import React from "react"
import WorkShopItem from "./WotrkShopItem"
import s from "./workshop.module.css"
import { serviceType } from "../../redux/workshop"
type WorkShopType = {
    service:Array<serviceType>
}
let WorkShop:React.FC<WorkShopType> = (props)=>{
    return(
        <div className={s.wrapper}>                
        <div className={s.item}>
            <div>Услуга</div>
            <div>Цена(руб.)</div>
        </div>
        {props.service.length > 0 && props.service.map(p=><WorkShopItem id={p.id} service={p.service} price={p.price}/>)}
        <div className={s.adress}>
            <p onClick={()=>{                       
               }}> Мастерская расположена <br/>
               г. Челябинск, пр. Победы, 125<br/>
                телефон 8(351)774-55-38<br/>
                режим работы <br/>
                ПН-ПТ с 9-00 до 17-00<br/>
                СБ-ВС Выходной
            </p>
        </div>
    </div>
    )
}
export default WorkShop