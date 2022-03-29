import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    Form2,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Parent,
    _Label,
    Form3
} from './TracuuElements';
import axios from 'axios';
import { getDetail } from './API/tracuu';
import { useState } from 'react';

const Tracuu = () => {
    const [donhang, set_donhang] = useState('')
    const [resuilt, set_resuilt] = useState('')
    const [name, set_name] = useState('')
    const changeInput = (event) => {
        set_donhang(event.target.value)
    }
    const tracuu = async () => {
        try {
            const data = await getDetail(donhang)
            set_resuilt(data)  
            set_name(data.khnhan.name)
            console.log(data)
        } catch (error) {
            alert('Đơn hàng không tồn tại')
        }
    }
    return(
        <>
            <Parent>
                <Container>
                    <FormWrap>
                        
                        <FormContent>
                            
                            <Form action='#'>
                            <Icon to='/'>delivery</Icon>
                                <FormH1>Tra cứu hành trình đơn hàng</FormH1>
                                <FormLabel htmlFor='for'>Mã phiếu gửi</FormLabel>
                                <FormInput type='input' onChange={changeInput} required />
                            
                                <FormButton onClick={tracuu} type='button'>Tra cứu</FormButton>
                                
                                
                            </Form>
                        </FormContent>
                    </FormWrap>
                    
                </Container>
                <Form3>
                    <_Label>
                        <p>Mã phiếu gửi</p>
                        <p>{donhang}</p>
                    </_Label>
                    <_Label>
                        <p>Chi phí</p>
                        <p>{resuilt.chiphi}</p>
                    </_Label>
                    <_Label>
                        <p>Người nhận</p>
                        <p>{name}</p>
                    </_Label>
                    <_Label>
                        <p>Địa chỉ</p>
                        <p>{resuilt.diachinhan}</p>
                    </_Label>
                    <_Label>
                        <p>Trạng thái</p>
                        <p>{resuilt.trangthai}</p>
                    </_Label>
                </Form3>
            </Parent>
        </>
    )
}
export default Tracuu;