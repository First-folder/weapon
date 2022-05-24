import { GoogleApiWrapper, Map } from "google-maps-react";
import React from "react"
let Maps :React.FC<any> = (props) =>{
   
    
    return(
        <div >
           
            <Map
                google={props.google}
                zoom={15}
                style={{heiht:"100%",with:"100%"}}
                initialCenter={{ lat: 9.761927, lng: 79.95244 }}
            />
        </div>
    )

}
export default GoogleApiWrapper({
    apiKey: "API_KEY",
  })(Maps);