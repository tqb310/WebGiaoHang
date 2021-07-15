import React, {useRef, useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './buucuc.css'
import Cards from './buucuc_card/cards'
import Map from './map_card/map'
import 'font-awesome/css/font-awesome.min.css';
import {BiSearchAlt} from 'react-icons/bi';
import {AiOutlineSearch} from 'react-icons/ai';

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

    return(
        <>
            <div className="container">
                <div className="form_wrap">
                    <div className="list_recommend">
                        <Cards />
                    </div>
                    <div className="map">
                        <h5 id="map_title">Bản đồ</h5>
                        <div className="search" ref={ref}>
                            <h5 id="search_h5"><BiSearchAlt /> Tìm kiếm</h5>
                            {hovered && <div className="input-group rounded">
                                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                                    aria-describedby="search-addon" />
                                <span className="input-group-text border-0" id="search-addon">
                                    <AiOutlineSearch/>
                                </span>
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