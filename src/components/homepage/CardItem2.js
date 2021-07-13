import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import './CardItem2.css'
function CardItem2(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link v2'>
            <div className="wrapper ">
              <div className="card_estimate_table">
                <h3 className="form_title">Ước tính chi phí</h3>
                <div className="form1">
                  <h4>Gửi từ</h4>
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
                <div className="form2">
                  <h4>Gửi đến</h4>
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
                <div className="form3">
                  <h4>Trọng lượng (Gram) </h4>
                  <input className="gram_input" type="text" placeholder="Gram"></input>
                </div>
                <div className='btn_wrap'>
                  <button type="button" className="btn btn-primary card_btn">{props.text}</button>
                </div>
              </div>
            </div>
        </div>
      </li>
      
    </>
  );
}

export default CardItem2;
