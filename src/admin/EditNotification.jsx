import React,{useState} from 'react'
import Sidebar from './Sidebar';
import axios from 'axios';
const EditNotification = () => {
    const data=JSON.parse(sessionStorage.getItem('editdata'));
    const id=data.id;
    const [not,updnot]=useState({
        subject:data.subject,
      detail:data.detail
      })
    const handleChange=(e)=>{
updnot({...not,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.patch(`http://shazilemp.pythonanywhere.com/Employee_management_system/notifications/${id}/`,not)
        .then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log(err)
        })  
    }
  return (
    <div className='row'>
       <div className="col-md-3">
            <Sidebar/>
        </div> 
         <div className="col-md-9">
      <h1 className='m-5 text-center'>Update Notification</h1>
      <form onSubmit={handleSubmit} className='w-50 mx-auto'>
        <div className="form-group">
          <label htmlFor="subject">Subject Line:</label>
          <input
            type="text"
            name="subject"
            className='form-control'
            value={not.subject}
            onChange={handleChange}
            id="subject"
       
          />
        </div>
        <div className="form-group">
          <label htmlFor="detail">Detail:</label>
          <textarea
            name="detail"
            className='form-control'
            value={not.detail}
            onChange={handleChange}
            id="detail"
          />
        </div> <br />
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>


        
    </div>
  )
}

export default EditNotification
