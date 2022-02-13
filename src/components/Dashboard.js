import React, {lazy, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const importView = layout => 
  lazy (() =>
      import(layout).catch((e) =>
          console.log(e)
      )
  );

const Dashboard = () => {
  const [views, setViews] = useState([]);
  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(currentUser);
    async function loadViews() {
          const View = await importView(currentUser.layout);
      setViews(<View />);
    }

    loadViews();
  }, [currentUser]);

  
  return (
    <React.Suspense fallback='Loading views...'>
    <div className='container'>{views}</div>
  </React.Suspense>
  );
};

export default Dashboard;