import React, { useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Changepassword = () => {
  const storedData = sessionStorage.getItem('editdata');
  const adata = storedData ? JSON.parse(storedData) : null;
  const id = adata.id;

  const [data, setData] = useState({
    password: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your backend endpoint
    axios.patch(`http://shazilemp.pythonanywhere.com/Employee_management_system/users/${id}/`, data)
      .then((response) => {
        console.log(response.data);
        toast.success('Password changed successfully!');
        setData({ password: '' }); // Clear the password field
      })
      .catch((error) => {
        console.error('Error changing password:', error);
        toast.error('Failed to change password.');
      });
  };

  return (
    <div className='row container-fluid'>
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9">
        <h1>Change Password</h1>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Change Password</button>
        </form>

        <ToastContainer /> {/* Toast container for displaying notifications */}
      </div>
    </div>
  )
}

export default Changepassword;
