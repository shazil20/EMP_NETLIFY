import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import './Employe.css'; // Import your custom CSS file

const Employe = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState({
    username: ''
  });
  const alogin = JSON.parse(sessionStorage.getItem('alogin'));
  const token = alogin.access;

  useEffect(() => {
    axios.get('http://shazilemp.pythonanywhere.com/Employee_management_system/users/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  }, [token]);

  const editEmp = (id) => {
    axios.get(`http://shazilemp.pythonanywhere.com/Employee_management_system/users/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem('editdata', JSON.stringify(res.data));
        navigate('/editemp');
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
      });
  };

  const deleteEmployee = (id) => {
    axios.delete(`http://shazilemp.pythonanywhere.com/Employee_management_system/users/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res.data);
        // Refresh the page after deletion (if needed)
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error deleting employee:', error);
      });
  };

  const toggleActiveStatus = (id, currentStatus) => {
    axios.patch(`http://shazilemp.pythonanywhere.com/Employee_management_system/users/${id}/`, { is_active: !currentStatus }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => {
        console.log("Patch request successful");
        // Refresh the page after updating status (if needed)
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  const handleSearchChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    axios.post('http://shazilemp.pythonanywhere.com/Employee_management_system/user/search/', search, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res.data);
        setSearchData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetPassword = (id) => {
  //  const pass=JSON.parse(sessionStorage.getItem('id'));
   sessionStorage.setItem('editdata',JSON.stringify(id))
     navigate('/changepass')
  };


  return (
    <div className='row container-fluid'>
      <div className="col-md-3 col-12">
        <Sidebar />
      </div>
    
      <div className="col-md-9 mt-5">
        <h3>Employees</h3>
        <button className='btn btn-primary mt-3 mb-2'>
          <NavLink to='/addemploye' className='text-white text-decoration-none'>Add New Employee</NavLink>
        </button>
        <form onSubmit={handleSearchSubmit} className="input-group mb-3">
          <input
            type="text"
            name='username'
            className="form-control"
            placeholder="Search by username"
            value={search.username}
            onChange={handleSearchChange}
          />
          <button className="btn btn-outline-secondary" type="submit">Search</button>
        </form>
        
        <div className="row">
          <div className="col-md-10">
            <div className="employee-list">
              {(searchData.length > 0 ? searchData : data).map((employee) => (
                <div key={employee.id} className="employee-item d-flex align-items-center mb-3">
                  <div className="employee-avatar">
                    <img src={employee.profile_photo} alt="" />
                  </div>
                  <div className="employee-details ms-3">
                    <h5>{employee.username}</h5>
                    <p>Email: {employee.email}</p>
                    <p>Role: {employee.role}</p>
                    <p>Status: {employee.is_active ? "Active" : "Inactive"}</p>
                    <div className='button-group'>
                      <button className='btn btn-outline-primary me-2' onClick={() => editEmp(employee.id)}>Edit</button>
                      <button className='btn btn-outline-danger me-2' onClick={() => deleteEmployee(employee.id)}>Delete</button>
                      <button className={`btn ${employee.is_active ? 'btn-outline-warning' : 'btn-outline-success'}`} onClick={() => toggleActiveStatus(employee.id, employee.is_active)}>
                        {employee.is_active ? "Deactivate" : "Activate"}
                      </button>
                      <button className='btn btn-outline-secondary ms-2' onClick={() => resetPassword(employee)}>Reset Password</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conditional rendering of additional card */}
          {searchData.length > 0 && (
            <div className="col-md-2">
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="card-title">Search Results</h5>
                  <ul className="list-group">
                    {searchData.map((result) => (
                      <li key={result.id} className="list-group-item">
                        {result.username}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default Employe;
