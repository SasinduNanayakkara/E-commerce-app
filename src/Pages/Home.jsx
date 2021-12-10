import React from 'react'
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider"
import Categories from '../components/Categories';
import Product from '../components/Products';
import NewsLetter from '../components/NewsLetter';

const Home = () =>{
    return (
        <div>
            <Announcement/>
            <NavBar/>
            <Slider/>
            <Categories/>
            <Product/>
            <NewsLetter/>
        </div>
    )
}
export default Home
