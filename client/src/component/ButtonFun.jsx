import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Sidebar from './Sidebar';
import './Button.css'



const ButtonFun = () => {
  return (
    <>
      <Sidebar/>
      <div className="button-container mericlass">

        <Link to="/personal">
          <Button>Personal</Button>
        </Link>
        <Link to="/professional">
          <Button>Professional</Button>
        </Link>
        <Link to="/address">
          <Button>Address</Button>
        </Link>
        <Link to="/academic">
          <Button>Academic</Button>
        </Link>
        <Link to="/photo">
          <Button>Photo & Signature</Button>
        </Link>
      </div>
     
    </>
  );
};

export default ButtonFun;