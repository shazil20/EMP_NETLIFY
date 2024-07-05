// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTachometerAlt, faUsers, faBell, faFileAlt, faMoneyBillWave, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { FiMenu, FiX } from 'react-icons/fi';
// import Image from 'react-bootstrap/Image';
// import './asidebar.css';

// const Sidebar = () => {
//     const [alogin, setALogin] = useState(null);
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Fetch or retrieve 'alogin' from session storage
//         const storedALogin = JSON.parse(sessionStorage.getItem('alogin'));
//         if (storedALogin) {
//             setALogin(storedALogin);
//         }
//     }, []);

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     const logout = () => {
//         sessionStorage.removeItem('alogin');
//         navigate('/');
//     };

//     return (
//         <div className={`sidebar ${alogin ? 'active' : ''}`}>
//             <div className="brand">
//                 <i className='bx bxs-smile'></i>
//                 <span className="text">Empower DESK</span>
//             </div>
//             <button className="navbar-toggler" onClick={toggleSidebar}>
//                 {sidebarOpen ? <FiX /> : <FiMenu />}
//             </button>
//             {alogin && (
//                 <div className="user-info d-flex justify-content-center align-items-center">
//                     <div className='me-3'>
//                         <Image src={alogin.user.profile_photo_url} width="50px" alt="" roundedCircle />
//                     </div>
//                     <div className="text">
//                         <h5>{alogin.user.username}</h5>
//                         <h6 className='text-success'>Active</h6>
//                     </div>
//                 </div>
//             )}
//             <nav className={`nav flex-column ${sidebarOpen ? 'open' : ''}`}>
//                 <NavLink activeClassName="active" to="/adashboard">
//                     <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
//                 </NavLink>
//                 <NavLink activeClassName="active" to="/employe">
//                     <FontAwesomeIcon icon={faUsers} /> Employee
//                 </NavLink>
//                 <NavLink activeClassName="active" to="/notification">
//                     <FontAwesomeIcon icon={faBell} /> Notification
//                 </NavLink>
//                 <NavLink activeClassName="active" to="/viewleave">
//                     <FontAwesomeIcon icon={faFileAlt} /> Leave Management
//                 </NavLink>
//                 <NavLink activeClassName="active" to="/salary">
//                     <FontAwesomeIcon icon={faMoneyBillWave} /> Salary Slips
//                 </NavLink>
//                 {alogin && (
//                     <button className="nav-link logout-button" onClick={logout}>
//                         <FontAwesomeIcon icon={faSignOutAlt} /> Logout
//                     </button>
//                 )}
//             </nav>
//         </div>
//     );
// };

// export default Sidebar;


import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faBell, faFileAlt, faMoneyBillWave, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Offcanvas, Image, Button } from 'react-bootstrap';
import { FiMenu, FiX } from 'react-icons/fi';
import './asidebar.css';

const Sidebar = () => {
    const [alogin, setALogin] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch or retrieve 'alogin' from session storage
        const storedALogin = JSON.parse(sessionStorage.getItem('alogin'));
        if (storedALogin) {
            setALogin(storedALogin);
        }
    }, []);

    const handleClose = () => setShowSidebar(false);
    const handleShow = () => setShowSidebar(true);

    const logout = () => {
        sessionStorage.removeItem('alogin');
        navigate('/');
    };

    return (
        <>
            <Navbar bg="light" expand={false}>
                <Navbar.Brand href="#">Empower DESK</Navbar.Brand>
                <Button variant="outline-primary" onClick={handleShow}>
                    {showSidebar ? <FiX /> : <FiMenu />}
                </Button>
            </Navbar>

            <Offcanvas show={showSidebar} onHide={handleClose} className="sidebar">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Empower DESK</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {alogin && (
                        <div className="user-info d-flex justify-content-center align-items-center mb-4">
                            <div className='me-3'>
                                <Image src={alogin.user.profile_photo_url} width="50px" alt="" roundedCircle />
                            </div>
                            <div className="text">
                                <h5>{alogin.user.username}</h5>
                                <h6 className='text-success'>Active</h6>
                            </div>
                        </div>
                    )}
                    <Nav className="flex-column">
                        <NavLink className="nav-link" activeClassName="active" to="/adashboard" onClick={handleClose}>
                            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/employe" onClick={handleClose}>
                            <FontAwesomeIcon icon={faUsers} /> Employee
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/notification" onClick={handleClose}>
                            <FontAwesomeIcon icon={faBell} /> Notification
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/viewleave" onClick={handleClose}>
                            <FontAwesomeIcon icon={faFileAlt} /> Leave Management
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/salary" onClick={handleClose}>
                            <FontAwesomeIcon icon={faMoneyBillWave} /> Salary Slips
                        </NavLink>
                        {alogin && (
                            <Button variant="link" className="nav-link text-danger" onClick={logout}>
                                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                            </Button>
                        )}
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Sidebar;
