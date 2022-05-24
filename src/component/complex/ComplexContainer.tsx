import React, { createRef } from "react";
import { connect } from "react-redux";
import { addPhotoGalleryThunk, ArticleDataType, getPhotosAlbumItemsThunk, PhotoGalleryType } from "../../redux/company";
import { ComplexArticlesAddThunk, ComplexServiceAddThunk, ComplexWeaponAddThunk, serviceType, weaponType } from "../../redux/complex";
import { AppStateType, currentHost } from "../../redux/reducer_store";
import { getCompanyPhotosAlbumsSelector, getComplexArticlesSelector, getComplexServiceSelector, getComplexWeaponsSelector } from "../../redux/Selectors";
import ReadComponent from "../company/helpComponents/ReadComponent";
import TableService from "./TableService";
import s from "./complex.module.css"
import PhotosComplex from "./photosComplex";
import { Route } from "react-router";
import SliderContainer from "../slider/SliderContainer";
import { NavLink } from "react-router-dom";
import BreadCrumbsContainer from "../breadCrumbs/BreadCrumbsContainer";


type ComplexContainerType = {
    ArticlesLoad:()=>void,
    ServiceLoad:()=>void,
    WeaponsLoad:()=>void,
    photoGalleryLoad:()=>void,
    AlbumItemsLoad:(albumName:string)=>void,
    articles:Array<ArticleDataType>,
    service:Array<serviceType>,
    weapons:Array<weaponType>
    photoGalleryAlbums:Array<PhotoGalleryType>
   
}
class ComplexContainer extends React.Component<ComplexContainerType>{
    
    componentDidMount(){
        if(this.props.photoGalleryAlbums.length == 0) this.props.photoGalleryLoad()
        this.props.ArticlesLoad()
        this.props.ServiceLoad()
        this.props.WeaponsLoad()     
    }
    componentDidUpdate(prevProps:ComplexContainerType){
        if(prevProps.photoGalleryAlbums.length != this.props.photoGalleryAlbums.length){
            this.props.AlbumItemsLoad("Стрелковый Комплекс")
        }

    }  
   
  
    render(){
        
        return(
            <div className={s.wrapper}>
                
              { this.props.articles.length>0 &&  <div className={s.header_picture}><img src={currentHost+this.props.articles[0].frontlink}/></div>}
                {this.props.articles.length !=0 && <ReadComponent content={this.props.articles[0].content}/> }
               
                    <div className={s.part_one}> { this.props.service.length!=0 && <TableService service={this.props.service} weapons={this.props.weapons}/>} </div>
                    {this.props.photoGalleryAlbums.length >0 && this.props.photoGalleryAlbums.map(p=>{
                        if(p.nameAlbum =="Стрелковый Комплекс") return <PhotosComplex photos={p} />
                    })}
               
                {this.props.articles.length!=0 && <ReadComponent content={this.props.articles[1].content}/>}
                <Route path={'/complex/:id?/:nameAlbum?/slider'} component = {SliderContainer} />
            
               
                  
            </div>
        )          
        
    }
}
let mapStateToProps = (state:AppStateType)=>({
    articles:getComplexArticlesSelector(state),
    service:getComplexServiceSelector(state),
    weapons:getComplexWeaponsSelector(state),
    photoGalleryAlbums:getCompanyPhotosAlbumsSelector(state)
})
export default connect(mapStateToProps,{ArticlesLoad:ComplexArticlesAddThunk,
                                        ServiceLoad:ComplexServiceAddThunk,
                                        WeaponsLoad:ComplexWeaponAddThunk,
                                        photoGalleryLoad:addPhotoGalleryThunk,
                                        AlbumItemsLoad:getPhotosAlbumItemsThunk})(ComplexContainer)