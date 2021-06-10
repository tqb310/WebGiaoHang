import React from 'react';
import {BrowseRouter as Router, Route, Link} from 'react-router-dom'

export default function() {
    return (
        <div className='app-container'>
            <div className='side-bar'>
                <img src='#'/>
                <ul>
                    <li>Trang chủ</li>
                    <li>Tạo đơn</li>
                    <li>Quản lý</li>
                    <li>Tra cứu</li>
                </ul>
            </div>
            <div className='content'>

            </div>
        </div>
    )
}