import React, {lazy, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const importView = layout => 
  lazy (() =>
      import(layout).catch(() =>
      import("./Layout")
      )
  );

const Dashboard = () => {
  const [views, setViews] = useState([]);
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(currentUser);
    async function loadViews() {
          const View = await importView(currentUser.layout);
      setViews(<View />);
    }

    loadViews();
  }, [currentUser]);

  
  return (
    <div className="container">
      <header className="jumbotron">
        {views}
      </header>
    </div>
  );
};

export default Dashboard;