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
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import UserInfo from '../../Dashboard/UserInfo/UserInfo';
import BookingsDetails from '../../Pages/BookingsDetails/BookingsDetails';


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
                {
                    path: '/bookings-details',
                    element: <BookingsDetails></BookingsDetails>,
                    loader:({params}) => fetch(`http://localhost:5000//bookings/${params.id}`) 
                },

            ]
        }, 
        {
            path: '/dashboard',
            element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            children: [
                {
                    path: '/dashboard/userinfo',
                    element: <UserInfo></UserInfo>
                },
                

            ]
        }
    ]);

export default router;