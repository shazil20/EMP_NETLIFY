// import React from 'react';
// import './App.css';
// import LoginForm from './component/Login';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// // import Dashboard from './admin/Dashboard';

// import AdminDashboard from './admin/Dashboard';
// import Employe from './admin/Employe';
// import AddEmploye from './admin/AddEmploye';
// import EditEmp from './admin/EditEmp';
// import RegistrationForm from './component/Register';
// import Notification from './admin/Notification';
// import AddNotfication from './admin/AddNotfication';
// import EditNotification from './admin/EditNotification';
// import Salary from './admin/Salary';
// import Home from './component/Home';
// import Services from './component/Services';
// import Blog from './component/Blog';
// import Contact from './component/Contact';
// function App() {
//   return (
//  <>
// <BrowserRouter>
// {/* <LoginForm/> */}
// <Routes>
//   <Route path='/' element={<Home/>}></Route>
//   <Route path='/login' element={<LoginForm/>}></Route>
//   <Route path='/register' element={<RegistrationForm/>}></Route>
//   <Route path='/adashbaord' element={<AdminDashboard/>}></Route>
//   <Route path='/employe' element={<Employe/>}></Route>
//   <Route path='/addemploye' element={<AddEmploye/>}></Route>
//   <Route path='/editemp' element={<EditEmp/>}></Route>
//   <Route path='/notification' element={<Notification/>}></Route>
//   <Route path='/addnotification' element={<AddNotfication/>}></Route>
//   <Route path='/editnotification' element={<EditNotification/>}></Route>
//   <Route path='/salary' element={<Salary/>}></Route>
//   <Route path='/blog' element={<Blog/>}></Route>
//   <Route path='/services' element={<Services/>}></Route>
//   <Route path='/contact' element={<Contact/>}></Route>
// </Routes>
// </BrowserRouter>
//  </>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import LoginForm from './component/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Services from './component/Services';
import Blog from './component/Blog';
import Contact from './component/Contact';


import Dashboard from './admin/Dashboard';
import Employe from './admin/Employe';
import AddEmploye from './admin/AddEmploye';
import EditEmp from './admin/EditEmp';
import RegistrationForm from './component/Register';
import Notification from './admin/Notification';
import AddNotfication from './admin/AddNotfication';
import EditNotification from './admin/EditNotification';
import Salary from './admin/Salary';
import Home from './component/Home';
import Uhome from './user/Uhome';
import Unotification from './user/Unotification';
import Usalary from './user/Usalary';
import Uemp from './user/Uemp';
import Leave from './user/Leave';
import ViewLeaves from './admin/ViewLeaves';
// import Anav from './component/Badge';
import Usprotected from './user/Usprotected';
import Aprotected from './admin/Aprotected';
// import Raw from './component/Raw';
import DelPreviousSlip from './admin/DelPreviousSlip';
import Changepassword from './admin/Changepassword';
import Todo from './user/Todo';
import LeaveStatus from './user/LeaveStatus';
function App() {
  return (
 <>
<BrowserRouter>
{/* <LoginForm/> */}
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/register' element={<RegistrationForm/>}></Route>
  <Route path='/login' element={<LoginForm/>}></Route>
  <Route path='/blog' element={<Blog/>}></Route>
  <Route path='/services' element={<Services/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  {/* <Route path='/anav' element={<Anav/>}></Route> */}


  {/* admin start */}
  <Route path='/adashboard' element={<Aprotected Comp={Dashboard}/>}></Route>
  <Route path='/employe' element={<Aprotected Comp={Employe}/>}></Route>
  <Route path='/addemploye' element={<Aprotected Comp={AddEmploye}/>}></Route>
  <Route path='/editemp' element={<Aprotected Comp={EditEmp}/>}></Route>
  <Route path='/notification' element={<Aprotected Comp={Notification}/>}></Route>
  <Route path='/addnotification' element={<Aprotected Comp={AddNotfication}/>}></Route>
  <Route path='/editnotification' element={<Aprotected Comp={EditNotification}/>}></Route>
  <Route path='/salary' element={<Aprotected Comp={Salary}/>}></Route>
  <Route path='/viewleave' element={<Aprotected Comp={ViewLeaves}/>}></Route>


  {/* user start */}
  <Route path='/uhome' element={<Usprotected Comp={Uhome}/>}></Route>
  <Route path='/unotification' element={<Usprotected Comp={Unotification}/>}></Route>
  <Route path='/usalary' element={<Usprotected Comp={Usalary}/>}></Route>
  <Route path='/uemp' element={<Usprotected Comp={Uemp}/>}></Route>
  <Route path='/leave' element={<Usprotected Comp={Leave}/>}></Route>
  <Route path='/delpreviouslip' element={<DelPreviousSlip/>}></Route>
  <Route path='/changepass' element={<Changepassword/>}></Route>
  <Route path='/todo' element={<Todo/>}></Route>
  <Route path='/leavestatus' element={<LeaveStatus/>}></Route>
  

  {/* <Route path='/raw' element={<Raw/>}></Route> */}

</Routes>
</BrowserRouter>
 </>
  );
}

export default App;



