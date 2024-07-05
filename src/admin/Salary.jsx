import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import './salary.css';
import { useNavigate } from 'react-router-dom';

const Salary = () => {
    const [users, setUsers] = useState([]);
    const navigate=useNavigate();
    const [loading, setLoading] = useState(true); // Loading state
    const { access } = JSON.parse(sessionStorage.getItem('alogin'));

    const fileInputRefs = useRef([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://shazilemp.pythonanywhere.com/Employee_management_system/users/', {
                    headers: {
                        Authorization: `Bearer ${access}`
                    }
                });
                setUsers(response.data);
                setLoading(false); // Set loading to false once data is fetched
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false); // Handle loading state on error
            }
        };
        fetchUsers();
    }, [access]);

    const upload = (id, index) => {
        const file = fileInputRefs.current[index].files[0];

        if (!file) {
            console.error('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('slip_file', file);
        formData.append('user', id);

        axios.post('http://shazilemp.pythonanywhere.com/Employee_management_system/salary_slips/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${access}`
            }
        })
        .then(response => {
            console.log('Upload successful');
            // Optionally update UI or show success message
        })
        .catch(error => {
            console.error('Error uploading file:', error);
            // Handle error: display error message or retry option
        });
    };

    const viewPrevious = (user) => {
        const id=user.id;
        axios.get('http://shazilemp.pythonanywhere.com/Employee_management_system/salary_slips/', {
            headers: {
                Authorization: `Bearer ${access}`
            }
        })
        .then((res) => {
            console.log(res.data); // Assuming response contains previous slips data
            sessionStorage.setItem('previousSalarySlips', JSON.stringify(res.data));
            sessionStorage.setItem('previousSalaryuser', JSON.stringify(user));
            navigate('/delpreviouslip') // Store data in sessionStorage
            // Optionally display previous slips or handle response data
        })
        .catch(error => {
            console.error('Error fetching previous slips:', error);
            // Handle error: display error message or retry option
        });
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <h1 className='text-center mt-4 mb-4'>Upload Salary Slips</h1>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="row">
                            {users.map((user, index) => (
                                <div key={user.id} className="col-md-4 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{user.username}</h5>
                                            <p className="card-text">{user.email}</p>
                                            <form encType='multipart/form-data'>
                                                <input type="file" className="form-control-file mb-2" ref={el => fileInputRefs.current[index] = el} />
                                            </form>
                                            <button className='btn btn-success me-2' onClick={() => upload(user.id, index)}>Upload</button>
                                            <button className='btn btn-primary' onClick={() => viewPrevious(user)}>View Previous</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Salary;
