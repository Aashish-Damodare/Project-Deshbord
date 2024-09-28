
import React from "react"
import { Link, Outlet } from "react-router-dom"
const Sidebar = () =>{
return <>

<div className="flex">
  
  <div className="w-64 h-screen bg-gray-800 text-white">
    <div className="p-5">
      <h1 className="text-lg font-bold">PROJECT MANAGEMENT</h1>
    </div>
    <ul className="mt-6">
      <li className="hover:bg-gray-700 p-4">
        <Link to="/">Dashboard Overview</Link>
      </li>
      <li className="hover:bg-gray-700 p-4">
        <Link to="/Manageproject">Manage Projects</Link>
      </li>
      <li className="hover:bg-gray-700 p-4">
        <Link to="/Taskmanagement">Task Management </Link>
      </li>
      <li className="hover:bg-gray-700 p-4">
        <Link to="/StatusAndDadline"> Status & Deadlines</Link>
      </li>
      <li className="hover:bg-gray-700 p-4">
      <Link  to="/TeamComuniction">Team Communication</Link>
      </li>
      <li className="hover:bg-gray-700 p-4">
      <Link  to="/Report"> Progress Report</Link>
      </li>
      
      <li className="hover:bg-gray-700 p-4 mt-32">
        <a href="#">Logout</a>
      </li>
    </ul>
  </div>

 <Outlet/>
  {/* <div class="flex-1 p-6">
    <h2 class="text-2xl font-semibold">Welcome to the Admin Dashboard</h2>
    
  </div> */}
</div>


</>
}
export default Sidebar