import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Sample from './pages/Sample.jsx';

//adding to implement react-router-dom
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

//creating router that all pages will be provided through and setting up the first one as the home page
// using path: "/" sets the home page, element sets what to show on the home page
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  // demonstrating how to add additional pages after the home page 
  {
    path: "/sample",
    element: <Sample/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* setting the router provider to display what the router shows */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
