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
    
    const [products, setProducts] = useState([]); //product state
    const [filteredProducts, setFilteredProducts] = useState([]); //filter state

    useEffect(() =>{
        const getProducts = async ()=>{
            try{
                const res = await axios.get(cat ? `http://localhost:3500/api/products?category=${cat}` 
                : `http://localhost:3500/api/products`);   //if there is any category redirect to the relevent category page
                //else, redirect to the all products page
                //(axios is the HTTP client for nodeJS)
                
                setProducts(res.data); //set the status
            }
            catch(err){

            }
        };
        getProducts();// call the getPeoducts function
    }, [cat]);

    useEffect(() =>{ // filter useEffect

        cat && setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
            )) //
        )
    }, [cat, filters,products] ); //dependencies

    useEffect(()=>{ //newst filter useEffect
        if(sort=== "newest"){ //sort as newst products
            setFilteredProducts(prev =>
                [...prev].sort((a,b) => a.createdAt - b.createdAt) // substract the created dates and get the latest products
            );
        }
        else if(sort === "asc"){
            setFilteredProducts(prev =>
                [...prev].sort((a,b) => a.price - b.peice) // substract the product prices and get the chippest product 
            );
        }
        else{
            setFilteredProducts(prev =>
                [...prev].sort((a,b) => b.price - a.price) //substract the product prices and get the expensive product
            );
        }
    })
    return (
        <Container>
            {cat ? 
            filteredProducts.map((item) =><Product item={item} key={item.id}/>)
            : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)}
        </Container> // map the product items 
    )
}

export default Products
