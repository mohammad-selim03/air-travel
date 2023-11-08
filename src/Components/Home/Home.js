import React from 'react';
import p4 from '../../assets/planes/5.jpg'
import p1 from '../../assets/planes/7.jpg'
import p2 from '../../assets/planes/8.jpg'
import p3 from '../../assets/planes/10.jpg'
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Team from '../Team/Team';
import Features from '../Features/Features';
import CounterUp from '../CounterUp/CounterUp';

const Home = () => {
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