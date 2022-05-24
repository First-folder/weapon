import React from "react"
import { connect } from "react-redux"
import { Route } from "react-router"
import { getNewsThunk, NewsDataType, PhotoGalleryType } from "../../../redux/company"
import { AppStateType } from "../../../redux/reducer_store"
import { getCompanyNewsSelector, getCompanyPhotosAlbumsSelector } from "../../../redux/Selectors"
import SliderContainer from "../../slider/SliderContainer"
import CompanyNews from "./CompanyNews"
import NewsItems from "./NewsItems"

type CompanyNewsContainerType = {
    NewsLoad:()=>void
    news:Array<NewsDataType>
    photoAlbums:Array<PhotoGalleryType>
    changeNavigation:(value:boolean)=>void
}
class CompanyNewsContainer extends React.Component<CompanyNewsContainerType>{
    componentDidMount(){
        if(this.props.news.length ==0) this.props.NewsLoad();
        this.props.changeNavigation(true);
    }
    render(){
        return(<div> 
                       {this.props.news.map(p=><CompanyNews news={p}/> )} 
                     
           
               </div>
        
                )
    }
}
let mapStateToProps = (state:AppStateType)=>({
    news:getCompanyNewsSelector(state),
    photoAlbums:getCompanyPhotosAlbumsSelector(state)
})
export default connect(mapStateToProps,{NewsLoad:getNewsThunk})(CompanyNewsContainer)