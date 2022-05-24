
import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { compose } from "redux";
import { addLocationCrumbsThunk, LocationType } from "../../redux/breadCrumbs";

import { createPathBreadCrumbs } from "../../redux/secondary_function";
import sb from "./breadCrumbs.module.css"

let ItemCrumbs = (props)=>{
  //  debugger
    return( <div className={sb.item}> {props != undefined && <NavLink to={props.dataCrumbs.path}> {props.dataCrumbs.name}  </NavLink> }  </div>
    )
    
}
class BreadCrumbsContainer extends React.Component {
    componentDidMount(){
        let data_location = createPathBreadCrumbs(this.props.location.pathname);
        this.props.setNewLlocal(data_location);
    }
    componentDidUpdate(prevProps){
        if(this.props.location.pathname != prevProps.location.pathname){
            let data_location = createPathBreadCrumbs(this.props.location.pathname);
            this.props.setNewLlocal(data_location);          
             console.log(" no == path name");
         }
    }
    render(){
     //   debugger
        return(
            <div className={sb.wrapper}>  
                    
                {this.props.crumbs.map(p=><ItemCrumbs dataCrumbs={p} />
                )}
          
          </div>
        )
    }
    
}

let mapStateToProps =(state)=>({
    crumbs : state.Location.my_location
})
export default compose(connect(mapStateToProps,{setNewLlocal:addLocationCrumbsThunk}),withRouter)(BreadCrumbsContainer)