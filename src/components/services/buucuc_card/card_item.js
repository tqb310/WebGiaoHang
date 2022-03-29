import React from 'react'
import './card_item.css'
import 'font-awesome/css/font-awesome.min.css';
import {MdLocationOn} from 'react-icons/md';
import {AiTwotonePhone} from 'react-icons/ai';
import {FaDirections} from 'react-icons/fa'
const Card_item = (props) => {
    return (
        <li className="content">
            <div className="title">
                {props.title}
            </div>
            <div className="_body">
                <div className="a_row"><MdLocationOn/> {props.location}</div>
                <div className="a_row"><AiTwotonePhone/> {props.number}</div>
                <a className="a_row direction"><FaDirections/> Chỉ đường</a>
            </div>
            
        </li>
    )
}
export default Card_item;