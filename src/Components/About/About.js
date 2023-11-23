import React from 'react';
import p1 from '../../assets/planes/3.jpg'
import p2 from '../../assets/planes/pilot1.jpg'

const About = () => {
    return (
        <div className="hero bg-gradient-to-r from-lime-400  mt-20 mb-56 h-[500px]">
            <div className="hero-content flex-col lg:flex-row mb-16">
                <div className='relative'>
                    <img src={p1} className="max-w-sm rounded-lg shadow-2xl " alt='' />
                    <img src={p2} alt="" className='w-48 max-w-sm absolute rounded shadow-slate-800 top-32 left-24' />
                </div>
                <div className='mx-20'>
                    <p className='font-bold text-red-700 text-lg'>About Us</p>
                    <h1 className="text-5xl font-bold">Best Pilots!</h1>
                    <p className="py-6">We have best pilots and officers in the world ranking of air service. We are qualified & of experience in this field. And best air service of the world it's rare and very comfortable.! <br />
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-900 w-36 font-bold text-white rounded">explore more</button>
                </div>
            </div>
        </div>
    );
};

export default About;