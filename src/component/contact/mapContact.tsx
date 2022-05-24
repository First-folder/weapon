import React from "react"
import { Map, Placemark, YMaps } from "react-yandex-maps"
import { ContactType } from "../../redux/contact"

type MapContactType={
    data:Array<ContactType>
    mapCurrentPosition:Array<number>
}
let MapContact:React.FC<MapContactType> = (props)=>{
    return(
        <YMaps 
        query={{
                ns: 'use-load-option',
                load:
                'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
                }}>

                    <Map state={
                                                    { autoFitToViewport:'always',
                                                        center: props.mapCurrentPosition,
                                                        zoom: 16 ,                            
                                                        type: 'yandex#map',
                                                        controls: ['zoomControl', 'fullscreenControl']
                                                    } }                     
                                                    
                                                    height="300px"
                                                    width="100%" 
                                                    options={[
                                                        {mapAutoFocus:true},
                                                        {nativeFullscreen:true}
                                                    ]}
                                                    
                                                
                                                    > 
                                 {props.data.map(p=><Placemark 
                                        geometry={p.coordinates_map}
                                            properties={{
                                            hintContent: 'Собственный значок метки',
                                            balloonContent: 'Магазин Царская Охота'
                                            }}
                                        /> )}                   
                               
                        
    
                
                </Map>


</YMaps>
    )
}
export default MapContact