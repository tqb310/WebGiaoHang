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
} from './TracuuElements';

const Tracuu = () => {
    return(
        <>
            <Container>
                <FormWrap>
                    
                    <FormContent>
                        
                        <Form action='#'>
                        <Icon to='/'>delivery</Icon>
                            <FormH1>Tra cứu hành trình đơn hàng</FormH1>
                            <FormLabel htmlFor='for'>Mã phiếu gửi</FormLabel>
                            <FormInput type='input' required />
                           
                            <FormButton type='submit'>Tra cứu</FormButton>
                            
                            
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}
export default Tracuu;