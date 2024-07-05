import React, { useState } from 'react';
import NavbarComponent from './Navbar';
import Footer from './Footer';
import Scrolltop from './Scrolltop';
import { motion } from 'framer-motion';
import GoBackButton from './GoBackButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phoneno: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://shazilemp.pythonanywhere.com/Employee_management_system/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('Message sent successfully!');
      } else {
        toast.error('Message failed to send. Please try again.');
        console.error('Message sent failed:', response.statusText);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error('Error occurred:', error);
    }
  };

  return (
    <>
      <NavbarComponent />
      <div className="container text-center mt-5" style={{ marginTop: '5rem', paddingTop: '5rem' }}>
        <motion.h2 
          style={{ fontSize: '5rem', fontWeight: '700' }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Connect with us to make hr process smooth
        </motion.h2>
        <motion.p
          style={{ fontSize: '1.5rem', marginTop: '3rem' }}
          className='w-75 me-auto ms-auto'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          EmpowerDesk will ease out all complex functionalities of spreadsheets or records of employees on a single web app. Reach out to us to enjoy the ease.
        </motion.p>
      </div>
      <motion.div
        style={{ fontSize: '1.5rem', marginTop: '3rem' }}
        className='w-75 me-auto ms-auto'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div style={styles.formContainer}>
          <h2 style={styles.title}>Drop a message to say hi 🙈</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="phoneno" style={styles.label}>Phone-no:</label>
              <input
                type="number"
                id="phoneno"
                name="phoneno"
                value={formData.phoneno}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>Message:</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.button}>Send 😎</button>
          </form>
        </div>
      </motion.div>
      <Footer />
      <Scrolltop />
      <GoBackButton />
      <ToastContainer />
    </>
  );
};

const styles = {
  formContainer: {
    maxWidth: '600px',
    margin: 'auto',
    marginTop: '5rem',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
    marginTop: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
  },
};

export default Contact;
