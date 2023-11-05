import React from 'react';
import { FaPhoneAlt, FaRegCalendarAlt, FaSearchLocation } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className=' mt-20 bg-black text-white font-bold w-full p-16 flex justify-between items-center rounded-xl'>
            <div className='flex items-center'>
                <span className="text-4xl"><FaRegCalendarAlt/></span>
                <div className='mx-3'>
                    <p className='text-xs'>We are open 24 hours</p>
                    <h2 className="text-xl">6:00 am - 11:00 pm</h2>
                </div>
            </div>
            <div className='flex items-center'>
                <span className="text-4xl"><FaPhoneAlt/></span>
                <div className='mx-3'>
                    <p className='text-xs'>Have A Question?</p>
                    <h2 className="text-xl">+1254 645 1154 </h2>
                </div>
            </div>
            <div className='flex items-center'>
                <span className="text-4xl"><FaSearchLocation/></span>
                <div className='mx-3'>
                    <p className='text-xs'>Need a repair? our Address</p>
                    <h2 className="text-xl">Dhaka Gazipur Street, Dhaka, Bangladesh</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;