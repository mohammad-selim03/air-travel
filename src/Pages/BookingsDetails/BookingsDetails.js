import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const BookingsDetails = () => {
    const booking = useLoaderData();
    const { name, price, image, FlyingTime } = booking;

    const [cart, setCart] = useState(0);


    const [value, setValue] = useState < Number > (args.value);
    useEffect(() => {
        const timer = setTimeout(() => {
            setValue(v => v <= 0 ? args.value : v - 1);
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [value]);



    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        return <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <Countdown className="font-mono text-5xl" value={15} />
                                days
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <Countdown className="font-mono text-5xl" value={10} />
                                hours
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <Countdown className="font-mono text-5xl" value={24} />
                                min
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <Countdown className="font-mono text-5xl" value={value} />
                                sec
                            </div>
                        </div>
                        {/* <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center items-center">
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 15 }}></span>
                                </span>
                                days
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 10 }}></span>
                                </span>
                                hours
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 24 }}></span>
                                </span>
                                min
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 38 }}></span>
                                </span>
                                sec
                            </div>
                        </div> */}
                        <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                        <p className="mb-5">Enjoy the best experience with us. We care our customer comfort and provide the best services.</p>
                        <h4 className="text-xl font-bold mb-3">Flying Time : {FlyingTime}</h4>
                        <h3 className="text-xl font-bold mb-5 flex justify-center items-center">Number of Members : <span className='text-3xl mx-3'><button className='bg-red-700 p-2 w-9 rounded-2xl'>-</button><button className='mx-3 bg-blue-700 p-2 rounded-2xl'>+</button></span> </h3>
                        <h3 className="text-2xl font-bold mb-5">Price : {price}</h3>

                        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-800 border-blue-700 rounded font-bold text-white mt-3 mb-3">proceed to Payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingsDetails;