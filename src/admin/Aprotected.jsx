import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Aprotected = (props) => {
    const {Comp}=props;
    const navigate=useNavigate();
    useEffect(()=>{
const alogin=JSON.parse(sessionStorage.getItem('alogin'));
if(alogin){
navigate('/adashboard');
}else{
navigate('/login');
}
    },[])
  return (
    <div>
        <Comp/>
      
    </div>
  )
}

export default Aprotected
