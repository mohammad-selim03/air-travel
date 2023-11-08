import React, { useState } from 'react';
import { FaAvianex, FaCat, FaChild, FaMoneyBillAlt, FaPray, FaToolbox, FaUserAlt, FaUserMd, FaUserTie, FaUsers, FaWineGlassAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { SlCup, SlPeople } from "react-icons/sl";


const BookingsDetails = () => {
    const booking = useLoaderData();
    const { name, price, image, FlyingTime } = booking;

    const [counter, setCounter] = useState(1);


    const increaseNumber = () => {
        setCounter((val) => val + 1);
        console.log(counter);
    }
    
    const decreaseNumber = () => {
        setCounter((val) => val - 1);
        // totalPrice(val);
        if(counter === 0){
            return;
        }
    }
    
   let totalPrice = counter * price;

    return (
        <div>
            <div className='flex mx-auto'>
                <img className='h-96 w-full' src={image} alt="" />
            </div>
            <div className="grid grid-cols-2 mt-5 mb-5">
                <div>
                    <h2 className="text-2xl font-bold ml-5">Our Services</h2>
                    <ol className='font-semibold mt-9 space-y-2 text-xl'>
                        <li className='flex items-center'><SlCup className='mx-3 text-lg text-blue-700 font-bold' /> 1 time snack and heavy food</li>
                        <li className='flex items-center'><FaWineGlassAlt className='mx-3 text-xl text-blue-700 font-bold' /> Complimentory Drinks</li>
                        <li className='flex items-center'><FaCat className='mx-3 text-lg text-blue-800 font-bold' /> Pet Allowed</li>
                        <li className='flex items-center'><FaUserAlt className='mx-3 text-lg text-blue-800 font-bold' /> Bussiness and Economy Class</li>
                        <li className='flex items-center'><FaPray className='mx-3 text-lg text-blue-800 font-bold' /> Prayer place</li>
                        <li className='flex items-center'><FaChild className='mx-3 text-lg text-blue-800 font-bold' /> Free travel for bellow 2 years children</li>
                        <li className='flex items-center'><FaUserTie className='mx-3 text-lg text-blue-800 font-bold' /> Best Pilots and Gentle Cabin Crue</li>
                        <li className='flex items-center'><FaUserMd className='mx-3 text-lg text-blue-800 font-bold' /> Free Primary Treatment</li>
                    </ol>
                </div>
                <div>
                    <h1 className="mb-5 text-3xl font-bold">{name}</h1>
                    <p className="mb-5 font-semibold text-xl">Enjoy the best experience with us. We care our customer comfort and provide the best services.</p>
                    <h4 className="text-lg font-semibold flex items-center"><FaAvianex className='text-2xl text-blue-700' /> <span className="ml-3">Flying Time : {FlyingTime}</span></h4>
                    <h3 className="text-lg font-semibold mb-2 flex items-center"><FaUsers className='text-2xl text-blue-800 mr-3' /> Number of Members : <span className='text-3xl mx-3'>
                        <button onClick={decreaseNumber} className='bg-red-800 text-white mt-2 w-12 h-10 rounded-2xl'>-</button>
                        <button className='ml-2'>{counter}</button>
                        <button onClick={increaseNumber} className='mx-3 bg-green-800 text-white w-12 h-10 rounded-2xl'>+</button></span> </h3>
                    <h3 className="text-xl font-semibold mb-5 flex items-center"><FaMoneyBillAlt className='mr-3 text-2xl text-blue-800' /> Price : {totalPrice}</h3>
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-800 border-blue-700 rounded font-bold text-white mt-3 mb-3">proceed to Payment</button>
                </div>
            </div>
        </div>
    );
};

export default BookingsDetails;