import React, { useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNotification = () => {
  const [data, setData] = useState({
    subject: '',
    detail: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://shazilemp.pythonanywhere.com/Employee_management_system/notifications/', data);
      console.log(response.data);
      toast.success('Notification added successfully'); // Success notification
    } catch (error) {
      console.error('Error uploading data:', error);
      toast.error('Error adding notification'); // Error notification
    }
  };

  return (
    <div className="row container-fluid">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9 mt-5">
        <div className="card">
          <h1 className="card-header text-center">Add Notification</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="w-75 mx-auto">
              <div className="form-group">
                <label htmlFor="subject">Subject Line:</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  value={data.subject}
                  onChange={handleChange}
                  id="subject"
                />
              </div>
              <div className="form-group">
                <label htmlFor="detail">Detail:</label>
                <textarea
                  name="detail"
                  className="form-control"
                  value={data.detail}
                  onChange={handleChange}
                  id="detail"
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default AddNotification;
