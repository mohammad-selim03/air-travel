import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from '../../AuthContext/AuthContext';




const Payment = ({booking}) => {
    const { name, price, _id} = booking;
    const {user} = useContext(context);


    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(booking),

        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result.clientSecret)
                setClientSecret(result.clientSecret)
            });
    }, [booking]);

    const handleSubmit = async (event) => {
        

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
git add .
git commit -m "none"
git push
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: user?.email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            // store payment info in the database
            const payment = {
                price,
                transactionId: paymentIntent.id,
                bookingId: _id
            }
            fetch('https://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess();
                        // toast.success('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                        navigate('/');
                    }
                })
        }
    }


    return (
        <div>
            {/* stripe codes */}
            <div className='w-[500px]  bg-slate-200 p-10  rounded-xl lg:ml-60 ml-5 md:ml-40'>
                <form onSubmit={handleSubmit} className='mx-auto'>
                    <CardElement className='bg-sky-700 p-5 rounded-xl'
                        options={{
                            style: {
                                base: {
                                    fontSize: '18px',
                                    color: '#281A17',
                                    fontWeight: 'bold',
                                    '::placeholder': {
                                        color: 'white',
                                    },
                                },
                                invalid: {
                                    color: '#F3E2DF',
                                    fontWeight: 'bold',
                                },
                            },
                        }}
                    />
                    <div className='flex justify-center items-center mt-5'>
                        <button
                            className='btn mt-4 font-bold bg-green-700 text-white w-32 '
                            type="submit"
                            disabled={!stripe || !clientSecret || processing}>
                            Pay
                        </button>
                    </div>
                </form>
                <p className="text-red-500">{cardError}</p>
                {
                    success && <div className='mt-9 text-center'>
                        <p>Your transactionId: <span className='font-bold'>
                            {transactionId}
                        </span></p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Payment;