import React, { useState, useEffect, useCallback } from "react";
import {  useSelector } from "react-redux";
import { BrowserRouter,  Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import  {logout}  from "./actions/auth";
//import { clearMessage } from "./actions/message";

export default function App() {
  const { user: currentUser } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
        <div className="container mt-3">
        
           <Routes>
              <Route path='/' element={ <Dashboard />} />
              <Route exact path='/login' element={ <Login />} />
            </Routes>
        </div>

        {/* <AuthVerify logOut={logOut}/> */}
      </div>
    </BrowserRouter>
  );
}
