import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import {Link} from "react-router-dom";
import { context } from '../../AuthContext/AuthContext';
import BookingsDetails from '../../Pages/BookingsDetails/BookingsDetails';
// import services from "../Services/booking.json"

const Booking = ({ service }) => {
    const { name, price, FlyingTime, image, _id } = service;
    const {user, setService} = useContext(context);

    const getBookingId = (service) => {
        console.log(service);
        setService(service);
        
    }

    return (
        <div className='flex justify-center items-center'>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 justify-center items-center'>
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
                        <Link to={user?.email ? `/bookings-details/${_id}` : '/login'}><button onClick={() => getBookingId(service)} className="btn bg-gradient-to-r from-cyan-500 to-blue-900 text-white rounded-lg mx-5 w-52 font-bold">Booking</button></Link>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default Booking;