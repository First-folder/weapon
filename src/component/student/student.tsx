import React, { ComponentType, useRef, useState } from "react"
import s from "./student.module.css"
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import { compose } from "redux"
import { RouteComponentProps, withRouter, WithRouterProps } from "react-router"
import { connect } from "react-redux"
import { AppStateType } from "../../redux/reducer_store"
import { getCartReadItemsSelector } from "../../redux/Selectors"
import { CartItem } from "../../redux/cart"
type FunctionOneType = {
  name:string
 
}
let function1:React.FC<C1Type> = (props)=>{
  return(
    <div>
    
        <div>   {console.log(props.match)
                }  
          </div>
          <div>ghgh {console.log(props.location)}</div>
          <div>ghgh {console.log(props.cart)}</div>
          </div>
      
   
  )
}
type C1Params ={
  location:string
 
 // match:any
}
type Function2Type = {
  params:string
}
type C1Type = FunctionOneType & RouteComponentProps<C1Params> & MSTPType
let function2 = ()=>{
  return  {name:"params"} 
}
type MSTPType = {
  cart:Array<CartItem>
}
let mapStateToPropsTest = (state:AppStateType)=>({
    cart: getCartReadItemsSelector(state)
})
export let Function3 = compose<FunctionOneType & RouteComponentProps<C1Params> & MSTPType>(withRouter,connect(mapStateToPropsTest))(function1)

type MainType={}

export let Main :React.FC<any> = (props) =>{
    let [centerNew,EditCenter] = useState([55.167313, 61.395933]);
   

      return(
        <div   className={s.stypeMap}>
       <YMaps >
       
           
           <Map state={
                              { autoFitToViewport:'always',
                                center: centerNew,
                                zoom: 16 ,                            
                                type: 'yandex#map'
                              } }                     
                              
                              height="300px"
                              width="100%" 
                           
                          
                             > 
        <Placemark
        geometry={centerNew}       
        properties={{
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
        }}
        options={{
          iconLayout: 'default#image',
          iconImageHref: 'images/myIcon.gif',
          iconImageSize: [30, 42],
          iconImageOffset: [-3, -42],
          autoFitToViewport:'always'
        }}
      />
                
                
                </Map>
              
        
        </YMaps>
        <div className={s.newcoord} onClick={()=>{
          console.log("+++++++")
         // console.log(props.mapState)
          EditCenter([55.180537, 61.389357])
            console.log(centerNew);
        }}>
          Next Coordinates
        </div>

        <div className={s.newcoord} onClick={()=>{
          console.log("+++++++")
         // console.log(props.mapState)
          EditCenter([55.222474, 61.380236])
            console.log(centerNew);
        }}>
          Next Coordinates 2
        </div>


        </div>
    )

}
{/*
const [placemarks,setPlacemarks] = useState([]);
setPlacemarks([<Placemark key={0} geometry={[45.12,35.1]} />
return placemarks;
*/}