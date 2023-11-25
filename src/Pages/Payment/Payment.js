import { CardElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { context } from '../../AuthContext/AuthContext';



const Payment = ({booking}) => {

    const navigate = useNavigate();
    const {service} = useContext(context);
    
    
const {_id} = service;

    const handlePay = () => {
        toast.success("Payment Successfull.!");
        toast('Thanks for choosing AirVel. Enjoy your air ride.')
        navigate('/');
    }
    const pay = (_id) => {
        console.log(_id);
    }


    return (
        <div className='w-[430px] mx-auto'>
            {/* stripe codes */}
            <div className='w-[400px] mt-5 ml-auto bg-slate-200 rounded-xl'>
                <form className='mx-auto' onSubmit={pay}>
                    <CardElement required className='bg-sky-700 p-5 rounded-xl'
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
                            className='btn mt-4 font-bold bg-green-700 border-green-400 text-white w-32 '
                            type="submit"
                            onClick={() => handlePay(_id)}
                            disabled={CardElement.options === null}
                            >
                            Pay
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Payment;