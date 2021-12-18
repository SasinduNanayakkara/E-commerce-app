import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const SRTIPE_KEY = "pk_test_51K6sEKLRwHthzQXWbRsgr75mXuxZZPyuNpagslzOVqc3XFotUKrYH2PAj0pzuYMa6XGIabtnCvVVkN6CvaOGwktE00mIuZpR50";

const PaymentForm = () => {

    const[stripeToken, setStripeToken] = useState(null);

    const onToken = (token)=>{
        setStripeToken(token);
    };

    useEffect(() =>{
        const makeRequest = async () =>{
            try{
                const res = axios.post("http://localhost:3500/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000,

                });
                console.log(res.data);
            }
            catch(err){
                console.log(err);
            }
        };
        stripeToken && makeRequest()
    }, [stripeToken]);

    return (
        <div
            style={{
                height:"100vh",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }}
        >
            <StripeCheckout
                name="Lady J Fashion"
                image='https://www.lankayp.com/img/lk/s/1462528492_22717.jpg'
                billingAddress
                shippingAddress
                description='Your total is $20'
                amount={2000}
                token={onToken}
                stripeKey={SRTIPE_KEY}
            >

        <button
            style={{
                border:"none",
                width:120,
                borderRadius:5,
                padding:"20px",
                backgroundColor:"black",
                color:"white",
                fontWeight:600,
                cursor:"pointer"
            }}
            >Pay</button>
            
            </StripeCheckout>
        </div>
    )
}

export default PaymentForm
