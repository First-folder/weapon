import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { addPhotoGalleryThunk, getPhotosAlbumItemsThunk, PhotoGalleryType } from "../../../../redux/company";

import { AppStateType } from "../../../../redux/reducer_store"
import { getCompanyPhotosAlbumsSelector, getPromoAll } from "../../../../redux/Selectors";
import s from "./albumPhotoItems.module.css"
type PhotoItemsType = {
    path:string
}
let PhotoItems:React.FC<PhotoItemsType> =(props)=>{
    return(
        <div className={s.items}> <img src={props.path}/></div>
    )
}
let AlbumItems:React.FC<PhotoGalleryType> = (props)=>{
  
    return(
      <div> 
          <h1> {props.nameAlbum}</h1>
                <div className={s.wrapper}>
                        {props.items.map(p=> <PhotoItems path={p.link}/>)}
                </div>
         
      </div>
    )

    
}

type CompanyAlbumContainerType={
    match:any
    location:any
    history:any 
    getAlbumItems:(albumId:string)=>void 
    PhotoAlbums:Array<PhotoGalleryType>
}
class CompanyAlbumContainer extends React.Component<CompanyAlbumContainerType>{
    componentDidMount(){
        console.log("CompanyAlbumContainer");
        console.log(this.props.match.params.id);

        console.log("photoAlbums");
        console.log(this.props.PhotoAlbums);

        console.log("typeof")
        console.log(typeof(this.props.PhotoAlbums))
        if(this.props.PhotoAlbums != undefined){
            console.log("componentDidMount_CompanyAlbumContainer_IF")
           this.props.PhotoAlbums.forEach( p=>{if((p.id == this.props.match.params.id)&&(!p.items.length))this.props.getAlbumItems(p.nameAlbum)} );

        }
       // this.props.getAlbumItems(this.props.match.params.id)

    }
    componentDidUpdate(propsPrev:any,props:any){
        if (propsPrev != this.props){
            console.log("componentDidUpdate")
           // if(this.props.PhotoAlbums != undefined){ this.props.PhotoAlbums.forEach( p=>{if(p.id == this.props.match.params.id)this.props.getAlbumItems(p.nameAlbum)} )
       debugger
           // }
    }
    
}



    render(){
       
        return(
            <div>
               
             {/*   {this.placeItems}
             */}
              
             {this.props.PhotoAlbums.map(p=> p.id == this.props.match.params.id &&  <AlbumItems id={p.id} items={p.items} link={p.link} nameAlbum={p.nameAlbum} /> )}
             
            </div>
        )
    }
}


let mapStateToProps=(state:AppStateType)=>({
    PhotoAlbums:getCompanyPhotosAlbumsSelector(state)
    
  
})

export default  compose(connect(mapStateToProps,{getAlbumItems:getPhotosAlbumItemsThunk}),withRouter)(CompanyAlbumContainer);
