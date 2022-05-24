import React, { useState } from "react"
import { Map, Placemark, YMaps } from "react-yandex-maps";
import s from "./student.module.css"




export let Mains  = (props) =>{
    let [center,EditCenter] = useState([25.185322, 61.426646]);

      return(
        <div className={s.stypeMap}>
       <YMaps >
       
           
           <Map defaultState={
                              { autoFitToViewport:'always',
                                center: [55.185322, 61.426646],
                                zoom: 17 ,                            
                                type: 'yandex#hybrid'
                              } }                             
                             // style={{width:"100%"}}
                              options = {{
                                type:'yandex#hybrid'
                              }}  
                              height="200px"
                              width="100%" 
                            //  onLoad={(ymaps) => getCoords(ymaps)}                           
                          
                             > 
        <Placemark
        geometry={center}
       
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
          console.log(props.ymapsObject)
          EditCenter([25.185322, 31.426646])
            console.log(props.state);
        }}>
          Next Coordinates
        </div>
        </div>
    )

}
{/*
const [placemarks,setPlacemarks] = useState([]);
setPlacemarks([<Placemark key={0} geometry={[45.12,35.1]} />
return placemarks;
*/}