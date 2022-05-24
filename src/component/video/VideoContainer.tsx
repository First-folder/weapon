import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { AppStateType } from "../../redux/reducer_store";
import { getVideoAddVideoClipSelector } from "../../redux/Selectors";
import { AddVideoClipThunk, videoClipType } from "../../redux/video";
import BreadCrumbsContainer from "../breadCrumbs/BreadCrumbsContainer";
import Player from "./Player";
import Video from "./Video";
import s from "./video.module.css"
type VideoContainerType = {
    VideoClipLoad:()=>void
    videoClip:Array<videoClipType>
}
class VideoContainer extends React.Component<VideoContainerType>{
    componentDidMount(){
       if(this.props.videoClip.length == 0) this.props.VideoClipLoad()
    }
    state = {
        selectVideo:null
    }
    EditSelectVideo = (id:number)=>{
        this.setState({selectVideo:id})
    }
    render(){
        return(
            <div className={s.wrapper_video}> 
           

            { this.props.videoClip.length > 0 ?  this.props.videoClip.map(p=>{
                    return <Video item = {p} EditSelectVideo={this.EditSelectVideo}/>  
                    }) : <div>no clip</div>}
                    <Route path={'/video/player/:id?'} >  {this.props.videoClip.map(p=>{
                                                                if(this.state.selectVideo == p.id) return <Player link={p.link}/> 
                                                            })}       </Route>
              
            </div>
                    
        )
    }
}
let mapStatetoProps=(state:AppStateType)=>({
    videoClip:getVideoAddVideoClipSelector(state)
})

export default connect(mapStatetoProps,{
                                        VideoClipLoad:AddVideoClipThunk
                                        })(VideoContainer)