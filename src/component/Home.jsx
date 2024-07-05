import React from 'react';
import { motion } from 'framer-motion';
import NavbarComponent from './Navbar';
import Footer from './Footer';
import Scrolltop from './Scrolltop';
import TawkTo from './TawkTo';
import GoBackButton from './GoBackButton';
import { Link } from 'react-router-dom';
import { Container,Button } from 'react-bootstrap';
import shazil from '../images/shazil.webp'
import asad from '../images/asad.jpeg'
import hasan from '../images/hasan.jpg'


const Home = () => {
  return (
    <div>
      <NavbarComponent />
      
      <div className="container text-center mt-5" style={{ marginTop: '5rem', paddingTop: '5rem' }}>
        <motion.h2 
          style={{ fontSize: '5rem', fontWeight: '700' }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Manage Your Entire Team In One App
        </motion.h2>
        <motion.p
          style={{ fontSize: '1.5rem', marginTop: '3rem' }}
          className='w-75 me-auto ms-auto'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          EmpowerDesk simplifies everyday work with deskless teams and keeps them connected, so you can focus on growing the business
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >

          <Button variant="btn btn-primary" as={Link} to="/login"  className='btn btn-primary rounded-pill p-3 me-5'>Start Your Journey</Button>
          <Button variant="outline" className="me-2 rounded-pill border-2-blue" as={Link} to="/services">See what we do</Button>
        </motion.div>
        <motion.div
          className="icon d-flex justify-content-center align-items-center mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <span className='me-5'><i className="fa-solid fa-check m-3"></i>No credit card needed</span>
          <span><i className="fa-solid fa-check me-3"></i>Less than 5 min to set up</span>
        </motion.div>
      </div>

      <div className="firstsection container mt-5">
        <motion.button
          className='btn btn-outline-light p-4 bg-light rounded-pill text-dark btne'
          style={{ border: '2px solid black' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Why Empower desk ?
        </motion.button>
      </div>

      <div className="container mt-5">
        <div className="row" style={{ marginTop: '10rem' }}>
          <div className="col-md-7">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Schedule & Time Tracking
            </motion.p>
            <motion.h2
              style={{ fontSize: '3rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              Full Control from Notification to payroll
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.1 }}
            >
              Easily create & send schedules, accurately track work hours to digital timesheets, and get pay right, time and again.
            </motion.p>
            <div className="row">
              <div className="col-md-6">
                <motion.span
                  className='me-5'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                >
                  <i className="fa-solid fa-check m-3"></i>Team Scheduling
                </motion.span>
                <motion.span
                  className='me-5'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.7 }}
                >
                  <i className="fa-solid fa-check m-3"></i>Time Clock
                </motion.span>
              </div>
              <div className="col-md-6">
                <motion.span
                  className='me-5'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 3.0 }}
                >
                  <i className="fa-solid fa-check m-3"></i>Geofence
                </motion.span>
                <motion.span
                  className='me-5'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 3.3 }}
                >
                  <i className="fa-solid fa-check m-3"></i>One Click Payroll
                </motion.span>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <motion.img
              src="images/img1.jpeg"
              alt=""
              className='img-fluid'
              style={{ borderRadius: '20px' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 3.6 }}
            />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row" style={{ marginTop: '10rem' }}>
          <div className="col-md-5 px-5">
            <motion.img
              src="images/img2.jpeg"
              alt=""
              className='img-fluid'
              style={{ borderRadius: '20px' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 3.9 }}
            />
          </div>
          <div className="col-md-7 px-5">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 4.2 }}
            >
              DAILY OPERATIONS
            </motion.p>
            <motion.h2
              style={{ fontSize: '3rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 4.5 }}
            >
              See the job done and list them on TODO.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 4.8 }}
            >
              Keep staff on track with custom checklists and ensure work flows with the todo list.
            </motion.p>
            <div className="row">
              <div className="col-md-6">
                <motion.span
                  className='me-5'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 5.1 }}
                >
                  <i className="fa-solid fa-check m-3"></i>Mobile Checklists
                </motion.span>
                <motion.span
                  className='me-5'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 5.4 }}
                >
                  <i className="fa-solid fa-check m-3"></i>Task Management
                </motion.span>
              </div>
              <div className="col-md-6">
                <motion.span
                  className='me-5'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 5.7 }}
                >
                  <i className="fa-solid fa-check m-3"></i>Conditional Forms
                </motion.span>
                <motion.span
                  className='me-5'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 6.0 }}
                >
                  <i className="fa-solid fa-check m-3"></i>Time Management
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row" style={{ marginTop: '10rem' }}>
          <div className="col-md-7">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 6.3 }}
            >
              NOTIFICATIONS
            </motion.p>
            <motion.h2
              style={{ fontSize: '3rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 6.6 }}
            >
              One channel to work better together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 6.9 }}
            >
              Notification access to connect every single employee and make sure the right information reaches them, wherever they are.
            </motion.p>
            <div className="row">
              <div className="col-md-6">
                <motion.span
                  className='me-5'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 7.2 }}
                >
                  <i className="fa-solid fa-check m-3"></i>Company Updates
                </motion.span>
                <motion.span
                  className='me-5'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 7.5 }}
                >
                  <i className="fa-solid fa-check m-3"></i>Event Management
                </motion.span>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <motion.img
              src="images/img3.jpeg"
              alt=""
              className='img-fluid'
              style={{ borderRadius: '20px' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 7.8 }}
            />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row" style={{ marginTop: '10rem' }}>
          <div className="col-md-5 px-5">
            <motion.img
              src="images/img4.png"
              alt=""
              className='img-fluid'
              style={{ borderRadius: '20px' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 8.1 }}
            />
          </div>
          <div className="col-md-7 px-5">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 8.4 }}
            >
              SALARY SLIPS
            </motion.p>
            <motion.h2
              style={{ fontSize: '3rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 8.7 }}
            >
              Get access to salary slips every month.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 9.0 }}
            >
              Updates on salary slip every month to access them easily.
            </motion.p>
            <div className="row">
              <div className="col-md-6">
                <motion.span
                  className='me-5'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 9.3 }}
                >
                  <i className="fa-solid fa-check m-3"></i>Salary slip access
                </motion.span>
                <motion.span
                  className='me-5'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 9.6 }}
                >
                  <i className="fa-solid fa-check m-3"></i>Monthly updates
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-5 mb-5'>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 9.9 }}
        >
          OUR DEVELOPERS
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 10.2 }}
        >
          Your partners every step of the way
        </motion.h1>
        <div className="row justify-content-center mt-5">
          <div className="col-auto px-5">
            <motion.div
              className='img-fluid rounded-circle'
              style={{ width: '150px', height: '150px', backgroundColor: 'gray', margin: '0 60px' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 10.5 }}
            >
                      <img 
          src={shazil} 
          alt="Your Image" 
          style={{ width: '100%', height: '100%', objectFit: 'cover',borderRadius:'50%' }} 
        />
            </motion.div>
          </div>
          <div className="col-auto px-5">
            <motion.div
              className='img-fluid rounded-circle'
              style={{ width: '150px', height: '150px', backgroundColor: 'gray', margin: '0 60px' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 10.8 }}
            >
                        <img 
          src={hasan} 
          alt="Your Image" 
          style={{ width: '100%', height: '100%', objectFit: 'cover',borderRadius:'50%'  }} 
        />
            </motion.div>
          </div>
          <div className="col-auto px-5">
            <motion.div
              className='img-fluid rounded-circle'
            
              style={{ width: '150px', height: '150px', backgroundColor: 'gray', margin: '0 60px' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 11.1 }}
            >
                 <img 
          src={asad} 
          alt="Your Image" 
          style={{ width: '100%', height: '100%', objectFit: 'cover',borderRadius:'50%'  }} 
        />
            </motion.div>
          </div>
        </div>

        <motion.div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'black',
            margin: '20px 0',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 11.4 }}
        ></motion.div>

        <div className="row justify-content-center mt-5">
          <div className="col-auto px-5">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 11.7 }}
            >
              <h3>Muhammad Shazil</h3>
            </motion.div>
          </div>
          <div className="col-auto px-5">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 12.0 }}
            >
              <h3>Hassan Farooq</h3>
            </motion.div>
          </div>
          <div className="col-auto px-5">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 12.3 }}
            >
              <h3>Asad Munir</h3>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
      <Scrolltop/>
      <TawkTo/>
      <GoBackButton/>
    </div>
  );
};

export default Home;
