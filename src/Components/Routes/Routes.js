import React from 'react';
import {  createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Booking from '../Booking/Booking';
import Signup from '../Signup/Signup';
import Layout from '../Layouts/Layout';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';


    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout></Layout>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/about',
                    element: <About></About>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                },
                {
                    path: '/services',
                    element: <Services></Services>
                },
                {
                    path: '/contact',
                    element: <Contact></Contact>
                },
                {
                    path: '/booking',
                    element: <Booking></Booking>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/signup',
                    element: <Signup></Signup>
                },

            ]
        }
    ]);

export default router;