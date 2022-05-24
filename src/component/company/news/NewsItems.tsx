import React, { useEffect, useState } from "react"
import { Route, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { isPropertySignature } from "typescript";
import { NewsDataType, PhotoGalleryType, PhotoNewsType } from "../../../redux/company";
import SliderContainer from "../../slider/SliderContainer";
import s from "./company.module.css"
type PhotoItemType = {
    item:PhotoNewsType
    articleId:number
}
let PhotoItem:React.FC<PhotoItemType>=(props)=>{
    return(
        <NavLink to={"/company/news/article/"+props.articleId+"/"+props.item.id+"/"+props.item.name_album+"/slider"}>
            <div className={s.photo_item}>
                <img src={props.item.link}/>
            </div>
        </NavLink>
    )
}
type  NewsItemType={
    news:NewsDataType | null    
    articleId:number
   
}
let NewsItem:React.FC<NewsItemType>=(props)=>{
    return(
        <div className={s.wrapper_news_items}> 
            <div><h1>{props.news?.topic}</h1></div>
            <div className={s.photo_front}><img src={props.news?.photo[0].link}/></div>
            <div><p>{props.news?.content}</p></div>
            <div className={s.photo_items}> {props.news?.photo.map((p,i,arr)=>{
                if(i != 0) return <PhotoItem articleId={props.articleId} item={p}/>
                }
           )}  </div>
            <Route path={"/company/news/article/:idd?/:id?/:nameAlbum?/slider"} render={()=><SliderContainer newsPhotos={props.news?.photo}/>}  />   
        </div>
    )
}

type NewsItemsType = {
    news:Array<NewsDataType> | null
    changeNavigation:(value:boolean)=>void
    photoAlbums:Array<PhotoGalleryType>
  
}
let NewsItems:React.FC<NewsItemsType> = (props)=>{
    let match = {} as any
        match = useRouteMatch();
    console.log(match);

    useEffect(()=>{
        props.changeNavigation(false);
       
    },[])
    useEffect(()=>{
      //  debugger
       if(match.path != "/company/news/article/:id?"){props.changeNavigation(true)}
    });
  
    return(
        <div>
            {props.news != null && props.news.map(p=>{
               if(p.id == match.params.id){
                         return <NewsItem  articleId= {match.params.id} news={p}/>
               }
            })} 
                    
        </div>
    )
}
export default NewsItems 