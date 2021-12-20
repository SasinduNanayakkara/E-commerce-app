import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Product from './Product';
import axios from 'axios';
const Container = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`;

const Products = ({cat, filters, sort}) => {
    
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() =>{
        const getProducts = async ()=>{
            try{
                const res = await axios.get(cat ? `http://localhost:3500/api/products?category=${cat}` 
                : `http://localhost:3500/api/products`);
                
                setProducts(res.data);
            }
            catch(err){

            }
        };
        getProducts();
    }, [cat]);

    useEffect(() =>{

        cat && setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
            ))
        )
    }, [cat, filters,products]);

    useEffect(()=>{
        if(sort=== "newest"){
            setFilteredProducts(prev =>
                [...prev].sort((a,b) => a.createdAt - b.createdAt)    
            );
        }
        else if(sort === "asc"){
            setFilteredProducts(prev =>
                [...prev].sort((a,b) => a.price - b.peice)    
            );
        }
        else{
            setFilteredProducts(prev =>
                [...prev].sort((a,b) => b.price - a.price)    
            );
        }
    })
    return (
        <Container>
            {cat ? 
            filteredProducts.map((item) =><Product item={item} key={item.id}/>)
            : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)}
        </Container>
    )
}

export default Products
