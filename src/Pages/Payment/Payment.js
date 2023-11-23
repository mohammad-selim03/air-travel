import { CardElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



const Payment = ({booking}) => {

    const navigate = useNavigate();

    


    const handlePay = () => {
        toast.success("Payment Successfull.!");
        toast('Thanks for choosing AirVel. Enjoy your air ride.')
        
        navigate('/');
    }


    return (
        <div className='w-[430px] mx-auto'>
            {/* stripe codes */}
            <div className='w-[400px] mt-5 ml-auto bg-slate-200 rounded-xl'>
                <form className='mx-auto'>
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
                            onClick={handlePay}
                            >
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