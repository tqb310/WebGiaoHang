import React, {useRef, useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './buucuc.css'
import Cards from './buucuc_card/cards'
import Map from './map_card/map'
import 'font-awesome/css/font-awesome.min.css';
import {BiSearchAlt} from 'react-icons/bi';
import {AiOutlineSearch} from 'react-icons/ai';
import {getBuucuc} from './API/buucuc'
import Card_item from './buucuc_card/card_item'
import {MapContainer, TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css";

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
    const ab = [{"name": "toan", "tuoi": 21}, {"name": "toan1", "tuoi": 22}]

    const changeInput = (event) => {
        set_buucuc(event.target.value)
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
            console.log(resuilt[0].tenkho)
            
        } catch (error) {
            alert("Không tìm thấy")
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
                    <Card_item
                        title={resuilt[0].tenkho || "Bưu cục Gia Lai"}
                        location={resuilt[0].diachi || "Thị trấn Chư Ty, Huyện Đức Cơ, Tỉnh Gia Lai"}
                        number="033546845"
                    />
                    <Card_item
                        title={resuilt[1].tenkho || "Bưu cục Gia Lai"}
                        location={resuilt[1].diachi || "Thị trấn Chư Ty, Huyện Đức Cơ, Tỉnh Gia Lai"}
                        number="0396874563"
                    />
                    <Card_item
                        title="Bưu cục Gia Lai"
                        location="Thị trấn Chư Ty, Huyện Đức Cơ, Tỉnh Gia Lai"
                        number="033536875"
                    />
                    <Card_item
                        title="Bưu cục Đà Nẵng"
                        location="282 Trưng Nữ Vương, Phường Bình Thuận, Quận Hải Châu, TP Đà Nẵng"
                        number="033346854"
                    />
                    <Card_item
                        title="Bưu cục Bình Dương"
                        location="77 Hoàng Hoa Thám, Phường Hiệp Thành., Tp Thủ Dầu Một, Bình Dương"
                        number="033543645"
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
                        <MapContainer center={[y,x]} zoom={12}>

                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='$copy; <a href="http://osm.org/copyright">openstreetmap</a>
                                contributiors'
                            />
                        </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Buucuc;