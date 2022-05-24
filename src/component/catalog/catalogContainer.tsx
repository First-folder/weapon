import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { NavLink, Route, withRouter } from "react-router-dom"
import { compose } from "redux"
import { CommentsItemsType, getCatalogSectionsThunk, getCatalogSubSectionsAddItemsThunk, getCatalogSubSectionThunk, ItemsType, SectionsType , subSectionsType} from "../../redux/catalog"
import { AppStateType } from "../../redux/reducer_store"
import { getCatalogSectionsAllSelector, getMy_location_changes } from "../../redux/Selectors"
import s from "./catalog.module.css"
import { useHistory, useRouteMatch } from "react-router-dom";
import SubSection from "./subSection/subSection"
import ProductItemContainer from "./ProductItem/ProductItemContainer"
import path from "node:path"
import BreadCrumbsContainer from "../breadCrumbs/BreadCrumbsContainer"
import { breadcrumbs, createPathBreadCrumbs } from "../../redux/secondary_function"
import { addLocationCrumbsThunk, LocationType } from "../../redux/breadCrumbs"
type pathProductType = {
    params:{
        id:number | undefined | string
        namesection:string | undefined | number
    }
    
}
type ProductType={
    queryInsideID:(idSection:number)=>void
    seekItems:Array<ItemsType>
    queryData:any
    sections:Array<SectionsType>
    getAddItems:(nameSubSection:string)=>void
   
  
}
type ItemType = {
    id:number
    idSubSection:string
    idSection:number
    name:string
    description:string
    price:number
    manufacturer:string
    link:string
    comments:Array<CommentsItemsType>
}
let Item:React.FC<ItemType>=(props)=>{
    return(
       <NavLink  to={"/catalog/section/" + props.idSection+"/"+props.idSubSection+"/"+props.id+"/view"} >
        <div className={s.wrapperItem}>           
            <div className={s.photoItem}><img src={props.link}/></div>
            <div className={s.nameItem}>{props.name}</div>
            <div className={s.price}>{props.price} руб.</div>
        </div>
      </NavLink>
    )
}
let ProductItems:React.FC<ProductType>=(props)=>{
    let match = {} as any;
    match = useRouteMatch();
    let [stopQuerySubSection,setStopQuerySubSection]= useState(false);
    let [stoprQueryDATA,setstoprQueryDATA] = useState(false);
  
  useEffect(()=>{
      //reload page     
        if((props.sections.length>0)&&(props.seekItems.length == 0)){
                    console.log("print sections");
                    //проверка на загруженные данные subsection and section
                    if((stopQuerySubSection)&&(stoprQueryDATA)){ props.queryData(match.params.id, match.params.namesubsection)  }
                    //load subSection
                    if(!stopQuerySubSection){props.queryInsideID(match.params.id)
                        setStopQuerySubSection(true);
                    }
                    //load items subsection
                    if((!stoprQueryDATA)&&(props.sections[match.params.id-1].subSections.length > 0)){
                        setstoprQueryDATA(true)                   
                        props.getAddItems(match.params.namesubsection)  
                    }       
                    }            
        
  }) 
  useEffect(()=>{
     console.log("queryData  stop stop data")
     // перешли по ссылке , а не  reload page
     if((props.sections.length>0)&&(props.seekItems.length > 0)){props.queryData(match.params.id, match.params.namesubsection)}
  },[])  
          
    return(
        <div className={s.wraperAllItems}>         
         {props.seekItems.length > 0 && props.seekItems.map(p=>          
             <Item id = {p.id} 
                    idSubSection= {match.params.namesubsection}
                    idSection={match.params.id}
                    name={p.name} 
                    description={p.description} 
                    price={p.price} 
                    comments={p.comments}
                    manufacturer={p.manufacturer}
                    link={p.link} />
         )}            
         </div>      
    )
}


type SectionType= {   
    queryInsideID:(id:number)=>void
    id:number           | null
    name:string         | null    
    link:string         | null
    description:string | null
    subSections: Array<subSectionsType> | null   
}

