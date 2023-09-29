import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout.jsx";
import App from "./pages/App.jsx";
import Bio from "./pages/Bio.jsx";
import CrackedCoffinsSeries from "./pages/CrackedCoffinsSeries.jsx";
import Contact from "./pages/Contact.jsx";
import Links from "./pages/Links.jsx";
import "./styles/global.scss";
import "./styles/nav.scss";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
