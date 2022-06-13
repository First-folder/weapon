import React from "react";
import { connect } from "react-redux";
import { AdvertisingType, SetAdvertisingThunk } from "../../redux/advertising";
import { AppStateType } from "../../redux/reducer_store";
import s from "./advertising.module.css"
import { NavLink, withRouter } from 'react-router-dom';
import { getPromoAll } from "../../redux/Selectors";
import defaultImg from "../../img/gift1.jpg"
import BreadCrumbsContainer from "../breadCrumbs/BreadCrumbsContainer";

type PromoType = {
    data:AdvertisingType
}
let Promo:React.FC<PromoType> = (props)=>{
    
    return(
        <NavLink to={"/promo/elem/"+props.data.id}>
            <div className={s.item}>
               {props.data.frontalBanner == null? <img className={s.frontal_banner} src={defaultImg}/>:<img className={s.frontal_banner} src={props.data.frontalBanner}/> } 
              
               
            </div>
             </NavLink>
    )
}
type AdvertisingPromoType={
    promo:Array<AdvertisingType>
   
}
let AdvertisingPromo:React.FC<AdvertisingPromoType> = (props)=>{
   
    return(
        <div> 
        
        <h1 className={s.headerh1}> Акции </h1>    
        <div className={s.promo}>
            {props.promo.map(p => p.active?  <Promo data={p}/>:<div></div>
            )}
        </div>
    </div>
    )

}
type PropsType = {
    SetAdvertising:()=>void
    promo:Array<AdvertisingType>
}
class AdvertisingContainer extends React.Component<PropsType>{
    componentDidMount(){
        this.props.SetAdvertising();
    }
    render(){
        return(<AdvertisingPromo promo = {this.props.promo}/>)
    }
}
let mapStateToProps=(state:AppStateType)=>({
    promo:getPromoAll(state)
})
export default connect(mapStateToProps,{SetAdvertising:SetAdvertisingThunk
                                       })(AdvertisingContainer); 
