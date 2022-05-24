import React from "react"
import { connect } from "react-redux";
import { AppStateType } from "../../redux/reducer_store";
import { ServiceAddThunk, serviceType, TestCookie } from "../../redux/workshop";
import { getWorkShopServiceAllSelector } from "../../redux/Selectors";
import WorkShop from "./WorkShop";

type ArmoryWorkshopContainerType = {
    ServiceAdd:()=>void   
    service: Array<serviceType>
}
class ArmoryWorkshopContainer extends React.Component <ArmoryWorkshopContainerType>{
    componentDidMount(){
        this.props.ServiceAdd()
    }
    render(){
        return(
           <WorkShop service={this.props.service}/>
        )
    }
}
type mapStateToPropsType ={
    service: Array<serviceType>
}
let mapStateToProps = (state:AppStateType):mapStateToPropsType=>({
    service : getWorkShopServiceAllSelector(state)
})
export default connect(mapStateToProps,{ServiceAdd:ServiceAddThunk,TestMyAuthCookie:TestCookie})(ArmoryWorkshopContainer)
