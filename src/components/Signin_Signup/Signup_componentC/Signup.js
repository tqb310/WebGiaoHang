import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    NavLinks,
    Text
} from './SignupElements';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    
                    <FormContent>
                        
                        <Form action='#'>
                        <Icon to='/'>delivery</Icon>
                            <FormH1>Đăng kí tài khoản mới</FormH1>
                            <FormLabel htmlFor='for'>Tài khoản</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Mật khẩu</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Xác nhận mật khẩu</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Tiếp tục</FormButton>
                            <FormLabel>Đã có tài khoản?</FormLabel>
                            <NavLinks to='signin'>Đăng nhập</NavLinks>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}
export default SignIn;