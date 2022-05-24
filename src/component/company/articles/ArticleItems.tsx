import React from "react"
import { NavLink } from "react-router-dom"
import { ArticleDataType } from "../../../redux/company"
import s from "../company.module.css"

type ArticleItemsType={
item:ArticleDataType
}
let ArticleItems:React.FC<ArticleItemsType>=(props)=>{
    return(
        <NavLink to={"/company/article/content/"+props.item.id}>
                <div className={s.wrapper_artile_Item}>
                    <div> {props.item.link !=null && <img src={props.item.link}/>} </div>
                    <div>{props.item.topic !== null && <h3>{props.item.topic}</h3>}</div>
                </div>
        </NavLink>
    )
}
export default ArticleItems