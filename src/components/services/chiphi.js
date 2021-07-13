import React from 'react'
import './chiphi.css'
import { Form } from 'react-bootstrap';


const Chiphi = () => {
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
                                    <Form.Control as="select">
                                        <option >Chọn Tỉnh/TP</option>
                                        <option>An Giang</option>
                                        <option>Bà Rịa-Vũng Tàu</option>
                                        <option>Bạc Liêu</option>
                                        <option>Bắc Kạn</option>
                                        <option>Bắc Giang</option>
                                        <option>Bắc Ninh</option>
                                        <option>Bến Tre</option>
                                        <option>Bình Dương</option>
                                        <option>Bình Định</option>
                                        <option>Bình Phước</option>
                                        <option>Bình Thuận</option>
                                        <option>Cà Mau</option>
                                        <option>Cao Bằng</option>
                                        <option>Cần Thơ (TP)</option>
                                        <option>Đà Nẵng (TP)</option>
                                        <option>Đắk Lắk</option>
                                        <option>Đắk Nông</option>
                                        <option>Điện Biên</option>
                                        <option>Đồng Nai</option>
                                        <option>Đồng Tháp</option>
                                        <option>Gia Lai</option>
                                        <option>Hà Giang</option>
                                        <option>Hà Nam</option>
                                        <option>Hà Nội (TP)</option>
                                        <option>Hà Tây</option>
                                        <option>Hà Tĩnh</option>
                                        <option>Hải Dương</option>
                                        <option>Hải Phòng (TP)</option>
                                        <option>Hòa Bình</option>
                                        <option>Hồ Chí Minh (TP)</option>
                                        <option>Hậu Giang</option>
                                        <option>Hưng Yên</option>
                                        <option>Khánh Hòa</option>
                                        <option>Kiên Giang</option>
                                        <option>Kon Tum</option>
                                        <option>Lai Châu</option>
                                        <option>Lào Cai</option>
                                        <option>Lạng Sơn</option>
                                        <option>Lâm Đồng</option>
                                        <option>Long An</option>
                                        <option>Nam Định</option>
                                        <option>Nghệ An</option>
                                        <option>Ninh Bình</option>
                                        <option>Ninh Thuận</option>
                                        <option>Phú Thọ</option>
                                        <option>Phú Yên</option>
                                        <option>Quảng Bình</option>
                                        <option>Quảng Nam</option>
                                        <option>Quảng Ngãi</option>
                                        <option>Quảng Ninh</option>
                                        <option>Quảng Trị</option>
                                        <option>Sóc Trăng</option>
                                        <option>Sơn La</option>
                                        <option>Tây Ninh</option>
                                        <option>Thái Bình</option>
                                        <option>Thái Nguyên</option>
                                        <option>Thanh Hóa</option>
                                        <option>Thừa Thiên – Huế</option>
                                        <option>Tiền Giang</option>
                                        <option>Trà Vinh</option>
                                        <option>Tuyên Quang</option>
                                        <option>Vĩnh Long</option>
                                        <option>Vĩnh Phúc</option>
                                        <option>Yên Bái</option>
                                    </Form.Control>
                                    </div>
                                    <div className="form1">
                                        <h5>Gửi đến</h5>
                                        <Form.Control as="select">
                                            <option >Chọn Tỉnh/TP</option>
                                            <option>An Giang</option>
                                            <option>Bà Rịa-Vũng Tàu</option>
                                            <option>Bạc Liêu</option>
                                            <option>Bắc Kạn</option>
                                            <option>Bắc Giang</option>
                                            <option>Bắc Ninh</option>
                                            <option>Bến Tre</option>
                                            <option>Bình Dương</option>
                                            <option>Bình Định</option>
                                            <option>Bình Phước</option>
                                            <option>Bình Thuận</option>
                                            <option>Cà Mau</option>
                                            <option>Cao Bằng</option>
                                            <option>Cần Thơ (TP)</option>
                                            <option>Đà Nẵng (TP)</option>
                                            <option>Đắk Lắk</option>
                                            <option>Đắk Nông</option>
                                            <option>Điện Biên</option>
                                            <option>Đồng Nai</option>
                                            <option>Đồng Tháp</option>
                                            <option>Gia Lai</option>
                                            <option>Hà Giang</option>
                                            <option>Hà Nam</option>
                                            <option>Hà Nội (TP)</option>
                                            <option>Hà Tây</option>
                                            <option>Hà Tĩnh</option>
                                            <option>Hải Dương</option>
                                            <option>Hải Phòng (TP)</option>
                                            <option>Hòa Bình</option>
                                            <option>Hồ Chí Minh (TP)</option>
                                            <option>Hậu Giang</option>
                                            <option>Hưng Yên</option>
                                            <option>Khánh Hòa</option>
                                            <option>Kiên Giang</option>
                                            <option>Kon Tum</option>
                                            <option>Lai Châu</option>
                                            <option>Lào Cai</option>
                                            <option>Lạng Sơn</option>
                                            <option>Lâm Đồng</option>
                                            <option>Long An</option>
                                            <option>Nam Định</option>
                                            <option>Nghệ An</option>
                                            <option>Ninh Bình</option>
                                            <option>Ninh Thuận</option>
                                            <option>Phú Thọ</option>
                                            <option>Phú Yên</option>
                                            <option>Quảng Bình</option>
                                            <option>Quảng Nam</option>
                                            <option>Quảng Ngãi</option>
                                            <option>Quảng Ninh</option>
                                            <option>Quảng Trị</option>
                                            <option>Sóc Trăng</option>
                                            <option>Sơn La</option>
                                            <option>Tây Ninh</option>
                                            <option>Thái Bình</option>
                                            <option>Thái Nguyên</option>
                                            <option>Thanh Hóa</option>
                                            <option>Thừa Thiên – Huế</option>
                                            <option>Tiền Giang</option>
                                            <option>Trà Vinh</option>
                                            <option>Tuyên Quang</option>
                                            <option>Vĩnh Long</option>
                                            <option>Vĩnh Phúc</option>
                                            <option>Yên Bái</option>
                                        </Form.Control>
                                    </div>
                                    <div className="form1">
                                        <h5>Trọng lượng (Gram) </h5>
                                        <input className="gram_input" type="text" placeholder="Gram"></input>
                                    </div>
                                    <div className="form1">
                                        <button type='submit' className="_btn_tinhtien">Tra cứu</button>
                                    </div>
                            </div>
                        </div>
                        <div className="output_wrapper">
                            <div className="form1">
                                <h5 id="output_title">Phí dịch vụ </h5>
                            </div>
                            <div className="option">
                                <h5 className="form4">Chuyển phát nhanh </h5>
                                <h5 className="form4">100.000 VND </h5>
                                <h5 className="form4">2-3 ngày </h5>
                            </div>
                            <div className="option">
                                <h5 className="form4">Chuyển phát tiết kiệm </h5>
                                <h5 className="form4">90.000 VND </h5>
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