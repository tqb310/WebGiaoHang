import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from "react-leaflet"
import React, {useRef, useState, useEffect} from 'react'
class Map extends React.Component {
    constructor() {
      super();
      this.state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 8,
      };
      this.onClickNewYork = this.onClickNewYork.bind(this)
      this.onClickLondon = this.onClickLondon.bind(this)
    }
    
    componentDidMount() {
      this.map = this.mapInstance.leafletElement
    }
    
    onClickNewYork() {
      console.log(this.map)
      this.map.flyTo([40.730610, -73.935242], 15)
    }
    
    onClickLondon() {
      console.log(this.map)
      this.map.flyTo([51.505, -0.09], 15)
    }
  
    render() {
      const position = [this.state.lat, this.state.lng];
      return (
        <div>
        <MapContainer
          ref={e => { this.mapInstance = e }}
          center={position}
          zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={position}>
            <Popup>
              <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
            </Popup>
          </Marker>
        </MapContainer>
          <button onClick={this.onClickNewYork}>FlyTo New York </button>
          <button onClick={this.onClickLondon}>Fly back to London</button>
          </div>
      );
    }
  }

  export default Map;