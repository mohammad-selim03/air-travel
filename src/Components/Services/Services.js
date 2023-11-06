import React, { useEffect } from 'react';
import p1 from '../../assets/places/canada.jpg'
import p2 from '../../assets/places/denmark.jpg'
import p3 from '../../assets/places/dubai.jpg'
import p4 from '../../assets/places/italu.jpg'
import p5 from '../../assets/places//japan.jpg'
import p6 from '../../assets/places/malaysia.jpg'
import p7 from '../../assets/places/norwayy.jpg'
import p8 from '../../assets/places/swithzerland.jpg'
import p9 from '../../assets/places/turkey.jpg'
import { FaStar } from 'react-icons/fa';

const Services = () => {

    const datas = () => {
                useEffect(() => {
                
                } , [])
            }

    return (
        <div className="mt-20 text-center">
                <p className="text-xl text-red-700 font-bold">Services</p>
                <h1 className='text-6xl font-bold mb-6'>Our Services With Areas</h1>
            {/* <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-28'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <span className='flex text-red-700'><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /></span>
                        <h2 className="card-title font-bold">Dhaka To Canada</h2>
                        <p className='font-bold text-orange-700'>Price : $5000</p>
                        <div className="card-actions">
                            <button className="btn bg-gradient-to-r from-cyan-500 to-blue-900 w-36 font-bold text-white rounded-lg mx-5 w-52 font-bold">Booking</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <span className='flex text-red-700'><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /></span>
                        <h2 className="card-title font-bold">Dhaka To Denmark</h2>
                        <p className='font-bold text-orange-700'>Price : $4500</p>
                        <div className="card-actions">
                            <button className="btn btn-primary rounded-lg mx-5 w-52 font-bold">Booking</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <span className='flex text-red-700'><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /></span>
                        <h2 className="card-title font-bold">Dhaka To Dubai</h2>
                        <p className='font-bold text-orange-700'>Price : $4500</p>
                        <div className="card-actions">
                            <button className="btn btn-primary rounded-lg mx-5 w-52 font-bold">Booking</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <span className='flex text-red-700'><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /></span>
                        <h2 className="card-title font-bold">Dhaka To Italy</h2>
                        <p className='font-bold text-orange-700'>Price : $4000</p>
                        <div className="card-actions">
                            <button className="btn btn-primary rounded-lg mx-5 w-52 font-bold">Booking</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p5} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <span className='flex text-red-700'><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /></span>
                        <h2 className="card-title font-bold">Dhaka To Japan</h2>
                        <p className='font-bold text-orange-700'>Price : $3000</p>
                        <div className="card-actions">
                            <button className="btn btn-primary rounded-lg mx-5 w-52 font-bold">Booking</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p6} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <span className='flex text-red-700'><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /></span>
                        <h2 className="card-title font-bold">Dhaka To Malaysia</h2>
                        <p className='font-bold text-orange-700'>Price : $4500</p>
                        <div className="card-actions">
                            <button className="btn btn-primary rounded-lg mx-5 w-52 font-bold">Booking</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p7} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <span className='flex text-red-700'><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /></span>
                        <h2 className="card-title font-bold">Dhaka To Norway</h2>
                        <p className='font-bold text-orange-700'>Price : $6000</p>
                        <div className="card-actions">
                            <button className="btn btn-primary rounded-lg mx-5 w-52 font-bold">Booking</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p8} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <span className='flex text-red-700'><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /></span>
                        <h2 className="card-title font-bold">Dhaka To Switzerland</h2>
                        <p className='font-bold text-orange-700'>Price : $4000</p>
                        <div className="card-actions">
                            <button className="btn btn-primary rounded-lg mx-5 w-52 font-bold">Booking</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p9} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <span className='flex text-red-700'><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /><FaStar className='mx-1' /></span>
                        <h2 className="card-title font-bold">Dhaka To Turkey</h2>
                        <p className='font-bold text-orange-700'>Price : $3000</p>
                        <div className="card-actions">
                            <button className="btn btn-primary rounded-lg mx-5 w-52 font-bold">Booking</button>
                        </div>
                    </div>
                </div>
            </div> */}

            

            <button className="btn btn-warning rounded mt-10 font-bold w-52 text-xl mb-10">Show More</button>
        </div>
    );
};

export default Services;