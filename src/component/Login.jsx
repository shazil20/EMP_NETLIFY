import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarComponent from './Navbar';
import GoBackButton from './GoBackButton';
import Footer from './Footer';
import '../login.css'; // Import CSS file for styling

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const requestBody = {
      username: username,
      password: password
    };
  
    try {
      const response = await fetch('http://shazilemp.pythonanywhere.com/Employee_management_system/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
    
      console.log(data); 
      
      if (data.user.role === 'admin') {
        sessionStorage.setItem('alogin', JSON.stringify(data));
        console.log('Admin');
        navigate('/adashboard');
      } else {
        sessionStorage.setItem('ulogin', JSON.stringify(data));
        navigate('/uhome');
      }
  
      toast.success('Login successful!');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setErrorMessage('Incorrect username or password.');
      toast.error('Login failed. Incorrect username or password.');
    }
  };
  
  return (
    <>
      <NavbarComponent />
      <div className="login-root mt-5">
        <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
          <div className="loginbackground box-background--white padding-top--64">
            <div className="loginbackground-gridContainer">
              <div className="box-root flex-flex" style={{ gridArea: 'top / start / 8 / end' }}>
                <div className="box-root" style={{ backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '4 / 2 / auto / 5' }}>
                <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '6 / start / auto / 2' }}>
                <div className="box-root box-background--blue800" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '7 / start / auto / 4' }}>
                <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '8 / 4 / auto / 6' }}>
                <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '2 / 15 / auto / end' }}>
                <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '3 / 14 / auto / end' }}>
                <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '4 / 17 / auto / 20' }}>
                <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '5 / 14 / auto / 17' }}>
                <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }}></div>
              </div>
            </div>
          </div>
          <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              <h1><a href="/" rel="dofollow">Empower DESK</a></h1>
            </div>
            <div className="formbg-outer">
              <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                  <span className="padding-bottom--15">
                    <div style={{ fontWeight: 'bolder' }}>Welcome Back !!!</div>
                    <p style={{ fontSize: '12px' }}>Please use your username and password HR provided to login.</p>
                  </span>
                  <form id="stripe-login" onSubmit={handleSubmit}>
                    <div className="field padding-bottom--24">
                      <div id="errorMessage" style={{ color: 'red', marginTop: '10px', display: errorMessage ? 'block' : 'none' }}>{errorMessage}</div>
                      <label htmlFor="email">Username</label>
                      <input type="text" name="username" id="login" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                        <label htmlFor="password">Password</label>
                      </div>
                      <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                      <label htmlFor="checkbox">
                        <p>Incase you forget password <a href="http://shazilemp.pythonanywhere.com/Employee_management_system/password_reset/">Reset Password</a> Click here!</p>
                        
                      </label>
                    </div>
                    <div className="field padding-bottom--24">
                      <input type="submit" name="submit" value="Continue" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer-link padding-top--24">
                <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                  <span><a href="#">© Empower DESK</a></span>
                  <span><a href="#">Contact us</a></span>
                  <span><a href="#">Privacy & terms</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginForm;
