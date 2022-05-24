import React, { useRef, useState } from "react"
import s from "./student.module.css"
import { YMaps, Map, Placemark } from 'react-yandex-maps'

type MainType={}

export let Main :React.FC<any> = (props) =>{
    let [centerNew,EditCenter] = useState([55.167313, 61.395933]);
    const RefMap = useRef(null)

      return(
        <div   className={s.stypeMap}>
       <YMaps >
       
           
           <Map state={
                              { autoFitToViewport:'always',
                                center: centerNew,
                                zoom: 16 ,                            
                                type: 'yandex#map'
                              } }                             
                             // style={{width:"100%"}}
                              
                              height="300px"
                              width="100%" 
                            //  onLoad={(ymaps) => getCoords(ymaps)}
                            ref = {RefMap}
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