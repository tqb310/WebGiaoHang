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
    const [resuilt, set_resuilt] = useState('')

    const changeInput = (event) => {
        set_buucuc(event.target.value)
    }

    const timkiem = async () => {
        try {
            console.log(buucuc)
            const data = await getBuucuc(buucuc)
            set_resuilt(data)
            console.log(data)
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
                    <Card_item
                        title={resuilt.tenkho}
                        location="298 Hùng Vương - TT Chư Prông - Chư Prông - Gia Lai"
                        number="033546845"
                    />
                    <Card_item
                        title="Bưu cục Tp.HCM"
                        location="Đại Học Nông Lâm - Khu Phố 8 - Linh Trung Quận Thủ Đức"
                        number="0396874563"
                    />
                    <Card_item
                        title="Bưu cục Hà Nội"
                        location="Số 22 Ngõ 38 Trần Quý Kiên - Dịch Vọng - Cầu Giấy - Hà Nội"
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
                            <Map 
                                    // googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCi0yFiBFSL9ViV3HiI7wXes4KF1PL8SCs&callback=initMap`}
                                    // loadingElement={<div style={{ height: `100%` }} />}
                                    // containerElement={<div style={{ height: `600px`, margin: `auto`, border: '2px solid black' }} />}
                                    // mapElement={<div style={{ height: `100%` }} />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Buucuc;