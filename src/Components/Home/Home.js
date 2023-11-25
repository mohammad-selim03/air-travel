import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Team from '../Team/Team';
import Features from '../Features/Features';
import CounterUp from '../CounterUp/CounterUp';
import { context } from '../../AuthContext/AuthContext';

const Home = () => {

    const {loader} = useContext(context);

    if(loader){
        return <p className='text-center mt-52'><span className="loading loading-dots loading-lg"></span></p>
    }
    return (
        <div>
            <div className="carousel w-full">
                <Banner></Banner>
            </div>
            <About></About>
            <CounterUp></CounterUp>
            <Services></Services>
            <Contact></Contact>
            <Team></Team>
            <Features></Features>
        </div>
    );
};

export default Home;