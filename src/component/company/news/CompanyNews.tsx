import React from "react"
import { NavLink, useRouteMatch } from "react-router-dom"
import { NewsDataType } from "../../../redux/company"
import s from "./company.module.css"
type CompanyNewsType = {
    news:NewsDataType
}
 let CompanyNews:React.FC<CompanyNewsType> = (props)=>{
   
    return(
        <NavLink to={"/company/news/article/"+props.news.id} >
                    <div className={s.wrapper_news}>           
                            <img src={props.news.photo[0].link}/>
                            <div className={s.topic}>{props.news.topic}</div>      
                    </div>
        </NavLink>
    )
}

export  default CompanyNews