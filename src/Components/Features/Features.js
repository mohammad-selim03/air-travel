import React from 'react';
import './Features.css';
import { FaCheckCircle, FaClock, FaPlane, FaStrikethrough, FaUserTie, FaUsers } from 'react-icons/fa';

const Features = () => {
    return (
        <div className='mt-36 mb-36 w-full container'>
            <p className="text-xl font-bold text-red-700 text-center mb-5">Core Features</p>
            <h1 className="text-4xl text-center font-bold">Why Choose Us.?</h1>
            <p className='text-center w-1/2 mx-auto mt-3 mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat exercitationem laudantium veniam inventore aspernatur nesciunt unde vero animi nisi. Quo!</p>
            <div className='mx-auto flex gap-8 '>
                <div className='iconss border-solid border-2 border-sky-500 rounded-xl w-64 p-1  '>
                    <div><FaUsers className='text-3xl user mx-auto mt-3 text-blue-700'  /><br /><p className='font-bold mb-3 text-center'>Expart Team</p></div>
                </div>
                <div className='iconss border-solid border-2 border-sky-500 rounded-xl w-64 p-1'>
                    <span className='icon'><FaClock className='text-3xl mx-auto mt-3 text-blue-700 icon' /><br /><p className='font-bold mb-3 text-center'>Time Delivery</p></span>
                </div>
                <div className='iconss border-solid border-2 border-sky-500 rounded-xl w-64 p-1'>
                    <span className='icon'><FaUserTie className='text-3xl mx-auto mt-3 text-blue-700' /><br /><p className='font-bold mb-3 text-center'>24 H Support</p></span>
                </div>
                <div className='iconss border-solid border-2 border-sky-500 rounded-xl w-64 p-1'>
                    <span className='icon'><FaPlane className='text-3xl mx-auto mt-3 text-blue-700' /><br /><p className='font-bold mb-3 text-center'>Best Pilots</p></span>
                </div>
                <div className='iconss border-solid border-2 border-sky-500 rounded-xl w-64 p-1'>
                    <span className='icon'><FaUsers className='text-3xl mx-auto mt-3 text-blue-700' /><br /><p className='font-bold mb-3 text-center'>Best Crue</p></span>
                </div>
                <div className='iconss border-solid border-2 border-sky-500 rounded-xl w-64 p-1'>
                    <span className='icon'><FaCheckCircle className='text-3xl mx-auto mt-3 text-blue-700' /><br /><p className='font-bold mb-3 text-center'>100% Comforts</p></span>
                </div>
                <div className='iconss border-solid border-2 border-sky-500 rounded-xl w-64 p-1'>
                    <span  className='icon'><FaStrikethrough className='text-3xl mx-auto mt-3 text-blue-700' /><br /><p className='font-bold mb-3 text-center'>VIP Facilities</p></span>
                </div>
            </div>
        </div>
    );
};

export default Features;