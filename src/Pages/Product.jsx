import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import NewsLetter from '../components/NewsLetter';

const Container = styled.div`

`;
const ImageContainer = styled.div`
flex:1;
`;
const Image = styled.img`
width:100%;
height:100vh;
`;
const Title = styled.h1`
font-weight:200;
`;
const Description = styled.p`
margin: 20px 0px;
`;
const Price = styled.span`
font-weight:100;
font-size:40px;
`;
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
`;
const Wrapper = styled.div`
padding:50px;
display:flex;
`;
const FilterContainer = styled.div`
display:flex;
width:50%;
margin:30px 0px;
justify-content:space-between;
`;
const Filter = styled.div`
display:flex;
align-items:center;
`;
const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`;
const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color: ${props=>props.color};
margin:0px 5px;
cursor:pointer;
`;
const FilterSize = styled.select`
margin-light:10px;
padding:5px;
`;
const FilterSizeOption = styled.option`

`;
const AddContainer = styled.div`
display:flex;
align-items:center;
width:50%;
justify-content:space-between;
`;
const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border: 1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`;
const Button = styled.button`
padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
    background-color: #f8f4f4;
}
`;
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
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
                        <Title>Denim Jumpsuit</Title>
                        <Description>Paragraph development begins with the formulation of the controlling idea. This idea directs the paragraph’s development. Often, the controlling idea of a paragraph will appear in the form of a topic sentence. In some cases, you may need more than one sentence to express a paragraph’s controlling idea.</Description>
                        <Price>Rs. 2800/=</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                <FilterColor color="black"/>
                                <FilterColor color="darkblue"/>
                                <FilterColor color="gray"/>
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize>
                                    <FilterSizeOption>XS</FilterSizeOption>
                                    <FilterSizeOption>S</FilterSizeOption>
                                    <FilterSizeOption>M</FilterSizeOption>
                                    <FilterSizeOption>L</FilterSizeOption>
                                    <FilterSizeOption>XL</FilterSizeOption>
                                    <FilterSizeOption>XXL</FilterSizeOption>
                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove/>
                                <Amount>1</Amount>
                                <Add/>
                            </AmountContainer>
                            <Button>ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default Product
