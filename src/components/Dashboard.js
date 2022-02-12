import React, { useState, useEffect } from "react";
import Layout from "./Layout"



const Dashboard = () => {
  const [content, setContent] = useState("");

  
  return (
    <div className="container">
      <header className="jumbotron">
        <h3><Layout /></h3>
      </header>
    </div>
  );
};

export default Dashboard;