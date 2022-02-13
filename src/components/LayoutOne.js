import React from 'react';

import { useSelector } from 'react-redux';

const LayoutOne = () => {
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
          <strong>First Name:</strong>
        </p>
        <p>
          <strong>Last Name:</strong>
        </p>
        <p>
          <strong>Email:</strong>
        </p>
    
      </div>
    </div>
  );
};

export default LayoutOne;