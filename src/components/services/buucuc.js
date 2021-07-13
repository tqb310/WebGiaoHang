import React from 'react'
import './buucuc.css'
import Cards from './buucuc_card/cards'
import Map from './map_card/map'

const Buucuc = () => {
    return(
        <>
            <div className="container">
                <div className="form_wrap">
                    <div className="list_recommend">
                        <Cards />
                    </div>
                    <div className="map">
                        <h5 id="map_title">Bản đồ</h5>
                        <Map 
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCi0yFiBFSL9ViV3HiI7wXes4KF1PL8SCs&callback=initMap`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `600px`, margin: `auto`, border: '2px solid black' }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Buucuc;