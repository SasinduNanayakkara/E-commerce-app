import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Container = styled.div`
`;
const Wrapper = styled.div`
padding:20px;
`;
const Title = styled.h1`
font-weight:300;
text-align:center;
`;
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`;
const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ?  "black" : "transparent"};
color: ${props=>props.type === "filled" && "white"};
`;

const Bottom = styled.div`
display:flex;
justify-content:space-between;
`;
const TopTexts = styled.div`
`;
const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin: 0px 10px;
`;
const Info = styled.div`
flex:3;
`;
const Summary = styled.div`
flex:1;
border: 0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`;
const Product = styled.div`
display:flex;
justify-content:space-between;
`;
const ProductDetails = styled.div`
flex:2;
display:flex;
`;
const Image = styled.img`
width:300px;
`;
const Details = styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`;
const ProductName = styled.span`

`;
const ProductId = styled.span`

`;
const ProductColor = styled.div`
width:30px;
height:30px;
border-radius:50%;
background-color: ${props=>props.color}
`;
const ProductSize = styled.div`

`;
const PriceDetails = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`;
const ProductAmount = styled.div`
font-size:20px;
margin:5px;
`;
const ProductPrice = styled.div`
font-size:30px;
font-weight:200;
`;
const Hr = styled.hr`
background-color:#eee;
border:none;
height:1px;
`;
const SummaryTitle = styled.h1`
font-weight:200;
`;
const SummaryItems = styled.div`
margin: 30px 0px;
display:flex;
justify-content:space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`

`;
const SummaryItemPrice = styled.span`

`;
const SummaryItemButton = styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;
`;
const Cart = () => {
    return (
        <Container>
            <Announcement/>
            <NavBar/>
                <Wrapper>
                    <Title>YOUR BAG</Title>
                    <Top>
                        <TopButton>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shopping bag (2)</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                        <TopButton type="filled">CHECKOUT NOW</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            <Product>
                                <ProductDetails>
                                    <Image src="http://cdn.shopify.com/s/files/1/0418/6000/6041/products/14274970-6b88-48e6-89e4-0f0e4651e8bb.jpg?v=1596263677"/>
                                    <Details>
                                        <ProductName><b>Product: </b> JESSIE THUNDER SHOES</ProductName>
                                        <ProductId><b>Product ID: </b> 14568669</ProductId>
                                        <ProductColor color="gray"/>
                                        <ProductSize><b>Size: </b> 37.5</ProductSize>
                                    </Details>
                                </ProductDetails>
                                <PriceDetails>
                                    <ProductAmountContainer>
                                        <Add/>
                                        <ProductAmount>2</ProductAmount>
                                        <Remove/>
                                    </ProductAmountContainer>
                                    <ProductPrice>Rs. 6000/=</ProductPrice>
                                </PriceDetails>
                            </Product>
                            <Hr/>
                            <Product>
                                <ProductDetails>
                                    <Image src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6720057111727?fmt=jpeg&qlt=90&wid=652&hei=652"/>
                                    <Details>
                                        <ProductName><b>Product: </b> SPIDERMAN VENOM T-SHIRT</ProductName>
                                        <ProductId><b>Product ID: </b> 185684893</ProductId>
                                        <ProductColor color="black"/>
                                        <ProductSize><b>Size: </b> M </ProductSize>
                                    </Details>
                                </ProductDetails>
                                <PriceDetails>
                                    <ProductAmountContainer>
                                        <Add/>
                                        <ProductAmount>2</ProductAmount>
                                        <Remove/>
                                    </ProductAmountContainer>
                                    <ProductPrice>Rs. 3200/=</ProductPrice>
                                </PriceDetails>
                            </Product>
                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItems>
                                <SummaryItemText>SubTotal</SummaryItemText>
                                <SummaryItemPrice>Rs. 9200/=</SummaryItemPrice>
                            </SummaryItems>
                            <SummaryItems>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>Rs. 1200/=</SummaryItemPrice>
                            </SummaryItems>
                            <SummaryItems>
                                <SummaryItemText>Shipping discount</SummaryItemText>
                                <SummaryItemPrice>Rs. -1200/=</SummaryItemPrice>
                            </SummaryItems>
                            <SummaryItems type="total">
                                <SummaryItemText >Total</SummaryItemText>
                                <SummaryItemPrice>Rs. 9200/=</SummaryItemPrice>
                            </SummaryItems>
                            <SummaryItemButton>CHECKOUT NOW</SummaryItemButton>
                        </Summary>
                    </Bottom>
                </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
