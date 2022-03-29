import React, {useRef, useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './buucuc.css'
import Cards from './buucuc_card/cards'
import Map from './map_card/map'
import 'font-awesome/css/font-awesome.min.css';
import { BiSearchAlt} from 'react-icons/bi';
import {AiOutlineSearch} from 'react-icons/ai';
import {getBuucuc} from './API/buucuc'
import Card_item from './buucuc_card/card_item'
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from "react-leaflet"
import "leaflet/dist/leaflet.css";
import { MdMyLocation } from 'react-icons/md';

function useHover(){
    const ref = useRef()
    
    const [hovered, setHovered] = useState(false)

    const enter = () => setHovered(true)
    const leave = () => setHovered(false)

    useEffect(() => {
        ref.current.addEventListener('mouseenter', enter)
        ref.current.addEventListener('mouseleave', leave)
        return () => {
            // ref.current.removeEventListener('mouseenter', enter)
            // ref.current.removeEventListener('mouseleave', leave)
        } 
    }, [ref])
    return [ref, hovered]
}



const Buucuc = () => {

    const [ref, hovered] = useHover()

    const [buucuc, set_buucuc] = useState('')
    const [resuilt, set_resuilt] = useState([{"tenkho": "Bưu cục Gia Lai", "diachi":"58 Quang Trung, Huyện Đức Cơ, Tỉnh Gia Lai"},{"tenkho": "Bưu cục Đà Nẵng", "diachi":"282 Trưng Nữ Vương, Phường Bình Thuận, Quận Hải Châu, TP Đà Nẵng"}, {"tenkho": "Bưu cục Bình Dương", "diachi":"77 Hoàng Hoa Thám, Phường Hiệp Thành., Tp Thủ Dầu Một, Bình Dương"}])
    const [x, set_x] = useState(106.629662)
    const [y, set_y] = useState(10.823099)
    const [position1, set_position1] = useState(106.629662, 10.823099)

    const changeInput = (event) => {
        set_buucuc(event.target.value)
    }
    
    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
        })
      
        return position === null ? null : (
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>
        )
      }
    const timkiem = async () => {
        try {
            const data = await getBuucuc(buucuc)
            var arr = []
            data.forEach(element => {
                arr.push(element)
            });
            set_x(data[0].kinhdo)
            set_y(data[0].vido)
            set_resuilt(arr)
           
            
            
        } catch (error) {
            
        }
    }
    return(
        <>
            <div className="container">
                <div className="form_wrap">
                    <div className="list_recommend">
                    <div className="container_1">
            <h5 className="big_title">Gợi ý</h5>
            <div className="wrapper">
                <ul className="card_items">
                    <Cards 
                        data={resuilt}
                    />
                </ul>
            </div>
            
        </div>
                    </div>
                    <div className="map">
                        <h5 id="map_title">Bản đồ</h5>
                        <div className="search" ref={ref}>
                            <h5 id="search_h5"><BiSearchAlt /> Tìm kiếm</h5>
                            {hovered && <div className="input-group rounded">
                                <input type="search" onChange={changeInput} className="form-control rounded" placeholder="Search" aria-label="Search"
                                    aria-describedby="search-addon" />
                                <button onClick={timkiem} className="input-group-text border-0" id="search-addon">
                                    <AiOutlineSearch/>
                                </button>
                            </div>}
                        </div>
                        
                        <div className="map_wrapper">
                            
                        <MapContainer  center={[y,x]} zoom={12}>

                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='$copy; <a href="http://osm.org/copyright">openstreetmap</a>
                                contributiors'
                            />
                            <div className="dinhvi" >
                                <MdMyLocation />
                                <LocationMarker />
                            </div>
                            <Marker position={[108, 10]}>
                                <Popup>
                                    <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                                </Popup>
                            </Marker>
                        </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Buucuc;