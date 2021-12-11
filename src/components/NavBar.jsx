import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
height:60px;
`;

const Left = styled.div`
flex:1
display:flex;
align-items:center;
`
const Center = styled.div`
flex:1;
text-align:center;
padding-left:270px;
`

const Logo = styled.h1`
font-wight:bold;
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`

const Language = styled.span`
font-size:14px;
cursor:pointer;
`;

const SearchContainer = styled.div`
border: 1px solid lightgray;
align-items:center;
margin-left:25px;
padding:5px;
`;

const Input = styled.input`
border:none;
`

const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`

const MenuItems = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
`
const NavBar = () => {
    return (
        <Container>
            <Wrapper>
            <Left>
                <Language>EN</Language>
            
            </Left>
            <SearchContainer>
                <Input/>
                <SearchIcon style={{color:"gray", fontSize:16}}/>

            </SearchContainer>
            <Center><Logo>Sasindu</Logo></Center>
            <Right>
                <MenuItems>REGISTER</MenuItems>
                <MenuItems>SIGN IN</MenuItems>
                <MenuItems>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </MenuItems>

            </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar
