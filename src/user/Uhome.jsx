import React, { useState, useEffect } from 'react';
import Usidebar from './Usidebar';
import './uhome.css'

import { NavLink } from 'react-router-dom';

const Uhome = () => {
    const udata = JSON.parse(sessionStorage.getItem('ulogin'));
    const [notification, updnotification] = useState([]);

    useEffect(() => {
        const notificationfetchit = async () => {
            const response = await fetch('http://shazilemp.pythonanywhere.com/Employee_management_system/notifications/');
            const data = await response.json();
            updnotification(data);
        };
        notificationfetchit();
    }, []);

    if (!udata) {
        return <div>Loading...</div>;
    }

    return (
        <div className='row container-fluid'>
            <div className="col-md-3">
                <Usidebar />
            </div>
            <div className="col-md-9">
                <div className="container row">
                    <div className="top d-flex justify-content-start align-items-center">
                    <img src={udata.user.profile_photo_url} style={{borderRadius:"100%"}} alt="" width="50px" className='me-3' />
                    <h1>Welcome {udata.user.username}</h1> <br />
                    {/* <p>{udata.user.designation}</p> */}
                    </div>
                  


                    <div className="col-md-4 mt-5">
    <div className="card custom-card">
        <div className="card-body p-5 text-center">
            <h5 className="card-title text-center">View Details</h5>
            <NavLink className="btn w-50 text-dark custom-button" to='/uemp'>
                View
            </NavLink>
        </div>
    </div>
</div>

<div className="col-md-4 mt-5">
    <div className="card custom-card">
        <div className="card-body p-5 text-center">
            <h5 className="card-title">View Notifications</h5>
            <NavLink className="btn w-50 text-dark custom-button" to='/unotification'>
                View
            </NavLink>
        </div>
    </div>
</div>

<div className="col-md-4 mt-5">
    <div className="card custom-card-leave">
        <div className="card-body p-5 text-center">
            <h5 className="card-title">Apply For Leave</h5>
            <NavLink className="btn w-50 text-dark custom-button" to='/leave'>
                Leave
            </NavLink>
        </div>
    </div>
</div>

        <div className="col-md-6 mt-5">
            <div className="table-data">
                <div className="order">
                    <div className="head">
                        <h3>Current User</h3>
                    </div>
                    <table className="table custom-table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>{udata.user.username}</td>
                                <td>{udata.user.email}</td>
                                <td className={udata.active_status ? "status-active" : "status-inactive"}>
                                    {udata.active_status ? "Active" : "Not Active"}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className="col-md-6">
            <div className="todo mt-5 custom-todo">
                <div className="head custom-head">
                    <h3>Notifications</h3>
                </div>
                <ul className="todo-list custom-todo-list">
                    {notification.map((data, index) => (
                        <li key={index} className="custom-todo-item">
                            <p>{data.detail}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
                </div>
            </div>
        </div>
    );
}

export default Uhome;
