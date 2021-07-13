import React from 'react'
import Card_item from './card_item'
import './cards.css'

const Cards = () => {
    return (
        <div className="container_1">
            <h5 className="big_title">Gợi ý</h5>
            <div className="wrapper">
                <ul className="card_items">
                    <Card_item
                        title="Bưu cục Gia Lai"
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
    )
}

export default Cards;