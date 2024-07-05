import React, { useState, useEffect } from 'react';
import Usidebar from './Usidebar';

const Unotification = () => {
    const ulogin = JSON.parse(sessionStorage.getItem('ulogin'));
    const [notification, updnotification] = useState([]);

    useEffect(() => {
        const notificationfetchit = async () => {
            const response = await fetch('http://shazilemp.pythonanywhere.com/Employee_management_system/notifications/');
            const data = await response.json();
            updnotification(data);
        };
        notificationfetchit();
    }, []);

    if (!ulogin || !ulogin.user) {
        return <div>Loading...</div>;
    }

    return (
        <div className='row container-fluid'>
            <div className="col-md-3">
                <Usidebar />
            </div>
            <div className="col-md-9">
                <h1>Welcome "{ulogin.user.username}" To Notification page</h1>
                <p>{ulogin.user.designation}</p>
                <div className="container row">
                    <div className="todo mt-5">
                        <div className="head">
                            <h3>Notifications</h3>
                        </div>
                        {notification.map((data, index) => (
                            <div key={index} className="card mb-2 ncardi">
                                <div className="card-body">
                                    <h5 className="card-title">{data.subject}</h5>
                                    <p className="card-text">{data.detail}</p>
                                    <p>{data.upload_date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Unotification;
