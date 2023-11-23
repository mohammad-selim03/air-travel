import React from 'react';
import p1 from '../../assets/pilots/1.jpg'
import p2 from '../../assets/pilots/2.jpg'
import p3 from '../../assets/pilots/3.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Team = () => {
    return (
        <div className='mt-20 '>
            <h3 className="text-xl font-bold text-red-700 text-center">Team</h3>
            <h1 className="text-4xl font-bold text-center">Meet Our Team Members</h1>
            <div className='flex justify-center items-center'>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-32 mt-10'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={p1} alt="pilots" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">David John</h2>
                            <p className='text-2xl font-bold'>Flying Officer</p>
                            <div className="card-actions">
                                <span><a href="#" className='flex text-4xl'><FaFacebook className='text-sky-800 mx-2' /> <FaTwitter className='text-sky-600 mx-2' /><FaLinkedin className='text-blue-700 mx-2' /><FaInstagram className='text-red-700 mx-2' /></a></span>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl mt-4">
                        <figure className="px-10 pt-10">
                            <img src={p2} alt="pilots" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">David John</h2>
                            <p className='text-2xl font-bold'>Flying Officer</p>
                            <div className="card-actions">
                                <span><a href="#" className='flex text-4xl'><FaFacebook className='text-sky-800 mx-2' /> <FaTwitter className='text-sky-600 mx-2' /><FaLinkedin className='text-blue-700 mx-2' /><FaInstagram className='text-red-700 mx-2' /></a></span>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl mt-4">
                        <figure className="px-10 pt-10">
                            <img src={p3} alt="pilots" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">David John</h2>
                            <p className='text-2xl font-bold'>Flying Officer</p>
                            <div className="card-actions">
                                <span><a href="#" className='flex text-4xl'><FaFacebook className='text-sky-800 mx-2' /> <FaTwitter className='text-sky-600 mx-2' /><FaLinkedin className='text-blue-700 mx-2' /><FaInstagram className='text-red-700 mx-2' /></a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;