import React from "react";

const Dashbord = ()=>{
return <>
      <div className="p-5 max-w-2xl mt-5 mx-auto">
      <h2 className="p-5 text-2xl font-bold mb-4 text-center">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-7 bg-white rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-bold">Total Projects</h3>
          <p className="text-2xl">60</p>
        </div>
        <div className="p-7 bg-white rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-bold">Active Projects</h3>
          <p className="text-2xl">10</p>
        </div>
        <div className="p-7  bg-white rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-bold">Completed Projects</h3>
          <p className="text-2xl">50</p>
        </div>
      </div>
    </div>

</>
}
export default Dashbord;