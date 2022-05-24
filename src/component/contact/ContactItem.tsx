import React from "react"
import { ContactType } from "../../redux/contact"
import s from "./contact.module.css"
type ContactsType = {
data:ContactType
newMapLocation:(coordinates:Array<number>)=>void
}
let ContactItem:React.FC<ContactsType> =(props)=>{
    let EditCoordinatesMap=()=>{
       props.newMapLocation(props.data.coordinates_map)
    }
    return(
        <div className={s.wrapeprItem}>
            <div className={s.item}><img src={props.data.link}/></div>
            <div className={s.item}>
                <div className={s.adress}>Адрес</div>
                <div>{props.data.adress}</div>
            </div>
            <div className={s.item}>
                <div className={s.clock}>Часы работы </div>
                <div>{props.data.workingDayHours}</div>
                <div>{props.data.weekendHours}</div>
            </div>
            <div className={s.item}>
                <div className={s.contact}>Контакты</div>
                <div>Тел: {props.data.phone} </div>
                <div>email: {props.data.email}</div>                
            </div>
            <div className={s.item} onClick={EditCoordinatesMap} > Показать на карте</div>
        </div>
    )
}
export default ContactItem