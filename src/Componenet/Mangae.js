import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

const Manage = () => {
const [isDilog, setDilog] = useState(false)
  // const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);


  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const response = await fetch('/api/projects'); 
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setProjects(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  // if (loading) {
  //   return <div className="text-center">Loading...</div>;
  // }

  // if (error) {
  //   return <div className="text-center text-red-500">{error}</div>;
  // }



  const handlonclickD =()=>{
    setDilog(true)
  }

  const handalonclose =()=>{
    setDilog( false)
  }

  const projects = [
    {
      name: "Project Co",
      assignedBy: "Admin",
      status: "Active",
      dueDate: "2024-11-01",
    },
    {
      name: "Project D",
      assignedBy: "Admin",
      status: "On Hold",
      dueDate: "2024-10-15",
    },
    {
      name: "Project D",
      assignedBy: "Admin",
      status: "On Hold",
      dueDate: "2024-10-15",
    },
    {
      name: "Project D",
      assignedBy: "Admin",
      status: "On Hold",
      dueDate: "2024-10-15",
    },
    {
      name: "Project D",
      assignedBy: "Admin",
      status: "On Hold",
      dueDate: "2024-10-15",
    },
  ];
  return (
    <>
      <div className="p-4 max-w-5xl mx-auto mt-3 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Manage Projects 
        </h2>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Project Name</th>
              <th className="py-2 px-4 border-b">Assigned By</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Due Date</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{project.name}</td>
                <td className="py-2 px-4 border-b">{project.assignedBy}</td>
                <td className="py-2 px-4 border-b">{project.status}</td>
                <td className="py-2 px-4 border-b">{project.dueDate}</td>
                <td className="py-2 px-4 border-b text-center">
                <button className="px-2 py-1  rounded-full  bg-blue-400 text-white  hover:bg-blue-600" onClick={handlonclickD}>
                View 
                </button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>

       
           <Dialog open={isDilog} onClose={handalonclose} sx={{ maxWidth:'100%'}}>

            <DialogTitle>
              <Typography variant="h5">
              Project Details
              </Typography>
            </DialogTitle>
            <DialogContent    >
              <Typography variant="h6" sx={{padding:'1px'}} >
              Name: web dev
              </Typography>

              <Typography variant="h6"   sx={{ padding:'1px'}}>
              Assigned By: anurag sir
              </Typography>

              <Typography variant="h6"  sx={{ padding:'1px'}}>
              Status: on Hold
              </Typography>

              <Typography variant="h6"  sx={{ padding:'1px'}}>
              dueDate: 12/12/2021
              </Typography>
            </DialogContent>

           </Dialog>


       
        
      </div>
    </>
  );
};
export default Manage;
