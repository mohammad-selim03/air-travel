import React, { useState } from 'react';
import { FaAvianex, FaCat, FaPray, FaToolbox, FaUserAlt, FaUserMd, FaUserTie, FaUsers, FaWineGlassAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { SlCup, SlPeople } from "react-icons/sl";


const BookingsDetails = () => {
    const booking = useLoaderData();
    const { name, price, image, FlyingTime } = booking;

    const [counter, setCounter] = useState(1);

    const increaseNumber = () => {
        setCounter((val) => val + 1);
    }

    const decreaseNumber = () => {
        setCounter((val) => val - 1);
    }


    return (
        <div>
            <div className='flex mx-auto'>
                <img className='h-96 w-full' src={image} alt="" />
            </div>
            <div className="grid grid-cols-2 mt-5 mb-5">
                <div>
                    <h2 className="text-2xl font-bold">Our Services</h2>
                    <ol className='font-semibold'>
                        <li className='flex items-center'><SlCup className='mx-3 text-lg text-blue-700 font-bold' /> 1 time snack and heavy food</li>
                        <li className='flex items-center'><SlCup className='mx-3 text-lg text-blue-700 font-bold' /><FaWineGlassAlt/> Complimentory Drinks</li>
                        <li className='flex items-center'><FaCat  className='mx-3 text-lg text-blue-800 font-bold' /> Pet Allowed</li>
                        <li><FaUserAlt /> Bussiness and Economy Class</li>
                        <li><FaPray/> Prayer place</li>
                        <li>Free travel for bellow 2 years children</li>
                        <li><FaUserTie /> Best Pilots and Gentle Cabin Crue</li>
                        <li><FaUserMd /> Free Primary Treatment</li>
                    </ol>
                </div>
                <div>
                    <h1 className="mb-5 text-3xl font-bold">{name}</h1>
                    <p className="mb-5 font-semibold">Enjoy the best experience with us. We care our customer comfort and provide the best services.</p>
                    <h4 className="text-lg font-semibold "><FaAvianex/> Flying Time : {FlyingTime}</h4>
                    <h3 className="text-lg font-semibold mb-2 "><FaUsers/> Number of Members : <span className='text-3xl mx-3'>
                        <button onClick={decreaseNumber} className='bg-red-700  w-7 h-10 rounded-2xl'>-</button>
                        <button className='ml-2'>{counter}</button>
                        <button onClick={increaseNumber} className='mx-3 bg-blue-700 w-7 h-10 rounded-2xl'>+</button></span> </h3>
                    <h3 className="text-xl font-semibold mb-5">Price : {price}</h3>
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-800 border-blue-700 rounded font-bold text-white mt-3 mb-3">proceed to Payment</button>
                </div>
            </div>
        </div>
    );
};

export default BookingsDetails;