import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Offcanvas, Button, Image, } from 'react-bootstrap';
import { FiMenu, FiX } from 'react-icons/fi';
import './Sidebar.css'; // Import your custom CSS file

const Usidebar = () => {
    const [ulogin, setULogin] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const navigate = useNavigate();
    const uulogin=JSON.parse(sessionStorage.getItem('ulogin'));

    useEffect(() => {
        // Fetch or retrieve 'ulogin' from session storage
        const storedULogin = JSON.parse(sessionStorage.getItem('ulogin'));
        if (storedULogin) {
            setULogin(storedULogin);
        }
    }, []);

    const handleClose = () => setShowSidebar(false);
    const handleShow = () => setShowSidebar(true);

    const logout = () => {
        sessionStorage.removeItem('ulogin');
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
                    {uulogin && (
                       <div className="user-info d-flex justify-content-center align-items-center mb-4">
                       <div className='me-3'>
                           <Image src={uulogin.user.profile_photo_url} width="50px" alt="" roundedCircle />
                       </div>
                       <div className="text">
                           <h5>{uulogin.user.username}</h5>
                           <h6 className='text-success'>Active</h6>
                       </div>
                   </div>
                    )}
                    <Nav className="flex-column">
                        <NavLink className="nav-link" activeClassName="active" to="/uhome" onClick={handleClose}>
                            <i className='bx bxs-dashboard'></i> Dashboard
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/uemp" onClick={handleClose}>
                            <i className='bx bxs-shopping-bag-alt'></i> Employee Detail
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/unotification" onClick={handleClose}>
                            <i className='bx bxs-shopping-bag-alt'></i> Notification
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/leave" onClick={handleClose}>
                            <i className='bx bxs-shopping-bag-alt'></i> Leave Application
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/todo" onClick={handleClose}>
                            <i className='bx bxs-shopping-bag-alt'></i> Todo List
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/leavestatus" onClick={handleClose}>
                            <i className='bx bxs-shopping-bag-alt'></i> Leave Status
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/usalary" onClick={handleClose}>
                            <i className='bx bxs-group'></i> Download Salary Slips
                        </NavLink>
                     
                        {ulogin && (
                            <Button variant="link" className="nav-link text-danger" onClick={logout}>
                                <i className='bx bxs-log-out-circle'></i> Logout
                            </Button>
                        )}
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Usidebar;
