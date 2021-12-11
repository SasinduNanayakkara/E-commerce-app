import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Product from './Product';
const Container = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`;

const Products = ({item}) => {
    return (
        <Container>
            {popularProducts.map((item) =>(
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Products
