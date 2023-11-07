import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './component/Signup';
import Signin from './component/Signin';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Course from './component/Course';
import Login from "./component/Login"
import RegisterDetailed from './component/RegistrationDetailed';
import Register from './component/Register';
import Dashboard from "./component/Dashboard";
import Header from './component/Header';
import Erp from './component/Erp';
import NewRegistrationRequests from './component/NewRegistrationRequests';
import Enrollment from './component/Enrollment';
import PersonalInfo from './component/PersonalInfo';
import Photo from './component/Photo';
import ButtonFun from './component/ButtonFun';
import Address from './component/Address'
import  Academic from './component/Academic'
import Professional from './component/Professional';
import Registration from './component/Registration';
import Waiting from './component/Waiting'

function App() {

  function isAuthenticated() {
    const userData = JSON.parse(localStorage.getItem("currentUser"));
    if (userData) {
      return true
    }

    return false;
  }

  function PrivateRoute({ element, ...rest }) {
    const location = useLocation();
    if (isAuthenticated()) {
      return element;
    } else {
      return <Navigate to={`/login?redirect=${location.pathname}`} />;
    }
  }
  return (
    <>
      <Routes>

        <Route path='/erp' element={<Erp />} />
        <Route path='/' element={<Header />} />
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/personal' element={<PersonalInfo/>} />
        <Route path='/professional' element={<Professional />} />
        <Route path='/address' element={<Address />} />
        <Route path='/photo' element={<Photo />} />
        <Route path='/academic' element={<Academic />} />
        <Route path='/adminlogin' element={<Login />} />
        <Route path='/dashboard' element={<NewRegistrationRequests />} />
        <Route path='/adminregister' element={<Register />} />
        <Route path="/studentregister" element={<Signup />} />
        <Route path="/studentlogin" element={<Signin />} />
        <Route path='/enrollement' element={<ButtonFun />} />
        <Route path='/personal' element={<PersonalInfo />} />
        <Route path='/photo' element={<Photo />} />
        <Route path='/waiting' element={<Waiting />} />

        <Route
          path="/selectCourse"
          element={<PrivateRoute element={<Course />} />}


        />
      </Routes>
    </>
  )
}

export default App
