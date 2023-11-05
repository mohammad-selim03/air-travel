import React from 'react';
import './BannerItem.css'
import {  FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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
                Price for Car <br />
                Servicing
            </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-16 top-1/2">
            <p className='text text-white'>There are many variations of passages of  available but the majority have suffered alteration in some form</p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
            <button className="btn btn-warning rounded mr-5">Discover more</button>
            <button className="btn btn-outline rounded btn-warning">Get started</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 slider-btn">
            <a href={`#slide${prev}`} className="btn btn-circle mr-5"><FaArrowLeft /></a>
            <a href={`#slide${next}`} className="btn btn-circle"><FaArrowRight /></a>
            
        </div>
    </div>
);
};

export default BannerItem;