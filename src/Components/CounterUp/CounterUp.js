import React, { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';

const CounterUp = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <div className='bg-gradient-to-t from-cyan-500 to-blue-700 h-96 flex justify-evenly items-center'>
                <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)} className='flex justify-evenly items-center mx-9 text-white'>
                    <div>
                        <h2 className='text-3xl font-bold text-center'>
                            {
                                count && <CountUp start={0} end={5800} duration={1} delay={0}></CountUp>
                            }+
                        </h2>
                        <h2 className="text-3xl font-bold">Flights</h2>
                    </div>
                    <div className='mx-52 '>
                        <h2 className='text-3xl font-bold text-center'>
                            {
                                count && <CountUp start={0} end={98000} duration={1} delay={0}></CountUp>
                            }+
                        </h2>
                        <h2 className="text-3xl font-bold">Passengers</h2>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold text-center'>
                            {
                                count && <CountUp start={0} end={60} duration={1} delay={0}></CountUp>
                            }+
                        </h2>
                        <h2 className="text-3xl font-bold">Countries</h2>
                    </div>
                </ScrollTrigger>
            </div>
            <h3 className="text-xl font-bold text-center mt-2 text-blue-900">AirVel Bangladesh PVT. LTD.</h3>
        </div>
    );
};

export default CounterUp;