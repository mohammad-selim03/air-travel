import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings-info')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    return (
        <div className="mt-20 text-center">
            <p className="text-xl text-red-700 font-bold">Services</p>
            <h1 className='text-6xl font-bold mb-6'>Our Services With Areas</h1>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 justify-center items-center'>
            {
                services && 
                services.map(service => <Booking
                    key={service._id}
                    service={service}
                ></Booking>)
            }
            </div>
        </div>
    );
};

export default Services;