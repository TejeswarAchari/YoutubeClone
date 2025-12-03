// import React from 'react'
// import Sidebar from './Sidebar'
// import Maincontainer from './Maincontainer'
// import { Outlet } from 'react-router-dom'
// import Head from './Head'


// const Body = () => {
 

//   return (
//     <div className='flex'> 
   
//       <Sidebar/>
//       <Outlet/>
//     </div>
//   )
// }

// export default Body
import React from "react";
import Sidebar from "./Sidebar";
import Head from "./Head";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top navigation */}
      <Head />

      {/* Main content area */}
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;

