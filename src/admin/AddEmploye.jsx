import React, { useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Employe.css'; // Import the CSS file

function AddEmployee() {
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    designation:'',
    phone_number: '',
    date_joined: '',
    role: 'user', // default role is 'user'
    is_active: true,
    profile_photo: null // initial profile photo value is null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value // handle file input
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://shazilemp.pythonanywhere.com/Employee_management_system/register/', formDataToSend);
      console.log(response.data);
      toast.success('Employee added successfully'); // Show success toast
      // Optionally add success message or redirect on success
    } catch (error) {
      console.error('Error uploading data:', error);
      toast.error('Error adding employee'); // Show error toast
      // Handle error state or display error message
    }
  };

  return (
    <div className='row container-fluid'>
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9 mt-5">
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title text-center m-3 text-decoration-none">Add Employee</h2>
            <form className="needs-validation" onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="form-group">
                <label>Username:</label>
                <input className="form-control" type="text" name="username" value={formData.username} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>First Name:</label>
                  <input className="form-control" type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
                </div>
                <div className="form-group col-md-6">
                  <label>Last Name:</label>
                  <input className="form-control" type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input className="form-control" type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input className="form-control" type="password" name="password" value={formData.password} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Designation:</label>
                <input className="form-control" type="text" name="designation" value={formData.designation} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input className="form-control" type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Date of Joining:</label>
                <input className="form-control" type="date" name="date_joined" value={formData.date_joined} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Profile Photo:</label>
                <input className="form-control-file" type="file" name="profile_photo" accept="image/*" onChange={handleChange} />
                <small className="form-text text-muted">Select a profile photo (optional)</small>
              </div>
              <div className="form-group">
                <label>Role:</label>
                <div>
                  <label className="radio-inline mr-3">
                    <input type="radio" name="role" value="user" checked={formData.role === 'user'} onChange={handleChange} />
                    User
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="role" value="admin" checked={formData.role === 'admin'} onChange={handleChange} />
                    Admin
                  </label>
                </div>
              </div>
              <button className="btn btn-primary btn-submit" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      {/* Toast container */}
      <ToastContainer />
    </div>
  );
}

export default AddEmployee;
