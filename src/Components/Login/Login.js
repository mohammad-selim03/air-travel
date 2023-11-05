import React, { useContext } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';
import { context } from '../../AuthContext/AuthContext';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {


    const {googleSignIn, facebookSignIn} = useContext(context);


    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        googleSignIn(provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
    }

    const handleFacebookSignIn = () => {
        const provider = new FacebookAuthProvider();
        facebookSignIn(provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
    }

    return (
        <div className="hero login-container bg-base-200 ">
            <div className="hero-content flex-col login-info">
                <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-10">
                    <div className="card-body">
                        <div className="form-control">
                            <h2 className="text-3xl text-center font-bold">Login.!</h2>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered rounded-xl h-10" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered rounded-xl h-10" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className='lable'>
                                Don't have an account? <Link className='font-bold link-hover' to='/signup'>SignUp</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary rounded-xl">Login</button>
                        </div>
                        <div>
                            <p className='font-bold mt-2 mb-3'>~~~~~~~~~~~~~<span className="font-bold">OR</span>~~~~~~~~~~~~~</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent rounded-xl w-24 h-20 mx-3"><FaGoogle className='text-xl mt-3'/> Google</button>
                            <button onClick={handleFacebookSignIn} className="btn btn-outline btn-info rounded-xl w-24 h-20 mx-3"><FaFacebook className='text-xl mt-3'/> Facebook</button>
                            {/* <button className="btn btn-outline btn-error rounded-xl w-24 h-20 mx-3"><FaInstagram className='text-xl mt-3'/> Instagram</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;