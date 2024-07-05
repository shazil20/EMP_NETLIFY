import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const ViewLeaves = () => {
  const storedData = sessionStorage.getItem('alogin');
  const data = storedData ? JSON.parse(storedData) : null;
  const token = data?.access || null;

  const [leave, setLeave] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      axios.get('http://shazilemp.pythonanywhere.com/Employee_management_system/admin-leave-requests/', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((res) => {
        const sortedLeave = res.data.sort((a, b) => b.id - a.id);
        setLeave(sortedLeave);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching leave requests:', error);
        setLoading(false);
      });
    }
  }, [token]);

  const changeStatus = (id, status) => {
    const body = { status };

    if (token) {
      axios.patch(`http://shazilemp.pythonanywhere.com/Employee_management_system/admin-leave-requests/${id}/`, body, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res.data);
        setLeave(prevLeave => prevLeave.map(l => l.id === id ? { ...l, status } : l));
      })
      .catch((error) => {
        console.error(`Error updating status for request ${id}:`, error);
      });
    }
  };

  if (!data || !token) {
    return <div>Loading...</div>;
  }

  return (
    <div className='row container-fluid'>
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9">
        <h2>Leave Requests</h2>
        {loading ? (
          <div>Loading leave requests...</div>
        ) : leave.length === 0 ? (
          <div>No leave requests available.</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Leave Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leave.map((request) => (
                <tr key={request.id}>
                  <td>{request.employee.username}</td>
                  <td>{request.reason}</td>
                  <td>{request.start_date}</td>
                  <td>{request.end_date}</td>
                  <td>{request.status}</td>
                  <td>
                    {request.status !== 'APPROVED' && request.status !== 'DECLINED' && (
                      <>
                        <button className='btn btn-success' onClick={() => changeStatus(request.id, 'APPROVED')}>Approve</button>
                        <button className='btn btn-danger ms-2' onClick={() => changeStatus(request.id, 'DECLINED')}>Decline</button>
                      </>
                    )}
                    {request.status === 'APPROVED' && (
                      <span className="text-success">Approved</span>
                    )}
                    {request.status === 'DECLINED' && (
                      <span className="text-danger">Declined</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ViewLeaves;
