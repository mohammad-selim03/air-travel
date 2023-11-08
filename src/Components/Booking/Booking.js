import React from 'react';
import { FaStar } from 'react-icons/fa';
import {Link} from "react-router-dom";

const Booking = ({ service }) => {
    const { name, price, FlyingTime, image, _id } = service;

    const getBookingId = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/bookings-details/${_id}`, {
            method: 'GET',
            headers:{
                
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        
    }

    return (
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-28'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <span className='flex text-red-700'><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /></span>
                    <h2 className="card-title font-bold">{name}</h2>
                    <h2 className="card-title font-bold">Flying Time : {FlyingTime}</h2>
                    <p className='font-bold text-orange-700'>Price : {price}</p>
                    <div className="card-actions">
                        <Link to={`/bookings-details/${_id}`}><button onClick={() => getBookingId(_id)} className="btn bg-gradient-to-r from-cyan-500 to-blue-900 text-white rounded-lg mx-5 w-52 font-bold">Booking</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;