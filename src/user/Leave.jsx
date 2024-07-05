import React, { useState } from 'react';
import Usidebar from './Usidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Leave = () => {
    const udata = JSON.parse(sessionStorage.getItem('ulogin'));
    const [leave, setLeave] = useState({
        employee: udata?.user?.id || "",
        reason: "",
        start_date: "",
        end_date: ""
    });

    const handleChange = (e) => {
        setLeave({ ...leave, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(leave);

        if (udata && udata.access) {
            const token = udata.access;
            axios.post('http://shazilemp.pythonanywhere.com/Employee_management_system/leave-requests/', leave, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                toast.success('Leave request submitted successfully!');
                console.log(res);
            }).catch((error) => {
                toast.error('There was an error submitting the leave request!');
                console.error('There was an error submitting the leave request!', error);
            });
        } else {
            toast.error('User data or access token is missing');
            console.error('User data or access token is missing');
        }
    };

    if (!udata) {
        return <div>Loading.......</div>;
    }

    return (
        <div>
            <ToastContainer />
            <div className='row container-fluid'>
                <div className="col-md-3">
                    <Usidebar />
                </div>
                <div className="col-md-9 mt-3">
                    <h2>Apply For Leave Here....</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="leaveReason" className="form-label">Leave Reason</label>
                            <textarea
                                className="form-control"
                                name="reason"
                                value={leave.reason}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="startDate" className="form-label">Start Date</label>
                            <input
                                type="date"
                                className="form-control"
                                name="start_date"
                                value={leave.start_date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="endDate" className="form-label">End Date</label>
                            <input
                                type="date"
                                className="form-control"
                                name="end_date"
                                value={leave.end_date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Leave;
