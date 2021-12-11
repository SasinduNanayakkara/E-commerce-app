import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import NewsLetter from '../components/NewsLetter';

const Container = styled.div`

`;

const Product = () => {
    return (
        <Container>
            <Announcement/>
            <NavBar/>
                <Wrapper>
                    <ImageContainer>
                        <Image src="https://assets.ajio.com/medias/sys_master/root/h09/hcd/12085139111966/-1117Wx1400H-440794191-mediumblue-MODEL.jpg"/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title></Title>
                        <Description></Description>
                        <Price></Price>
                    </InfoContainer>
                </Wrapper>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default Product
