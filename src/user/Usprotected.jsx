import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Usprotected = (props) => {
    const {Comp}=props;
    const navigate=useNavigate();
    useEffect(()=>{
const ulogin=JSON.parse(sessionStorage.getItem('ulogin'));
if(ulogin){
navigate('/uhome');
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

export default Usprotected
