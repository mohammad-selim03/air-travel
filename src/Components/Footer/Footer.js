import React from 'react';
import logo from '../../assets/planes/aviation_logo-22.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content flex justify-between items-center">
            <aside>
                <img src={logo} className='w-28' alt="" />
                <p><span className="text-2xl font-bold">AirTravel Ltd.</span><br />Providing the best comfortable journey since 1992</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;