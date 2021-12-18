import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import axios from 'axios';
const SRTIPE_KEY = "pk_test_51K6sEKLRwHthzQXWbRsgr75mXuxZZPyuNpagslzOVqc3XFotUKrYH2PAj0pzuYMa6XGIabtnCvVVkN6CvaOGwktE00mIuZpR50";

const PaymentForm = () => {

    // const[stripeToken, setStripeToken] = useState(null);

    // const onToken = (token)=>{
    //     setStripeToken(token);
    // };

    // useEffect(() =>{
    //     const makeRequest = async () =>{
    //         try{
    //             const res = await axios.post("http://localhost:3500/api/checkout/payment", {
    //                 tokenId: stripeToken.id,
    //                 amount: 2000,

    //             });
    //             console.log(res.data);
    //         }
    //         catch(err){
    //             console.log(err);
    //         }
    //     };
    //     stripeToken && makeRequest()
    // }, [stripeToken]);

    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card:elements.getElement(CardElement)
        })

        if(!error){
            try{
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:3500/api/checkout/payment", {
                    amount:2000,
                    id
                })

                if(response.data.success){
                    console.log("successful payment");
                    setSuccess(true);
                }
            }

            catch(error){
                console.log("error", error);
            }
        }
        else{
            console.log(error.message);
        }
    }

    return (
        <>
            {!success ?
            <form onSubmit={handleSubmit}>
                        <div
                        style={{
                            height:"100vh",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center"
                        }}
                        >
                            <CardElement/>
                        </div>
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
            </form>
                    :
                    <div>
                        <h2>Payment Successful</h2>
                    </div>
        }
        </>
    )
}

export default PaymentForm
