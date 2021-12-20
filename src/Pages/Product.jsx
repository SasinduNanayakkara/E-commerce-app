import { Add, Remove } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import NewsLetter from '../components/NewsLetter';
import mobile from '../Responsive';
import { publicRequest } from './RequestMethod';

const Container = styled.div`

`;
const ImageContainer = styled.div`
flex:1;
`;
const Image = styled.img`
width:100%;
height:100vh;
${mobile({height:"40%"})};
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
${mobile({padding:"10px"})};
`;
const Wrapper = styled.div`
padding:50px;
display:flex;
${mobile({padding:"10px%", flexDirection:"column"})};
`;
const FilterContainer = styled.div`
display:flex;
width:50%;
margin:30px 0px;
justify-content:space-between;
${mobile({width:"100%"})};
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
${mobile({width:"100%"})};
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

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setquantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    useEffect(() =>{
        const getProduct = async () =>{
            try{
                const res = await publicRequest.get("/products/find/"+id);
                setProduct(res.data);
            }
            catch(err){

            }
        }
        getProduct()
    },[id]);

    const handleQuantity = (type) =>{
        if (type === "dec") {
            quantity> 1 && setquantity(quantity - 1);
        }
        else{
            setquantity(quantity + 1);

        }
    };

    const handleClick = () =>{ 
        //update cart
        
    }

    return (
        <Container>
            <Announcement/>
            <NavBar/>
                <Wrapper>
                    <ImageContainer>
                        <Image src= {product.img}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{product.title}</Title>
                        <Description>{product.description}</Description>
                        <Price>Rs. {product.price}/=</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                {product.color?.map((c) =>(
                                    <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
                                ))}
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize onChange={(e) => setSize(e.target.value)}>
                                    {product.size?.map((s) =>(
                                        <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                    ))}
                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove onClick={() => handleQuantity("dec")}/>
                                <Amount>1</Amount>
                                <Add onClick={() => handleQuantity("inc")}/>
                            </AmountContainer>
                            <Button onClick={handleClick}>ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default Product