let Section:React.FC<SectionType>= (props)=>{
    return(
        <NavLink to={"/catalog/section/"+props.id}>
            <div className={s.sub_section} onClick={()=>{
                props.id != null && props.queryInsideID(props.id)
              //  console.log(props.id)
            }}>
                <div className={s.photo_sub_sec}>{props.link != null && <img src={props.link}/>}</div>
                <div className={s.name_sub_sec}> {props.name!= null && <h4>{props.name}</h4>}</div>
            </div>
        </NavLink>
    )
}
type CatalogType = {   
    sections:Array<SectionsType>
    queryInsideID:(id:number)=>void
    ViewSubSection:boolean
}
let Catalog:React.FC<CatalogType> = (props)=>{
  
    return(
        <div className={!props.ViewSubSection? s.wrapper: s.wrapper_small}>       
        
             {props.sections.length >0 && props.sections.map(p=><Section  queryInsideID={props.queryInsideID} id={p.id} name={p.name} link={p.link} description = {p.description} subSections={p.subSections}/>)}
        
       </div>
    )
}
type CatalogCaontainerType = {
    getSectionsAll:()=>void
    getSubSection:(idSubSection:number)=>void
    getAddItems:(nameSubSection:string)=>void
    setNewLocal:any
    location_ganges:boolean
    location:any
    sections:Array<SectionsType>
    match:any
}

class CatalogCaontainer extends React.Component<CatalogCaontainerType>{
    componentDidMount(){             
        this.props.getSectionsAll();  
        console.log(this.props.match)        
    }
    componentDidUpdate(prevProps:any){            
        if(prevProps.sections != this.props.sections){
          //  debugger
            this.props.sections.forEach(p=>{
                if(p.id == this.state.IDnumber) this.setState({SelectSubSection:p.subSections}) 
                }
                )
        }
       // debugger
      if(this.props.sections != undefined)  if (prevProps.sections[2] != this.props.sections[2]){
          //  debugger
           // console.log("TEST ITEMS SUBSECTIONS IDnumber")
        }
        if(this.props.sections != undefined)if (prevProps.sections != this.props.sections){
          //  debugger
          //  console.log("TEST ITEMS SUBSECTIONS no IDnumber")
        }
        

    }
    
    state = {IDnumber:1,
            statusSubSection:false,
            ViewSubSection:false,
            SelectSubSection:[] as Array<subSectionsType>,
            seekItems:[] as Array<ItemsType>,
            seekItem:{},
            locationChanges:false
    }  
   
    smallNav = ()=>{
        this.setState({ViewSubSection:true});
    }
    queryInsideID = (idSection:number)=>{
        //debugger
        if(this.props.sections.length > 0){
           this.setState({IDnumber:idSection,statusSubSection:true,ViewSubSection:true});     
         //  debugger
           this.props.getSubSection(idSection);}
        //console.log("check___"+idSection)
    }
    queryDataProduct=(id:number,nameSection:string)=>{
      let aaa ;  
    //  console.log("queryDataProduct "+ nameSection);
      if(this.props.sections.length > 0){
       //   debugger


          this.props.sections.forEach(p=>{
                if(p.id != null){
                            if(p.id  ==  id){
                                    p.subSections.forEach(subSection=>{
                                    if(subSection.name == nameSection){                                     
                                        if (this.state.seekItems != subSection.items){                                         
                                         this.setState({seekItems:subSection.items})}
                                    }
                                    })
                                }
                    }
        })  

       
        
         }
    
    }
    render(){
    
  
        return(
        <div className={s.content}>
         {/*  <Route path ="/catalog" render ={()=><BreadCrumbsContainer/>}/> */}
           <div className={s.contentItems}>
             <Catalog  sections ={this.props.sections} queryInsideID={this.queryInsideID} ViewSubSection={this.state.ViewSubSection} />
             <Route exact path = {"/catalog/section/:id?"} render={()=><SubSection  queryInsideID={this.queryInsideID} subSections={this.state.SelectSubSection} getSubSection={this.props.getSubSection} id={this.state.IDnumber} getAddItems={this.props.getAddItems} queryData={this.queryDataProduct} setNewLocal={this.props.setNewLocal} />} />
             <Route strict path = {"/catalog/section/:id?/:namesubsection?/b"} render={()=> <ProductItems getAddItems={this.props.getAddItems} sections={this.props.sections} queryInsideID={this.queryInsideID} queryData={this.queryDataProduct} seekItems={this.state.seekItems} />}/>
             <Route exact path = {"/catalog/section/:sectionId?/:subsectionId?/:productId?/view"} render={()=><ProductItemContainer smallNav={this.smallNav} />} />
             </div>
        </div> 
            
        )
    }
}

let mapStateToProps =(state:AppStateType)=>({
    sections:getCatalogSectionsAllSelector(state),
    location_ganges: getMy_location_changes(state)
})
export default compose(connect(mapStateToProps,{getSectionsAll  : getCatalogSectionsThunk,
                                                getSubSection   : getCatalogSubSectionThunk,
                                                getAddItems     : getCatalogSubSectionsAddItemsThunk,
                                                setNewLocal     : addLocationCrumbsThunk}),withRouter)(CatalogCaontainer)