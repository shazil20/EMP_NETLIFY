import React from 'react';
import Usidebar from './Usidebar';

const Uemp = () => {
    const udata = JSON.parse(sessionStorage.getItem('ulogin'));
    // const { user } = udata;
    // console.log(user);
    if(!udata){
        return <div>Loading......</div>
    }

    return (
        <div className='row container-fluid'>
            <div className="col-md-3">
                <Usidebar />
            </div>
            <div className="col-md-9">
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <img
                                src={udata.user.profile_photo_url}
                                alt=""
                                className='rounded-circle mt-4 mb-4'
                                width="200px"
                                height="200px"
                            />
                            <h3 className="card-title">{udata.user.username}</h3>
                            <p className="card-text"><strong>First name:</strong> {udata.user.first_name}</p>
                            <p className="card-text"><strong>Last name:</strong> {udata.user.last_name}</p>
                            <p className="card-text"><strong>Phone no.:</strong> {udata.user.phone_number}</p>
                            <p className="card-text"><strong>Email:</strong> {udata.user.email}</p>
                            <p className="card-text"><strong>Designation:</strong> {udata.user.designation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Uemp;

// import React, { useState } from 'react';
// import { Container, Form, Button, Col, Image } from 'react-bootstrap';
// // import Unav from './Unav';
// import './Uprofile.css';
// import axios from 'axios';
// import Usidebar from './Usidebar';

// function Uemp() {
//   const ulogin = JSON.parse(sessionStorage.getItem('ulogin'));
  // const id = ulogin.id;
  // const [formData, setFormData] = useState({
  //   username: ulogin.username,
  //   // password: '',
  //   profile_photo: ulogin.profile_photo_url
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData({ ...formData, profile_photo: file });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   const updateData = new FormData();
  //   updateData.append('username', formData.username);
  //   updateData.append('password', formData.password);
  //   if (formData.profile_photo instanceof File) {
  //     updateData.append('profile_photo', formData.profile_photo);
  //   }

  //   axios.patch(`http://192.168.12.108:8000/Employee_management_system/users/${id}/`, updateData)
  //     .then((res) => {
  //       console.log(res.data);
  //       // Update session storage with new user data
  //       sessionStorage.setItem('ulogin', JSON.stringify(res.data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

//   return (
//     <Container fluid className="row mt-5">
//       <Col md={3}>
//         <Usidebar />
//       </Col>
//       <Col md={9}>
//         <div className="profile-wrapper">
//           <h2>Edit Profile</h2>
//           <Form >
//             <Form.Group controlId="formProfileImage" className="mb-3">
//               <Form.Label>Profile Image</Form.Label>
//               <div className="mb-3">
//                 <Image 
//                   src={ulogin.user.profile_photo_url }
//                   roundedCircle
//                   width={150}
//                   height={150}
//                   className="profile-image"
//                 />
//               </div>
//               {/* <Form.Control type="file"  style={{ height: '8vh' }} /> */}
//             </Form.Group>
//             <Form.Group controlId="formUsername" className="mb-3">
//               <Form.Label>Username</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="username"
//                 value={ulogin.user.username}
//                 placeholder="Enter your username"
//                 // onChange={handleChange}
//                 // required
//                 style={{ height: '8vh' }}
//               />
//             </Form.Group>
//             <Form.Group controlId="formEmail" className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={ulogin.user.email}
//                 placeholder="Enter your email"
//                 // onChange={handleChange}
//                 required
//                 readOnly
//                 style={{ height: '8vh' }}
//               />
//             </Form.Group>
//             {/* <Form.Group controlId="formNewPassword" className="mb-3">
//               <Form.Label>New Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 placeholder="Enter new password"
//                 onChange={handleChange}
//                 style={{ height: '8vh' }}
//               />
//             </Form.Group> */}
//             <Button variant="primary" type="submit" style={{ height: '8vh' }}>
//               Update Profile
//             </Button>
//           </Form>
//         </div>
//       </Col>
//     </Container>
//   );
// }

// export default Uemp;

