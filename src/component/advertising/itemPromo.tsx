import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { AdvertisingType, SetAdvertisingThunk } from "../../redux/advertising";
import { AppStateType } from "../../redux/reducer_store";
import { getPromoAll } from "../../redux/Selectors";
import BreadCrumbsContainer from "../breadCrumbs/BreadCrumbsContainer";
import s from "./itemPromo.module.css"
type ItemAdvertisingBodyType={
    itemBodyPromo:string 
}
let ItemAdvertisingBody:React.FC<ItemAdvertisingBodyType> = (props)=>{
    return(
        <div className={s.item_body_promo}>{props.itemBodyPromo} </div>
    )

}
type ItemPromoType = {
    data:AdvertisingType
}
let ItemPromo:React.FC<ItemPromoType>=(props)=>{
    let placeBodyAdvertising;
   if (props.data.bodyAdvertising != null) placeBodyAdvertising = props.data.bodyAdvertising.map(p=><ItemAdvertisingBody itemBodyPromo = {p}/>)
    return(
        <div>
                <div> <BreadCrumbsContainer/> </div>
                <div> <h1> {props.data.nameBanner} </h1> </div>
                <div className={s.banner}> {props.data.pictureBanner == null? <img src={"http://localhost:3015/public/1/1212.jpg"}/>:<img src={props.data.pictureBanner}/>}</div>
                <div className={s.wrapper_promo}>
                    <div className={s.wrapper_text}>
                        <div className={s.name_advertising}>{props.data.nameAdvertising}</div>
                        <div className={s.name_certificate}>{props.data.nameCertificate}</div>
                        <div>{placeBodyAdvertising} </div>
                        <div className={s.time_limit}> {props.data.timeLimits} </div>
                    </div>
                    <div className={s.bannerPromo}> {props.data.pictureAdvertising == null?<img src={""}/>:<img src={props.data.pictureAdvertising}/>} </div>

                </div>
                

            


        </div>
    )
}

type ItemPromoContainerType = {
    promoAll: Array<AdvertisingType>
    match:any
    location:any
    history:any
   SetAdvertising:()=>void
}
class ItemPromoContainer extends React.Component<ItemPromoContainerType>{
   
    componentDidMount(){
        //const { match, location, history } = this.props;
        console.log(this.props.match.params)
        let searchIdPromo = false;
        //debugger
        console.log("work code1")
        console.log(this.props.promoAll);
        if(this.props.promoAll.length === 1){
          this.props.SetAdvertising();
           this.props.promoAll.forEach(p => {if(p.id == Number(this.props.match.params.id)) searchIdPromo = true; console.log("work code") }
                                             
                                       )
        
    }else {

    }
    console.log(searchIdPromo);
}
    render(){
        const { match, location, history } = this.props
        return(
            <div>  
                
                {this.props.promoAll.map(p=> p.id == Number(match.params.id)&& <ItemPromo data={p}/> )}           
            </div>
        )
    }
}
let mapStateToProps = (state:AppStateType)=>({
    promoAll: getPromoAll(state)
})
export default compose(connect(mapStateToProps,{SetAdvertising:SetAdvertisingThunk}),withRouter)(ItemPromoContainer);