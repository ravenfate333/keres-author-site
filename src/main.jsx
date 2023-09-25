import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout.jsx";
import App from "./pages/App.jsx";
import Sample from "./pages/Sample.jsx";
import Bio from "./pages/Bio.jsx";
import CrackedCoffinsSeries from "./pages/CrackedCoffinsSeries.jsx";
import Contact from "./pages/Contact.jsx";
import Links from "./pages/Links.jsx";

//adding to implement react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//creating router that all pages will be provided through and setting up the first one as the home page
// using path: "/" sets the home page, element sets what to show on the home page
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      // demonstrating how to add additional pages after the home page
      {
        path: "/sample",
        element: <Sample />,
      },

      {
        path: "/CrackedCoffins",
        element: <CrackedCoffinsSeries />,
      },

      {
        path: "/Bio",
        element: <Bio />,
      },

      {
        path: "/Contact",
        element: <Contact />,
      },

      {
        path: "/Links",
        element: <Links />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* setting the router provider to display what the router shows */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
