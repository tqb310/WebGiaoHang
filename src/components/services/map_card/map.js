import React from 'react'
import './map.css'
import {MapContainer, TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps"

// const Map = () => {
//     return (
//         <div className="container_2">
//             <div className="map_wrapper">
//                 {/* <div className="get_location">  
//                 </div> */}
//                 <div className="map">
//                     <GoogleMap
//                         defaultZoom={8}
//                         defaultCenter={{ lat: -34.397, lng: 150.644 }}
//                         >
//                     </GoogleMap>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default withScriptjs(withGoogleMap(Map));


const Map = () => {
    return (
                <MapContainer center={[10.849409, 106.753708]} zoom={15}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='$copy; <a href="http://osm.org/copyright">openstreetmap</a>
                        contributiors'
                    />
                </MapContainer>
    )
}
export default Map