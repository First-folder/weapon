import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { getCatalogSectionsThunk, SectionsType } from '../../redux/catalog';
import { addPhotoGalleryThunk, ArticleDataType, ArticlesContentType, getArticlesThunksAC, getPhotosAlbumItemsThunk, NewsDataType, PhotoGalleryType } from '../../redux/company';
import { AppStateType } from '../../redux/reducer_store';
import { getCatalogSectionsAllSelector, getCompanyArticlesSelector, getCompanyNewsSelector, getCompanyPhotoComplexSelector } from '../../redux/Selectors';
import BreadCrumbsContainer from '../breadCrumbs/BreadCrumbsContainer';
import SliderContainer from '../slider/SliderContainer';
import ArticleContainer from './articles/ArticleContainer';
import ArticleItemContainer from './articles/ArticleItemContainer';
import CompanyCertificateContainer from './certificate/CompanyCertificateContainer';
import s from './company.module.css'
import CompanyNavigation from './companyNavbar';
import ReadComponent from './helpComponents/ReadComponent';
import CompanyNewsContainer from './news/CompanyNewsContainer';
import NewsItems from './news/NewsItems';
import CompanyPhotoContainer from './photo/CompanyPhotoContainer';
import Reviews from './reviews/reviews';
type ProductSectionPropsType={
    id:number |null
    name:string | null
    description:string | null
    photo : string | null
}
let ProductSection:React.FC<ProductSectionPropsType> = (props)=>{
    return(
        <NavLink to={"/catalog/section/"+props.id}>
            <div className={s.item_product}>
                <div className={s.wrapper_header}>
                    <div className={s.logo_product}> {props.photo != null? <img src={props.photo}/>:<img src={""}/> }</div>
                    <div className={s.name_product}><h4>{props.name}</h4></div>
                </div>   
                <div className={s.content_product}>{props.description}</div>
            </div>
        </NavLink>
    )
}

let HeaderArc:React.FC<HistoryAndHeaderArcPropsType> = (props)=>{
  
    return(<div>
            <h1>{props.topic}</h1>
           <p>{props.content}</p>  
           </div>
        
    )
}

type HistoryAndHeaderArcPropsType = {
    topic:string | null
    content:string | null
}
let HistoryArc:React.FC<HistoryAndHeaderArcPropsType>=(props)=>{
    return(
        <div className={s.itemhistory}>
            <h3>{props.topic}</h3>
            <p>{props.content}</p>
        </div>
    )    
}
type PhotoComplexType = {
    path:string
    nameAlbum: string
    id:number
}
let PhotoComplex:React.FC<PhotoComplexType> = (props)=>{
    return(
        <NavLink to = {"/company/"+props.id+"/"+props.nameAlbum+"/"+"slider"} className={s.photo_complex_item}>
           
                <img src={props.path}/>                
           
        </NavLink>
    )
}
type CompanyType = {
    changeNavigation:(value:boolean)=>void
    articles:Array<ArticleDataType> ,
    sections:Array<SectionsType>,
    photoComplex:Array<PhotoGalleryType>
}


let Company:React.FC<CompanyType> = (props)=>{
    useEffect(()=>{
        props.changeNavigation(true);
    },[])
    return( 
        <div className={s.wrapperContentCompany}>
           <div className={s.content}>
                        <div className={s.header}>
                           {props.articles.map(p=>{if(p.subsection == "header") return <ReadComponent content={p.content}/>                              
                           })}                                                                         
                                                                                        
                            </div>  
                            <div className={s.history}>
                            {props.articles.map(p=>{if(p.subsection == "history") return <ReadComponent content={p.content}/>                              
                           })}         
                            </div>               
                              
                            <div >
                                <h3>Ассортимент оружейного магазина</h3>
                                <p>Ассортимент оружейного магазина в Челябинске включает в себя свыше 10 тысяч видов товаров, среди которых представлена продукция различной тематики</p>
                            </div>
               
           </div>
                <div className={s.productSection}>
                    {props.sections.map(p => <ProductSection name={p.name} description={p.description} photo={p.link} id={p.id}/>)}
                </div>

                <div><h2>Наш стрелковый комплекс </h2></div>
                <div className={s.photo_complex}>
                    {props.photoComplex.length != 0 && props.photoComplex[2].items.map(p=><PhotoComplex path={p.link} id = {p.id} nameAlbum={"Стрелковый Комплекс"}/>)}

                </div>
                        
             </div>
    )

}
type CompanyContainerType = {
    PhotoGalleryLoad:()=>void
    SectionsLoad:()=>void
    ArticlesLoad:(section:string)=>void
    PhotoComplexLoad:(nameAlbum:string)=>void
    articles:Array<ArticleDataType> 
    sections:Array<SectionsType>
    photoComplex:Array<PhotoGalleryType>,
    news:Array<NewsDataType>
}

class CompanyContainer extends React.Component<CompanyContainerType>{
    constructor(props:any){
        super(props);
        this.changeNavigation = this.changeNavigation.bind(this);

    }
    componentDidMount(){        
        if(this.props.articles.length == 0)this.props.ArticlesLoad("article");
        if(this.props.sections.length == 0)this.props.SectionsLoad();
        if(this.props.photoComplex.length == 0){
            this.props.PhotoGalleryLoad();//Thunkзагрузка разделов фото галерее
            this.props.PhotoComplexLoad("Стрелковый комплекс")} // загрузка нужного раздела       
       
    }
   
    changeNavigation(value:boolean){
        this.setState({NavigationView:value})
    }
    state ={
        NavigationView:true
    }
    render(){
        return(
            <div className={s.wrapperAllComponents}>
               
            
                <div className={s.content_wrapper}>
                        {this.state.NavigationView && <CompanyNavigation/>}
                        <Route exact path=  {"/company/article"} render={()=><ArticleContainer changeNavigation={this.changeNavigation}/>} />
                        <Route path=        {"/company/article/content/:id?"} render={()=><ArticleItemContainer changeNavigation={this.changeNavigation} />} />
                        <Route exact path=  {"/company/"}                  render={()=><Company  changeNavigation={this.changeNavigation } sections={this.props.sections} articles={this.props.articles} photoComplex={this.props.photoComplex}/> }/>
                        <Route exact path=  {"/company/news" }            render={()=> <CompanyNewsContainer changeNavigation={this.changeNavigation}/>} />
                        <Route  path=       {"/company/news/article/:id?"} render={()=> <NewsItems  photoAlbums = {this.props.photoComplex} changeNavigation={this.changeNavigation} news={this.props.news}/>}/>
                        <Route  path=       {"/company/photo"}          render={()=><CompanyPhotoContainer/>}/>                    
                        <Route  path =      {"/company/certificate"}    render={()=> <CompanyCertificateContainer/>}/>
                        <Route exact path = {"/company/reviews"} render={()=> <Reviews/>}/>
                        
                        <Route exact path={"/company/:id?/:nameAlbum?/slider"} render={()=><SliderContainer/>}  />    
                </div>    
            </div>

        )
            
        
    }
}
let mapStateToProps=(state:AppStateType)=>({
    articles:getCompanyArticlesSelector(state),
    sections:getCatalogSectionsAllSelector(state),
    photoComplex:getCompanyPhotoComplexSelector(state),
    news:getCompanyNewsSelector(state)
}) ;

export default connect(mapStateToProps,{ArticlesLoad:getArticlesThunksAC,
                                        SectionsLoad:getCatalogSectionsThunk,
                                        PhotoComplexLoad:getPhotosAlbumItemsThunk,
                                        PhotoGalleryLoad:addPhotoGalleryThunk})(CompanyContainer);