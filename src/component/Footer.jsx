import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <footer className="text-center bg-light text-dark  mt-5" id="footer" >
    
    <div className="container p-4 pb-0">
      
      <section className="">
        
        <div className="row">
        
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase text-dark mb-4 font-weight-bold">
              Empower DESK
            </h6>
            <p className='text-dark'>
            EmpowerDesk simplifies everyday work with deskless teams and keeps them connected, so you can focus on growing the business
            </p>
            <Button variant="btn btn-primary" as={Link} to="/login"  className="me-2 rounded-pill">Login</Button>
            <Button variant="outlin" className='rounded-pill' as={Link} to="/register">Start now, it's free</Button>
            <div >
              <img style={{width: '200px'}} src="images/logo.png" alt="img" />
          </div>
            </div>
          

          <hr className="w-100 clearfix d-md-none" />

    
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-dark w-20">
            <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
            <p>
              <p className="text-dark">Effortless Payroll Management</p>
            </p>
            <p>
              <p className="text-dark">Intuitive Admin Dashboard Management</p>
            </p>
            <p>
              <p className="text-dark">Streamlined Leave Management</p>
            </p>
            <p>
              <p className="text-dark">Effective Notification Management</p>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

        
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold text-dark">
              Useful links
            </h6>
            <p>
              <a className="text-dark">Your Account</a>
            </p>
            <p>
              <a className="text-dark">Become an Affiliate</a>
            </p>
            <p>
              <a className="text-dark">Shipping Rates</a>
            </p>
            <p>
              <a className="text-dark">Help</a>
            </p>
          </div>

        
          <hr className="w-100 clearfix d-md-none" />

        
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto text-dark mt-3 text-left">
  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
  <p className='text-dark'><i className="fas fa-home mr-3 text-dark"></i> New York, NY 10012, US</p>
  <p className='text-dark'><i className="fas fa-envelope mr-3 text-dark"></i> info@gmail.com</p>
  <p className='text-dark'><i className="fas fa-phone mr-3 text-dark"></i> + 01 234 567 88</p>
  <p className='text-dark'><i className="fas fa-print mr-3 text-dark"></i> + 01 234 567 89</p>
</div>

        
        </div>
    
      </section>


      <hr className="my-3"/>

      
      <section className="p-2 pt-0">
        <div className="row d-flex align-items-center">
          
          
    
          <div className="listing padding--14  flex-flex center-center">
                <span><a href="#">© Empower DESK</a></span>
                <span><a href="#">Contact us</a></span>
                <span><a href="#">Privacy & terms</a></span>
              </div>
    
          
    

        
          {/* <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
        
            <a
               className="btn btn-outline-light btn-floating m-1 text-dark"
               role="button"
               ><i className="fab fa-facebook-f text-dark"></i
              ></a>

        
            <a
               className="btn btn-outline-light btn-floating m-1 text-dark"
               role="button"
               ><i className="fab fa-twitter text-dark"></i
              ></a>

    

            <a
               className="btn btn-outline-light btn-floating m-1 text-dark"
               role="button"
               ><i className="fab fa-instagram text-dark"></i></a>
          </div> */}
          
        </div>
      </section>
    
    </div>
    
  </footer>
    </div>
  )
}

export default Footer
