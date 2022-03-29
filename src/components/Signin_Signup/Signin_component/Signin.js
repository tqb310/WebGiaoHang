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
} from './SigninElements';

const SignIn = () => {
    const abc = () => {
        
    }
    return (
        <>
            <Container>
                <FormWrap>
                    
                    <FormContent>
                        
                        <Form action='#'>
                        <Icon to='/'>delivery</Icon>
                            <FormH1>Đăng nhập vào tài khoản của bạn</FormH1>
                            <FormLabel htmlFor='for'>Tài khoản</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Mật khẩu</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit' onClick={abc}>Đăng nhập</FormButton>
                            <NavLinks to='signup'>Quên mật khẩu?</NavLinks>
                            <FormLabel>Chưa có tài khoản? <NavLinks to='signup'> Đăng kí</NavLinks></FormLabel>
                            
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}
export default SignIn;