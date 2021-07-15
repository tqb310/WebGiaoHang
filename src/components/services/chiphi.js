import React from 'react'
import './chiphi.css'
import { Form } from 'react-bootstrap';
import {ruleDistance} from '../handle/rule'
import { useState } from 'react';

const Chiphi = () => {
    const [price, set_price] = useState()
    const tinhtoan = () => {
        let x1 = ruleDistance[option - 1].latitude
        let y1 = ruleDistance[option - 1].longitude
            
        let x2 = ruleDistance[_option - 1].latitude
        let y2 = ruleDistance[_option - 1].longitude

        const d = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1))
        set_price(d*kg_option*1000)
        console.log(price)
    };
    const [option,setOption] = useState()
    const handleChange = (event) => {
        setOption(event.target.value)
    }

    const [_option,_setOption] = useState()
    const _handleChange = (event) => {
        _setOption(event.target.value)
    }

    const [kg_option,kg_setOption] = useState()
    const kg_handleChange = (event) => {
        if (event.target.value <= 0.5)
            kg_setOption(1)
        if (event.target.value > 0.5 && event.target.value <= 1)
            kg_setOption(1.5)
        if (event.target.value > 1 && event.target.value <= 5)
            kg_setOption(2)
        if (event.target.value > 5)
            kg_setOption(event.target.value /2)    
    }
    return(
        <>
            <div className="container1">
                <div className="form_wrap1">
                    <h4 id="_title">Ước tính chi phí</h4>
                    <div className="truck">
                        <div className="input_wrapper">
                            <div className="tinh_thanh">
                                <div className="form1">
                                    <h5>Gửi từ</h5>
                                    <Form.Control as="select" onChange={handleChange}>
                                        <option selected disabled hidden>Chọn Tỉnh/TP</option>
                                        <option value="1">An Giang</option>
                                        <option value="2">Bà Rịa-Vũng Tàu</option>
                                        <option value="3">Bạc Liêu</option>
                                        <option value="4">Bắc Kạn</option>
                                        <option value="5">Bắc Giang</option>
                                        <option value="6">Bắc Ninh</option>
                                        <option value="7">Bến Tre</option>
                                        <option value="8">Bình Dương</option>
                                        <option value="9">Bình Định</option>
                                        <option value="10">Bình Phước</option>
                                        <option value="11">Bình Thuận</option>
                                        <option value="12">Cà Mau</option>
                                        <option value="13">Cao Bằng</option>
                                        <option value="14">Cần Thơ (TP)</option>
                                        <option value="15">Đà Nẵng (TP)</option>
                                        <option value="16">Đắk Lắk</option>
                                        <option value="17">Đắk Nông</option>
                                        <option value="18">Điện Biên</option>
                                        <option value="19">Đồng Nai</option>
                                        <option value="20">Đồng Tháp</option>
                                        <option value="21">Gia Lai</option>
                                        <option value="22">Hà Giang</option>
                                        <option value="23">Hà Nam</option>
                                        <option value="24">Hà Nội (TP)</option>
                                        <option value="25">Hà Tây</option>
                                        <option value="26">Hà Tĩnh</option>
                                        <option value="27">Hải Dương</option>
                                        <option value="28">Hải Phòng (TP)</option>
                                        <option value="29">Hòa Bình</option>
                                        <option value="30">Hồ Chí Minh (TP)</option>
                                        <option value="31">Hậu Giang</option>
                                        <option value="32">Hưng Yên</option>
                                        <option value="33">Khánh Hòa</option>
                                        <option value="34">Kiên Giang</option>
                                        <option value="35">Kon Tum</option>
                                        <option value="36">Lai Châu</option>
                                        <option value="37">Lào Cai</option>
                                        <option value="38">Lạng Sơn</option>
                                        <option value="39">Lâm Đồng</option>
                                        <option value="40">Long An</option>
                                        <option value="41">Nam Định</option>
                                        <option value="42">Nghệ An</option>
                                        <option value="43">Ninh Bình</option>
                                        <option value="44">Ninh Thuận</option>
                                        <option value="45">Phú Thọ</option>
                                        <option value="46">Phú Yên</option>
                                        <option value="47">Quảng Bình</option>
                                        <option value="48">Quảng Nam</option>
                                        <option value="49">Quảng Ngãi</option>
                                        <option value="50">Quảng Ninh</option>
                                        <option value="51">Quảng Trị</option>
                                        <option value="52">Sóc Trăng</option>
                                        <option value="53">Sơn La</option>
                                        <option value="54">Tây Ninh</option>
                                        <option value="55">Thái Bình</option>
                                        <option value="56">Thái Nguyên</option>
                                        <option value="57">Thanh Hóa</option>
                                        <option value="58">Thừa Thiên – Huế</option>
                                        <option value="59">Tiền Giang</option>
                                        <option value="60">Trà Vinh</option>
                                        <option value="61">Tuyên Quang</option>
                                        <option value="62">Vĩnh Long</option>
                                        <option value="63">Vĩnh Phúc</option>
                                        <option value="64">Yên Bái</option>
                                    </Form.Control>
                                    </div>
                                <div className="form1">
                                    <h5>Gửi đến</h5>
                                    <Form.Control as="select" onChange={_handleChange} >
                                        <option selected disabled hidden>Chọn Tỉnh/TP</option>
                                        <option value="1">An Giang</option>
                                        <option value="2">Bà Rịa-Vũng Tàu</option>
                                        <option value="3">Bạc Liêu</option>
                                        <option value="4">Bắc Kạn</option>
                                        <option value="5">Bắc Giang</option>
                                        <option value="6">Bắc Ninh</option>
                                        <option value="7">Bến Tre</option>
                                        <option value="8">Bình Dương</option>
                                        <option value="9">Bình Định</option>
                                        <option value="10">Bình Phước</option>
                                        <option value="11">Bình Thuận</option>
                                        <option value="12">Cà Mau</option>
                                        <option value="13">Cao Bằng</option>
                                        <option value="14">Cần Thơ (TP)</option>
                                        <option value="15">Đà Nẵng (TP)</option>
                                        <option value="16">Đắk Lắk</option>
                                        <option value="17">Đắk Nông</option>
                                        <option value="18">Điện Biên</option>
                                        <option value="19">Đồng Nai</option>
                                        <option value="20">Đồng Tháp</option>
                                        <option value="21">Gia Lai</option>
                                        <option value="22">Hà Giang</option>
                                        <option value="23">Hà Nam</option>
                                        <option value="24">Hà Nội (TP)</option>
                                        <option value="25">Hà Tây</option>
                                        <option value="26">Hà Tĩnh</option>
                                        <option value="27">Hải Dương</option>
                                        <option value="28">Hải Phòng (TP)</option>
                                        <option value="29">Hòa Bình</option>
                                        <option value="30">Hồ Chí Minh (TP)</option>
                                        <option value="31">Hậu Giang</option>
                                        <option value="32">Hưng Yên</option>
                                        <option value="33">Khánh Hòa</option>
                                        <option value="34">Kiên Giang</option>
                                        <option value="35">Kon Tum</option>
                                        <option value="36">Lai Châu</option>
                                        <option value="37">Lào Cai</option>
                                        <option value="38">Lạng Sơn</option>
                                        <option value="39">Lâm Đồng</option>
                                        <option value="40">Long An</option>
                                        <option value="41">Nam Định</option>
                                        <option value="42">Nghệ An</option>
                                        <option value="43">Ninh Bình</option>
                                        <option value="44">Ninh Thuận</option>
                                        <option value="45">Phú Thọ</option>
                                        <option value="46">Phú Yên</option>
                                        <option value="47">Quảng Bình</option>
                                        <option value="48">Quảng Nam</option>
                                        <option value="49">Quảng Ngãi</option>
                                        <option value="50">Quảng Ninh</option>
                                        <option value="51">Quảng Trị</option>
                                        <option value="52">Sóc Trăng</option>
                                        <option value="53">Sơn La</option>
                                        <option value="54">Tây Ninh</option>
                                        <option value="55">Thái Bình</option>
                                        <option value="56">Thái Nguyên</option>
                                        <option value="57">Thanh Hóa</option>
                                        <option value="58">Thừa Thiên – Huế</option>
                                        <option value="59">Tiền Giang</option>
                                        <option value="60">Trà Vinh</option>
                                        <option value="61">Tuyên Quang</option>
                                        <option value="62">Vĩnh Long</option>
                                        <option value="63">Vĩnh Phúc</option>
                                        <option value="64">Yên Bái</option>
                                    </Form.Control>
                                </div>
                                    <div className="form1">
                                        <h5>Trọng lượng (Gram) </h5>
                                        <input className="gram_input" type="number" min="0" placeholder="Kg" onChange={kg_handleChange} required></input>
                                    </div>
                                    <div className="form1">
                                        <button onClick={tinhtoan} type='button' className="_btn_tinhtien">Tra cứu</button>
                                    </div>
                            </div>
                        </div>
                        <div className="output_wrapper">
                            <div className="form1">
                                <h5 id="output_title">Phí dịch vụ </h5>
                            </div>
                            <div className="option">
                                <h5 className="form4">Chuyển phát nhanh </h5>
                                <h5 className="form4">{{price} * 2} </h5>
                                <h5 className="form4">2-3 ngày </h5>
                            </div>
                            <div className="option">
                                <h5 className="form4">Chuyển phát tiết kiệm </h5>
                                <h5 className="form4">{price} </h5>
                                <h5 className="form4">4-6 ngày </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Chiphi;