import React from 'react';
import './BannerItem.css'
import {  FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BannerItem = ({ banner }) => {
    const { id, image, prev, next } = banner;


    return (
        <div id={`slide${id}`} className="carousel-item relative w-full widthh mx-auto">
        <div className='carousel-img'>
            <img src={image} alt="" className="w-full widthh rounded-xl" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-1/4">
            <h1 className='text-4xl font-bold text-white'>
                Affordable <br />
                Price for your <br />
                Best Ari Travel with Us
            </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-16 top-1/2">
            <p className='text text-white'>The best Air services Ranking No.1. We Believe in the best services and very much care about custumar comfort.</p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
            <Link to='/services'><button className="btn bg-gradient-to-r from-cyan-500 to-blue-800 text-white btn-info rounded mr-5">Discover more</button></Link>
            <Link to='/services'><button className="btn btn-outline rounded btn-info w-36">Get started</button></Link>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 slider-btn">
            <a href={`#slide${prev}`} className="btn bg-gradient-to-r from-cyan-400 to-blue-700 mr-5"><FaArrowLeft /></a>
            <a href={`#slide${next}`} className="btn bg-gradient-to-r from-cyan-400 to-blue-700 circle"><FaArrowRight /></a>
            
        </div>
    </div>
);
};

export default BannerItem;