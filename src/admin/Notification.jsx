import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
// import "../adashboard.css";
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const Notification = () => {
	const navigate = useNavigate();
	const [notifications, setNotifications] = useState([]);

	useEffect(() => {
		const fetchNotifications = async () => {
			try {
				const response = await axios.get('http://shazilemp.pythonanywhere.com/Employee_management_system/notifications/');
				setNotifications(response.data);
			} catch (error) {
				console.error('Error fetching notifications:', error);
			}
		};
		fetchNotifications();
	}, []);

	const deleteNotification = (id) => {
		axios.delete(`http://shazilemp.pythonanywhere.com/Employee_management_system/notifications/${id}/`)
			.then((res) => {
				console.log(res.data);
				// Remove the deleted notification from state
				setNotifications(notifications.filter(item => item.id !== id));
			})
			.catch((error) => {
				console.error('Error deleting notification:', error);
			});
	};

	const editNotification = (id) => {
		axios.get(`http://shazilemp.pythonanywhere.com/Employee_management_system/notifications/${id}/`)
			.then((res) => {
				console.log(res.data);
				sessionStorage.setItem('editdata', JSON.stringify(res.data));
				navigate('/editnotification');
			})
			.catch((error) => {
				console.error('Error fetching notification data:', error);
			});
	};

	return (
		<div>
			<div className='row container-fluid'>
				<div className="col-md-3">
					<Sidebar />
				</div>
				<div className="col-md-9 mt-5">
					<h3>Notifications</h3>
					<button className='btn btn-primary mt-3 mb-3'>
						<NavLink to='/addnotification' className='text-white text-decoration-none'>Add New Notification</NavLink>
					</button>
					<div className="row">
						{notifications.map((notification) => (
							<div key={notification.id} className="col-md-4 mb-4 me-4 ">
								<div className="card">
									<div className="card-body">
										<h5 className="card-title">Notification ID: {notification.id}</h5>
										<p className="card-text">{notification.detail}</p>
										<div>
											<button className='btn btn-danger me-2' onClick={() => deleteNotification(notification.id)}>Delete</button>
											<button className='btn btn-warning' onClick={() => editNotification(notification.id)}>Edit</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					
				</div>
			</div>
		</div>
	);
}

export default Notification;
