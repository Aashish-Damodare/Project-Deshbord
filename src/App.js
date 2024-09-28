import Dashbord from "./Componenet/Dashbord";
import Manage from "./Componenet/Mangae";
import Sidebar from "./Componenet/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TastMangment from "./Componenet/TaskMangment";
import StatusDadline from "./Componenet/Status";
import TeamComunication from "./Componenet/Team";
import Reportcomp from "./Componenet/Report";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [{ path: "/", element: <Dashbord /> },
      {path:"/Manageproject", element:<Manage/> },
      {path:"/Taskmanagement", element:<TastMangment/>},
      {path:"/StatusAndDadline",element:<StatusDadline/>},
      {path:"/TeamComuniction", element:<TeamComunication/>},
      {path:'/Report',element:<Reportcomp/>}

    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
