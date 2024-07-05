import React from 'react';
import { motion } from 'framer-motion';
import NavbarComponent from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Scrolltop from './Scrolltop';
import GoBackButton from './GoBackButton';

const Blog = () => {
  return (
    <div className="blog-container">
      <NavbarComponent />

      <main className="empower-desk" style={{ maxWidth: '90%', margin: '0 auto', padding: '2rem', marginTop: '5rem' }}>
        <motion.h1 
          style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2rem' }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Empower Your Workforce, Empower Your Business
        </motion.h1>
        
        <motion.p 
          style={{ lineHeight: '1.5', color: '#666' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Tired of clunky spreadsheets and outdated HR processes? Empower Desk is the employee management system designed to streamline operations and empower both HR and your employees. It goes beyond just managing employees; it fosters a seamless and enriching experience for everyone.
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          How to Empower Your Team with the Right Desk Setup (and Why It Matters)
        </motion.h2>
        
        <div className="row">
          <motion.div 
            className='col-md-6'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p>
              In today's competitive business landscape, retaining top talent and fostering a productive work environment are critical for success. But managing a growing workforce can be a complex task. Here's where an Employee Management System (EMS) comes in as a game-changer.
            </p>
            <h5>Empowering Your Team Through an EMS.</h5>
            <p>An EMS goes beyond traditional HR software. It's a comprehensive platform that empowers both employees and managers, streamlining processes and enhancing overall workflow. Here's how:</p>
            <ul>
              <li><p><b>Simplified Onboarding: </b> Streamline the onboarding process with digital forms, automated document collection, and clear communication channels. This sets new hires up for success from day one.</p></li>
              <li><p><b>Improved Communication: </b>  Break down communication silos with centralized messaging features. Employees can easily connect with colleagues, access company announcements, and stay informed.</p></li>
              <li><p><b>Enhanced Performance Management: </b> Set clear goals and track employee progress with customizable dashboards. Performance reviews become a collaborative process, leading to ongoing development.</p></li>
              <li><p><b>Boosted Efficiency: </b> Automate repetitive tasks like leave requests, time-off tracking, and expense management. This frees up valuable time for employees to focus on core responsibilities.</p></li>
              <li><p><b>Employee Self-Service: </b> Empower employees to manage their information, update personal details, and access payslips through a self-service portal. This reduces administrative burden for HR and fosters a sense of ownership.</p></li>
            </ul>
          </motion.div>
          
          <motion.div 
            className='col-md-6'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <img src="images/employees.jpg" alt="" style={{ width: '100%' }} />
            <img src="images/hr.jpg" alt=""  style={{ width: '100%', marginTop: '3rem' }} />
          </motion.div>
        </div>

        <motion.section 
          className="features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          
        </motion.section>

        <motion.p 
          style={{ lineHeight: '1.5', textAlign: 'center', marginTop: '2rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Ready to experience the Empower Desk difference? Sign up for a free trial today and see how it can transform your HR processes and empower your workforce!
        </motion.p>

        <motion.button 
          style={{ background: 'skyblue', color: 'white', padding: '1rem 2rem', borderRadius: '5px', border: 'none', cursor: 'pointer', margin: '1rem auto', display: 'block' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          as={Link} to="/login"
        >
          Start Now 😄
        </motion.button>
      </main>

      <Footer />
      <Scrolltop/>
      <GoBackButton/>
    </div>
  );
};

export default Blog;
