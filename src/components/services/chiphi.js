import React, { useRef } from "react";
import "./chiphi.css";
import { Form } from "react-bootstrap";
import { define } from "../handle/rule.js";

const Chiphi = () => {
  const xRef = useRef();
  const yRef = useRef();
  const wRef = useRef();
  const estimate = () => {
    define(xRef.current.value, yRef.current.value, wRef.current.value, 1);
  };
  return (
    <>
      <div className="container1">
        <div className="form_wrap1">
          <h4 id="_title">Ước tính chi phí</h4>
          <div className="truck">
            <div className="input_wrapper">
              <div className="tinh_thanh">
                <div className="form1">
                  <h5>Gửi từ</h5>
                  <Form.Control as="select" ref={xRef}>
                    <option value="1">Chọn Tỉnh/TP</option>
                    <option value="2">An Giang</option>
                    <option value="3">Bà Rịa-Vũng Tàu</option>
                    <option value="4">Bạc Liêu</option>
                    <option value="5">Bắc Kạn</option>
                    <option value="6">Bắc Giang</option>
                    <option value="7">Bắc Ninh</option>
                    <option value="8">Bến Tre</option>
                    <option value="9">Bình Dương</option>
                    <option value="10">Bình Định</option>
                    <option value="11">Bình Phước</option>
                    <option value="12">Bình Thuận</option>
                    <option value="13">Cà Mau</option>
                    <option value="14">Cao Bằng</option>
                    <option value="15">Cần Thơ (TP)</option>
                    <option value="16">Đà Nẵng (TP)</option>
                    <option value="17">Đắk Lắk</option>
                    <option value="18">Đắk Nông</option>
                    <option value="19">Điện Biên</option>
                    <option value="20">Đồng Nai</option>
                    <option value="21">Đồng Tháp</option>
                    <option value="22">Gia Lai</option>
                    <option value="23">Hà Giang</option>
                    <option value="24">Hà Nam</option>
                    <option value="25">Hà Nội (TP)</option>
                    <option value="26">Hà Tây</option>
                    <option value="27">Hà Tĩnh</option>
                    <option value="28">Hải Dương</option>
                    <option value="29">Hải Phòng (TP)</option>
                    <option value="30">Hòa Bình</option>
                    <option value="31">Hồ Chí Minh (TP)</option>
                    <option value="32">Hậu Giang</option>
                    <option value="33">Hưng Yên</option>
                    <option value="34">Khánh Hòa</option>
                    <option value="35">Kiên Giang</option>
                    <option value="36">Kon Tum</option>
                    <option value="37">Lai Châu</option>
                    <option value="38">Lào Cai</option>
                    <option value="39">Lạng Sơn</option>
                    <option value="40">Lâm Đồng</option>
                    <option value="41">Long An</option>
                    <option value="42">Nam Định</option>
                    <option value="43">Nghệ An</option>
                    <option value="44">Ninh Bình</option>
                    <option value="45">Ninh Thuận</option>
                    <option value="46">Phú Thọ</option>
                    <option value="47">Phú Yên</option>
                    <option value="48">Quảng Bình</option>
                    <option value="49">Quảng Nam</option>
                    <option value="50">Quảng Ngãi</option>
                    <option value="51">Quảng Ninh</option>
                    <option value="52">Quảng Trị</option>
                    <option value="53">Sóc Trăng</option>
                    <option value="54">Sơn La</option>
                    <option value="55">Tây Ninh</option>
                    <option value="56">Thái Bình</option>
                    <option value="57">Thái Nguyên</option>
                    <option value="58">Thanh Hóa</option>
                    <option value="59">Thừa Thiên – Huế</option>
                    <option value="60">Tiền Giang</option>
                    <option value="61">Trà Vinh</option>
                    <option value="62">Tuyên Quang</option>
                    <option value="63">Vĩnh Long</option>
                    <option value="64">Vĩnh Phúc</option>
                    <option value="65">Yên Bái</option>
                  </Form.Control>
                </div>
                <div className="form1">
                  <h5>Gửi đến</h5>
                  <Form.Control as="select" ref={yRef}>
                    <option value="1">Chọn Tỉnh/TP</option>
                    <option value="2">An Giang</option>
                    <option value="3">Bà Rịa-Vũng Tàu</option>
                    <option value="4">Bạc Liêu</option>
                    <option value="5">Bắc Kạn</option>
                    <option value="6">Bắc Giang</option>
                    <option value="7">Bắc Ninh</option>
                    <option value="8">Bến Tre</option>
                    <option value="9">Bình Dương</option>
                    <option value="10">Bình Định</option>
                    <option value="11">Bình Phước</option>
                    <option value="12">Bình Thuận</option>
                    <option value="13">Cà Mau</option>
                    <option value="14">Cao Bằng</option>
                    <option value="15">Cần Thơ (TP)</option>
                    <option value="16">Đà Nẵng (TP)</option>
                    <option value="17">Đắk Lắk</option>
                    <option value="18">Đắk Nông</option>
                    <option value="19">Điện Biên</option>
                    <option value="20">Đồng Nai</option>
                    <option value="21">Đồng Tháp</option>
                    <option value="22">Gia Lai</option>
                    <option value="23">Hà Giang</option>
                    <option value="24">Hà Nam</option>
                    <option value="25">Hà Nội (TP)</option>
                    <option value="26">Hà Tây</option>
                    <option value="27">Hà Tĩnh</option>
                    <option value="28">Hải Dương</option>
                    <option value="29">Hải Phòng (TP)</option>
                    <option value="30">Hòa Bình</option>
                    <option value="31">Hồ Chí Minh (TP)</option>
                    <option value="32">Hậu Giang</option>
                    <option value="33">Hưng Yên</option>
                    <option value="34">Khánh Hòa</option>
                    <option value="35">Kiên Giang</option>
                    <option value="36">Kon Tum</option>
                    <option value="37">Lai Châu</option>
                    <option value="38">Lào Cai</option>
                    <option value="39">Lạng Sơn</option>
                    <option value="40">Lâm Đồng</option>
                    <option value="41">Long An</option>
                    <option value="42">Nam Định</option>
                    <option value="43">Nghệ An</option>
                    <option value="44">Ninh Bình</option>
                    <option value="45">Ninh Thuận</option>
                    <option value="46">Phú Thọ</option>
                    <option value="47">Phú Yên</option>
                    <option value="48">Quảng Bình</option>
                    <option value="49">Quảng Nam</option>
                    <option value="50">Quảng Ngãi</option>
                    <option value="51">Quảng Ninh</option>
                    <option value="52">Quảng Trị</option>
                    <option value="53">Sóc Trăng</option>
                    <option value="54">Sơn La</option>
                    <option value="55">Tây Ninh</option>
                    <option value="56">Thái Bình</option>
                    <option value="57">Thái Nguyên</option>
                    <option value="58">Thanh Hóa</option>
                    <option value="59">Thừa Thiên – Huế</option>
                    <option value="60">Tiền Giang</option>
                    <option value="61">Trà Vinh</option>
                    <option value="62">Tuyên Quang</option>
                    <option value="63">Vĩnh Long</option>
                    <option value="64">Vĩnh Phúc</option>
                    <option value="65">Yên Bái</option>
                  </Form.Control>
                </div>
                <div className="form1">
                  <h5>Trọng lượng (Gram) </h5>
                  <input
                    className="gram_input"
                    type="text"
                    placeholder="Gram"
                    ref={wRef}
                  ></input>
                </div>
                <div className="form1">
                  <button
                    type="button"
                    onClick={estimate}
                    className="_btn_tinhtien"
                  >
                    Tra cứu
                  </button>
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
  );
};
export default Chiphi;
