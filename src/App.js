import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


//START

const AppLayout = ()=> {
  return (
  <div className="app">
    <Header></Header>
    <Outlet></Outlet>
  </div>
  )
} 
const appRouter = createBrowserRouter([
  {
    // path : "/" ,
    element: <AppLayout></AppLayout>,
    children :[
      {
        path : "/" ,
        element: <Body></Body>,
      },

      {
        path : "/about" ,
        element: <About></About>,
      },
      {
        path : "/contact" ,
        element: <Contact></Contact>
      },
      {
        path : "/restaurants/:resId" ,
        element: <RestaurantMenu></RestaurantMenu>
      }

    
    ],
    errorElement: <Error></Error>
  },


])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading) // Rendering React Element
root.render(<RouterProvider router={appRouter}></RouterProvider>); //Rendering React Component
