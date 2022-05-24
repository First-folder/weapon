import React, { useEffect, useRef } from "react"
import { connect } from "react-redux";
import { useRouteMatch, useParams, NavLink, withRouter } from "react-router-dom";
import { compose } from "redux";
import { createPathBreadCrumbs } from "../../../redux/secondary_function";
import { getCatalogSectionsAllSelector } from "../../../redux/Selectors";
import s from "../catalog.module.css"
let ItemSubSections=(props)=>{
       
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

class SubSection extends React.Component{
    componentDidMount(){  
       
    }
    componentDidUpdate(prevProps){      
        if(prevProps.catalog[0] !== this.props.catalog[0]){          
            if(this.props.catalog.length > 0){
                console.log("check function queryInsideID ")
                this.props.queryInsideID(this.props.match.params.id)
            }
        }  

    }
    componentWillUnmount(){     
    }
    searchSubsection(idSection){
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
let mapStateToProps = (state)=>({
    catalog:getCatalogSectionsAllSelector(state)
})
 export default compose(connect(mapStateToProps,{}),withRouter)(SubSection);
