import React, { useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditEmp = () => {
    const storedData = sessionStorage.getItem('editdata');
    const data = storedData ? JSON.parse(storedData) : null;

    const [emp, updemp] = useState({
        username: data?.username || '',
        email: data?.email || '',
        designation: data?.designation || '',
        profile_photo: data?.profile_photo || '',
        first_name: data?.first_name || '',
        last_name: data?.last_name || '',
        phone_number: data?.phone_number || ''
    });

    const [imageName, setImageName] = useState(data?.profile_photo ? data.profile_photo.split('/').pop() : '');

    if (!data) {
        return <div>Loading.......</div>;
    }

    const id = data.id;

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'profile_photo') {
            updemp({ ...emp, [name]: files[0] });
            setImageName(files[0].name);
        } else {
            updemp({ ...emp, [name]: value });
        }
    }

    const handlePhotoSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profile_photo', emp.profile_photo);

        axios.patch(`http://shazilemp.pythonanywhere.com/Employee_management_system/users/${id}/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                toast.success('Profile photo updated successfully!', {
                    position: 'top-right',
                });
                console.log(res);
            })
            .catch((err) => {
                toast.error('Failed to update profile photo!', {
                    position: 'top-right',
                });
                console.log(err);
            });
    }

    const handleDetailsSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in emp) {
            if (key !== 'profile_photo') { // Skip profile_photo in this form
                formData.append(key, emp[key]);
            }
        }

        axios.patch(`http://shazilemp.pythonanywhere.com/Employee_management_system/users/${id}/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                toast.success('Employee details updated successfully!', {
                    position: 'top-right',
                });
                console.log(res);
            })
            .catch((err) => {
                toast.error('Failed to update employee details!', {
                    position: 'top-right',
                });
                console.log(err);
            });
    }

    return (
        <div className='container-fluid'>
            <ToastContainer />
            <div className='row'>
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <h2 className="mt-4 mb-4">Edit Employee</h2>
                    
                    <form onSubmit={handlePhotoSubmit} encType="multipart/form-data">
                        <div className="mb-3">
                            <label htmlFor="profile_photo" className="form-label">Profile Photo</label>
                            <input
                                type="file"
                                className="form-control"
                                id="profile_photo"
                                name="profile_photo"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="profile_photo_name" className="form-label">Selected Image</label>
                            <input
                                type="text"
                                className="form-control"
                                id="profile_photo_name"
                                name="profile_photo_name"
                                value={imageName}
                                readOnly
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Update Profile Photo</button>
                    </form>
                    
                    <hr />

                    <form onSubmit={handleDetailsSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                value={emp.username}
                                onChange={handleChange}
                                placeholder="Enter Username"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={emp.email}
                                onChange={handleChange}
                                placeholder="Enter Email"
                                required
                                readOnly
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="designation" className="form-label">Designation</label>
                            <input
                                type="text"
                                className="form-control"
                                id="designation"
                                name="designation"
                                value={emp.designation}
                                onChange={handleChange}
                                placeholder="Enter Designation"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="first_name" className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="first_name"
                                name="first_name"
                                value={emp.first_name}
                                onChange={handleChange}
                                placeholder="Enter First Name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="last_name" className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="last_name"
                                name="last_name"
                                value={emp.last_name}
                                onChange={handleChange}
                                placeholder="Enter Last Name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                name="phone_number"
                                value={emp.phone_number}
                                onChange={handleChange}
                                placeholder="Enter Phone Number"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Update Employee Details</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditEmp;
