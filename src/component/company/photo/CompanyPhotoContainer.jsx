import { render } from "@testing-library/react"
import React from "react"
import { connect } from "react-redux"
import { NavLink, Route, withRouter } from "react-router-dom"
import { compose } from "redux"
import {addPhotoGalleryThunk, PhotoGalleryType} from "../../../redux/company"
import { AppStateType } from "../../../redux/reducer_store"
import { getCompanyPhotosAlbumsSelector } from "../../../redux/Selectors"
import  CompanyAlbumContainer  from "./album/CompanyAlbumContainer"
import s from "./photo.module.css"

let CompanyPhotoAlbum= (props)=>{
    return(
       <NavLink to={"/company/photo/album/"+props.photoGalleryAlbum.id}>
            <div className={s.wrapper} >
                <img src={props.photoGalleryAlbum.link}/>
                <div className={s.buttom_album}>
                    <p>{props.photoGalleryAlbum.nameAlbum} </p> 
                </div>
            </div>
        </NavLink> 
    )
}

let CompanyPhoto = (props) =>{
    
    return(
        <div> 
            <h1> Фотогалерея </h1>
            <div className={s.content}>
                {props.photoGalleryAlbums.map(p=> <CompanyPhotoAlbum  photoGalleryAlbum={p}/>
                )}
            </div>
            
        </div>
    )
}

class CompanyPhotoContainer extends React.Component{
    componentDidMount(){
        if (!this.props.photoGalleryAlbums.length) this.props.photoGallery()
    }
    componentWillUnmount()
    {
        console.log("Вот и приехали ")
    }
    render(){
        return(
            <div className={s.wrapper_photo}>    
          
            <Route exact path={"/company/photo"} render ={()=> <CompanyPhoto photoGalleryAlbums = {this.props.photoGalleryAlbums}/> } />            
            <Route exact path={"/company/photo/album/:id?"} render={()=><CompanyAlbumContainer/>}/>
          
            
           </div>
           
        )
    }
}

let mapStateToProps=(state)=>({
    photoGalleryAlbums:getCompanyPhotosAlbumsSelector(state)
})
export default connect(mapStateToProps,{photoGallery:addPhotoGalleryThunk })(CompanyPhotoContainer)