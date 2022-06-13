import React, { ComponentProps, ComponentType, useEffect, useRef } from "react"
import { connect } from "react-redux";
import { useRouteMatch, useParams, NavLink, withRouter, RouteComponentProps } from "react-router-dom";
import { compose } from "redux";
import { SectionsType, subSectionsType } from "../../../redux/catalog";
import { AppStateType } from "../../../redux/reducer_store";
import { createPathBreadCrumbs } from "../../../redux/secondary_function";
import { getCatalogSectionsAllSelector } from "../../../redux/Selectors";
import s from "../catalog.module.css"
type ItemSubSectionsType = {
    getAddItems:(nameSubSection:string)=>void
    queryData:(id:number, nameSection:string )=>void  
    name:string
    link:string 
    idSection:number
    id:number 
}
let ItemSubSections:React.FC<ItemSubSectionsType>=(props)=>{
       
    let loadItems =()=>{
        props.getAddItems(props.name);
        props.queryData(props.id,props.name)    
    }
    return(
       <NavLink  to={"/catalog/section/"+props.idSection+"/"+props.name+"/b"}> 
                <div className={s.itemSubSections} onClick={loadItems}>
                    <div className={s.imgItemsSubS}><img src={props.link}/></div>
                    <div> <p> {props.name} </p>  </div>
                </div>
        </NavLink>

    )
}
type SubSectionType = {
    catalog:Array<SectionsType>
    subSections:Array<subSectionsType>
    id:number
    queryInsideID:(idSection:number)=>void
    getAddItems:(nameSubSection:string)=>void
    queryData:(id:number, nameSection:string )=>void
    getSubSection:(idSubSection:number)=>void
    
}
class SubSection extends React.Component<SubSectionComposeType>{
    componentDidMount(){  
       
    }
    componentDidUpdate(prevProps:SubSectionType){      
        if(prevProps.catalog[0] !== this.props.catalog[0]){          
            if(this.props.catalog.length > 0){
                console.log("check function queryInsideID ")
                this.props.queryInsideID(Number(this.props.match.params.id))
                
            }
        }  

    }
    componentWillUnmount(){     
    }
    searchSubsection(idSection:number){
        console.log("check Section ID   ... "+ idSection)
    }
    render(){
        return(
            <div className={s.wrapper_sub}>
           
            {this.props.subSections.map(p=><ItemSubSections id={p.id} link={p.link} name={p.name} getAddItems={this.props.getAddItems} idSection={this.props.id} queryData={this.props.queryData}/>)}
           
        </div>
        )
    }
}
type mstp={
    catalog:Array<SectionsType>
}
let mapStateToProps = (state:AppStateType):mstp=>({
    catalog:getCatalogSectionsAllSelector(state)
})
type withRouterSubSectionType = {
    id:string
}
type  SubsectionExternalPropsType = {
        subSections:Array<subSectionsType>
        id:number
        queryInsideID:(idSection:number)=>void
        getAddItems:(nameSubSection:string)=>void
        queryData:(id:number, nameSection:string )=>void
        getSubSection:(idSubSection:number)=>void
}
 type SubSectionComposeType = SubSectionType & RouteComponentProps<withRouterSubSectionType>
 export default compose<ComponentType<SubsectionExternalPropsType> & SubSectionComposeType >(connect(mapStateToProps,{}),withRouter)(SubSection);
