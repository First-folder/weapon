import React from "react"
import { NavLink } from "react-router-dom"
import { currentHost } from "../../redux/reducer_store"
import s from "./video.module.css"
type PlayerType = {
  link:string  
}

let Player:React.FC<PlayerType> = (props)=>{
    return(
        <div className={s.wrapperPlayer}>
                <div className={s.substrate}>
                   
                </div>
                <div className={s.information}>
                <NavLink to={'/video'}>  <div className={s.close}>  </div> </NavLink>
                <video autoPlay className={s.player}>
                    <source src={props.link} type={'video/mp4'}/>
                </video>

                </div>
        </div>
    )
}
export default Player