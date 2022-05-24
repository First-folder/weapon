import React from "react"
import { serviceType, weaponType } from "../../redux/complex"
import s from "./complex.module.css"
type TableItemType={
    item:serviceType
    weapon:weaponType | null
}
let TableItem:React.FC<TableItemType> = (props)=>{
    return(
        <div className={s.content_wrapper}>
            <div>
                <div className={s.name_service}>{props.item.name_weapon}</div>
                {props.item.service.map(p=>{return <div className={s.item_wrapper}>
                                                        <div>{p.name_service}</div>  
                                                        <div>{p.price} руб.</div>  
                                                    </div>})}
            </div>
            <div className={s.picture} ><img className={s.picture_weapon} src={props.weapon?.link}/></div>                                        
        </div>
    )
}
type TableServiceType={
    service:Array<serviceType>
    weapons:Array<weaponType>
}
let TableService:React.FC<TableServiceType> = (props)=>{
    return(
        <div className={s.table_wrapper}>
        <div className={s.header_wrapper}>
            <div>Название пакета</div>
            <div>Стоимость</div>
        </div>
            {props.service.map(p=>{
                let tempWeapon=null
                    props.weapons.map(pI=>{
                       
                        if (p.name_weapon == pI.name) tempWeapon = pI 
                                            })
                         return <TableItem item={p} weapon={tempWeapon}/>               
                                        }
                    )}
                   
        </div>
    )
}
export default TableService