import React, { useEffect, useState } from 'react';
import "./adashboard.css";
import Sidebar from './Sidebar';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserCheck, faUserTimes } from '@fortawesome/free-solid-svg-icons';

import Card from 'react-bootstrap/Card';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

function getTime() {
  const today = new Date();
  const hours = today.getHours().toString().padStart(2, '0');
  const minutes = today.getMinutes().toString().padStart(2, '0');
  const seconds = today.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [currentTime, setCurrentTime] = useState(getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [employe, upemploye] = useState(0);
  const [admin, updaadmin] = useState([]);
  const [notification, updnotification] = useState([]);
  const [active, updateactive] = useState(0);
  const [unactive, updateunactive] = useState(0);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://shazilemp.pythonanywhere.com/Employee_management_system/users/');
        const data = response.data;
        const activedata = data.filter(item => item.is_active === true);
        const unactivedata = data.filter(item => item.is_active === false);
        updateactive(activedata.length);
        updateunactive(unactivedata.length);
        upemploye(data.length); // Assuming data is an array
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('http://shazilemp.pythonanywhere.com/Employee_management_system/users/');
        const data = response.data;
        const adminData = data.filter(item => item.role === "admin");
        updaadmin(adminData);
      } catch (error) {
        console.error('Error fetching admins:', error);
      }
    };

    fetchAdmins();
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://shazilemp.pythonanywhere.com/Employee_management_system/notifications/');
        const data = response.data;
        updnotification(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-12 mb-3">
          <Sidebar />
        </div>
        <div className="col-lg-9 col-md-8 col-12">
          <h1>Dashboard</h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Current Date</h5>
                  <p>{currentDate}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Current Time</h5>
                  <p>{currentTime}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Employees section */}
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <Card className="text-center custom-card" style={{ backgroundColor: '#ffd31d' }}>
                <Card.Body>
                  <div className="icon-background">
                    <FontAwesomeIcon icon={faUsers} className="icon" />
                  </div>
                  <div className="text">
                    <h3>{employe}</h3>
                    <p>Total Employees</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <Card className="text-center custom-card" style={{ backgroundColor: '#4caf50' }}>
                <Card.Body>
                  <div className="icon-background">
                    <FontAwesomeIcon icon={faUserCheck} className="icon" />
                  </div>
                  <div className="text">
                    <h3>{active}</h3>
                    <p>Active</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <Card className="text-center custom-card" style={{ backgroundColor: '#2196f3' }}>
                <Card.Body>
                  <div className="icon-background">
                    <FontAwesomeIcon icon={faUserTimes} className="icon" />
                  </div>
                  <div className="text">
                    <h3>{unactive}</h3>
                    <p>Inactive</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          {/* Admins section */}
          <div className="row">
            <div className="col-md-6 col-12 mb-3">
              <div className="order">
                <div className="head">
                  <h3>Current Admins</h3>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>User</th>
                        <th>Email</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {admin.map((data) => (
                        <tr key={data.id}>
                          <td>{data.username}</td>
                          <td>{data.email}</td>
                          <td>{data.is_active ? "Active" : "Not Active"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3">
              <div className="todo">
                <div className="head">
                  <h3>Notifications</h3>
                </div>
                <ul className="todo-list">
                  {notification.map((data) => (
                    <li className="notification-item" key={data.id}>
                      <div className="notification-content">
                        <p>{data.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
