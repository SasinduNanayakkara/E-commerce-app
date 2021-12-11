import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(
    rgba(255,255,255, 0.5),
    rgba(255,255,255, 0.5)
), url("https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?size=626&ext=jpg&ga=GA1.2.2008272138.1632268800");
display:flex;
align-items:center;
justify-content:center;
background-size: cover;

`;
const Wrapper = styled.div`
width:40%;
padding:20px;
background-color:white;
`;
const Form = styled.form`
display:flex;
flex-wrap:wrap;
`;
const Title = styled.span`
font-size:24px;
font-weight:200;
`;
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`;
const Agreement = styled.span`
font-size:12px;
margin: 20px 0px;
`;
const Button = styled.button`
width:40%;
border:none;
padding:10px 20px;
background-color:teal;
color:white;
cursor:pointer;
`;
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="first name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="email"/>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement>
                        By create an account, I consent to the processing of my personal data according with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE </Button>

                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
