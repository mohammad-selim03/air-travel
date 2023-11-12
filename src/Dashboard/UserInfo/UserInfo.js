import React, { useContext } from 'react';
import { context } from '../../AuthContext/AuthContext';
import { useLoaderData } from 'react-router-dom';

const UserInfo = () => {
    const {user} = useContext(context);
    const booking = useLoaderData();
    console.log(booking);
    return (
        <div className="">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-base-200">
                        <th>{user?.displayName}</th>
                        <td>{user?.email}</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserInfo;