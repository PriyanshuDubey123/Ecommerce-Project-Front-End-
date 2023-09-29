import React from 'react';
import './App.css';
import ProductList from './features/product-list/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>
  },
  {
    path: "/checkout",
    element: <Checkout/>
  },
]);

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
