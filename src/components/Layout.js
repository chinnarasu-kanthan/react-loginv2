import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const Layout = () => {
  //const { user: currentUser } = useSelector((state) => state.auth);

  // if (!currentUser) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>Chinna</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> 
      </p>
      <p>
        <strong>Id:</strong>
      </p>
      <p>
        <strong>Email:</strong> 
      </p>
      <strong>Authorities:</strong>
      <ul>
       
      </ul>
    </div>
  );
};

export default Layout;
