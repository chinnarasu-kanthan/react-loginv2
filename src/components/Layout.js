import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Layout = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  // if (!currentUser) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <div className="container">
      <div className="card card-container">
        <header className="jumbotron">
          <h3>
            <strong>Profile</strong> 
          </h3>
        </header>
        <p>
          <strong>First Name:{currentUser.firstName}</strong>
        </p>
        <p>
          <strong>Last Name:{currentUser.lastName}</strong>
        </p>
        <p>
          <strong>Email:{currentUser.username}</strong>
        </p>
    
      </div>
    </div>
  );
};


export default Layout;
