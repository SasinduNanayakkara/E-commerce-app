import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Facebook from '@mui/icons-material/Facebook';
import { MailOutline, Phone, Room } from '@material-ui/icons';

const Container = styled.div`
display:flex;
`;

const Logo = styled.h1`

`;
const SocialContainer = styled.div`
display:flex;
`;
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`;
const Description = styled.p`
margin:20px 0px;
`;


const Center = styled.div`
flex:1;
padding:20px;
`;
const Right = styled.div`
flex:1;
padding:20px;`;

const Title = styled.h3`
margin-bottom:30px;
`;

const List = styled.ul`
margin:0px;
padding:0px;
list-style:none;
display:flex;
flex-wrap:wrap;
`;

const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`;

const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`;

const Payment = styled.img`
width: 15%;
background-color:none;
padding-right:20px;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Sasindu</Logo>
                <Description>Below, we take a close look at what makes up an effective paragraph and explain how to write one that suits your needs. We also cover some advanced tips. But first, let’s start with the fundamentals. </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <TwitterIcon/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <PinterestIcon/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>WhishList</ListItem>
                    <ListItem>Terms</ListItem>
                    
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>
                    122, Kandy Road, Kiribathgoda
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>
                    +94 11 2 234 890
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>
                    ladyjfashion@email.com
                </ContactItem>
                <Payment src="https://e7.pngegg.com/pngimages/698/862/png-clipart-credit-card-logo-encapsulated-postscript-visa-eps-blue-cdr.png"/>
                <Payment src="https://newsupdatetimes.com/wp-content/uploads/2020/08/mastercard-png.jpg"/>
                <Payment src="https://img.favpng.com/21/5/13/american-express-logo-credit-card-payment-png-favpng-8tx6epUgjhQeNcJFzp5fhKgZQ.jpg"/>
            </Right>
        </Container>
    )
}

export default Footer
