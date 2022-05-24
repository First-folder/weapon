import React from "react"
import { ContactType } from "../../redux/contact"
import ContactItem from "./ContactItem"
import MapContact from "./mapContact"
import s from "./contact.module.css"
type ContactsType={
    mapCurrentPosition:Array<number>
    contact:Array<ContactType>
    newMapLocation:(coordinates:Array<number>)=>void
}
let Contacts:React.FC<ContactsType> = (props)=>{
    return(
        <div className={s.firstwrapper}>                
            <div className={s.hunterMap} >
                <MapContact mapCurrentPosition={props.mapCurrentPosition} data={props.contact}/>                
            </div>
            {props.contact.length > 0 && props.contact.map(p=><ContactItem data={p} newMapLocation={props.newMapLocation} />)}
            <div className={s.item}></div>
   </div>

    )

}

export default Contacts