import React from "react"
import { currentHost } from "../../redux/reducer_store"
import { videoClipType } from "../../redux/video"
import s from "./video.module.css"
import defaultImg from "../../img/defult.jpg"
import { url } from "node:inspector"
import { NavLink } from "react-router-dom"

type VideoType = {
    item:videoClipType
    EditSelectVideo:(id:number)=>void
}

let Video:React.FC<VideoType>=(props)=>{   
    
   
    return( <NavLink to={'/video/player/'+props.item.id } className={s.item} onClick={()=>{
                                                                            props.EditSelectVideo(props.item.id)}}>
                    <div  style={props.item.banner_link !=null ? 
                        {backgroundImage:'url('+ currentHost + props.item.banner_link+')'}:
                        {backgroundImage:'url('+ defaultImg+')' }} >
                            
                          

                   </div>
                   <h4 className={s.title}> {props.item.name_clip}  </h4>
             </NavLink>
        
    )
}
export default Video