import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { context } from '../../AuthContext/AuthContext';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const Login = () => {


    const {googleSignIn, facebookSignIn, emailPasswordSignIn} = useContext(context);


    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        googleSignIn(provider)
        .then(result => {
            const user = result.user;
            toast.success('Login Successful.!');
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error => console.error(error));
    }

    const handleFacebookSignIn = () => {
        const provider = new FacebookAuthProvider();
        facebookSignIn(provider)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('Login Successful.!');
            navigate(from, {replace: true});
        })
        .catch(error => console.error(error));
    }


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        emailPasswordSignIn(email, password)
        .then(res => {
            console.log(res.user);
            toast.success('Login Successful.!');
            navigate(from, {replace: true});
        })
        .catch(error => console.error(error));
        
    }

    return (
        <div className="hero login-container bg-base-200 ">
        <div className="hero-content flex-col login-info">
            <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-10">
                <form className="card-body" onSubmit={handleLogin}>
                    <div className="form-control">
                        <h2 className="text-3xl text-center font-bold">Login.!</h2>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name='email' required className="input input-bordered rounded-xl h-10" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' required className="input input-bordered rounded-xl h-10" />
                        <label className='mt-3 ml-3'>
                            Dont't have an account? <Link className='font-bold link-hover' to='/signup'>Create Account</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary rounded-xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-700">Login</button>
                    </div>
                    <div>
                        <p className='font-bold mt-2 mb-3'>~~~~~~~~~~~~~<span className="font-bold">OR</span>~~~~~~~~~~~~~</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent rounded-xl w-24 h-20 mx-3"><FaGoogle className='text-xl mt-3'/> Google</button>
                        <button onClick={handleFacebookSignIn} className="btn btn-outline btn-info rounded-xl w-24 h-20 mx-3"><FaFacebook className='text-xl mt-3'/> Facebook</button>
                        {/* <button className="btn btn-outline btn-error rounded-xl w-24 h-20 mx-3"><FaInstagram className='text-xl mt-3'/> Instagram</button> */}
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Login;