
import React from "react";
import { connect } from "react-redux";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { addLocationCrumbsThunk, LocationType } from "../../redux/breadCrumbs";
import { AppStateType } from "../../redux/reducer_store";
import { createPathBreadCrumbs } from "../../redux/secondary_function";
import sb from "./breadCrumbs.module.css"
type ItemCrumbs = {
    dataCrumbs:LocationType
}
let ItemCrumbs:React.FC<ItemCrumbs> = (props)=>{  
    return( <div className={sb.item}> {props != undefined && <NavLink to={props.dataCrumbs.path}> {props.dataCrumbs.name}  </NavLink> }  </div>
    )
    
}
type BreadCrumbsContainerType = {
    crumbs:Array<LocationType>
    setNewLlocal: ({})=>void

}
class BreadCrumbsContainer extends React.Component<BreadCrumbsContainerComposeType> {
    componentDidMount(){
        let data_location = createPathBreadCrumbs(this.props.location.pathname);
        this.props.setNewLlocal(data_location);
    }
    componentDidUpdate(prevProps:BreadCrumbsContainerComposeType){
        if(this.props.location.pathname != prevProps.location.pathname){
            let data_location = createPathBreadCrumbs(this.props.location.pathname);
            this.props.setNewLlocal(data_location);          
             console.log(" no == path name");
         }
    }
    render(){    
        return(
            <div className={sb.wrapper}>                      
                {this.props.crumbs.map(p=><ItemCrumbs dataCrumbs={p} />
                )}          
          </div>
        )
    }    
}
type mstp = {
    crumbs:Array<LocationType>
}
let mapStateToProps =(state:AppStateType):mstp=>({
    crumbs : state.Location.my_location
})
type BreadCrumbsContainerComposeType = BreadCrumbsContainerType & RouteComponentProps
export default compose<BreadCrumbsContainerComposeType>(withRouter,connect(mapStateToProps,{setNewLlocal:addLocationCrumbsThunk}))(BreadCrumbsContainer)