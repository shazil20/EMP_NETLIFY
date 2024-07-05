import React from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DelPreviousSlip = () => {
    const previous = JSON.parse(sessionStorage.getItem('previousSalarySlips'));
    const user = JSON.parse(sessionStorage.getItem('previousSalaryuser'));
    const { access } = JSON.parse(sessionStorage.getItem('alogin'));
    const alogin = JSON.parse(sessionStorage.getItem('alogin'));
    const navigate = useNavigate();

    const handleDelete = (id) => {
        axios.delete(`http://shazilemp.pythonanywhere.com/Employee_management_system/salary_slips/${id}/`, {
            headers: {
                Authorization: `Bearer ${access}`
            }
        })
        .then(() => {
            toast.success('Salary slip deleted successfully!', {
                position: 'top-right',
                autoClose: 3000, // Close the toast after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(()=>{
                navigate('/salary')
            },3000)
            console.log(`Deleting salary slip with id: ${id}`);
            // Optionally update UI or fetch updated list after deletion
        })
        .catch(error => {
            console.error('Error deleting salary slip:', error);
            toast.error('Failed to delete salary slip!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
    };

    return (
        <>
            <ToastContainer />
            <div className="row container-fluid">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="container mt-4">
                        <h1 className="text-center mb-4">Previous Salary Slips</h1>
                        <div className="row">
                            {previous.map((slip, index) => (
                                <div key={index} className="col-md-4 mb-4">
                                    <div className="card">
                                        <img src={slip.slip_file} className="card-img-top" alt="Salary Slip" />
                                        <div className="card-body">
                                            <h5 className="card-title">ID: {slip.id}</h5>
                                            <p className="card-text">Upload Date: {slip.upload_date}</p>
                                            <p className="card-text">User Name: {user.username}</p>
                                            <button className="btn btn-danger" onClick={() => handleDelete(slip.id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DelPreviousSlip;
