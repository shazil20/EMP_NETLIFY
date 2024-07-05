import React, { useState, useEffect } from 'react';
import Usidebar from './Usidebar';
import axios from 'axios';
import './Leave.css';

const LeaveStatus = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const { access } = JSON.parse(sessionStorage.getItem('ulogin'));

  useEffect(() => {
    axios.get('http://shazilemp.pythonanywhere.com/Employee_management_system/leave-requests/', {
      headers: {
        'Authorization': `Bearer ${access}`
      }
    })
    .then((res) => {
      setLeaveRequests(res.data);
    })
    .catch((error) => {
      console.error('Error fetching leave requests:', error);
    });
  }, [access]);

  return (
    <div className="container-fluid row">
      <div className="col-md-3">
        <Usidebar />
      </div>
      <div className="col-md-9 mt-5">
        <h1>Your Leave Status</h1>
        <div className="leave-requests-container">
          {leaveRequests.length > 0 ? (
            leaveRequests.map((leave, index) => (
              <div key={index} className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{leave.type}</h5>
                  <p className="card-text"><strong>Status:</strong> {leave.status}</p>
                  <p className="card-text"><strong>From:</strong> {leave.start_date}</p>
                  <p className="card-text"><strong>To:</strong> {leave.end_date}</p>
                  <p className="card-text"><strong>Reason:</strong> {leave.reason}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No leave requests found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaveStatus;
