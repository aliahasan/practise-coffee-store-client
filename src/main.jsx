import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import Login from './Components/Login.jsx';
import SignUp from './Components/SignUp.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import Users from './Components/Users.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://practise-coffee-store-server.vercel.app/coffees')
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path:'/updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`https://practise-coffee-store-server.vercel.app/coffees/${params.id}`)
    
  },
  {
    path:"/register",
    element:<SignUp></SignUp>
  },
  {
    path: '/login',
    element:<Login></Login>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('https://practise-coffee-store-server.vercel.app/users')
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
