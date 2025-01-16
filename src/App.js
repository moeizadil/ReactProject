import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import { userContext } from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/Redux/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";
const Grocery = lazy( ()=> import("./components/Grocery"))


//START



const AppLayout = ()=> {
  return (
  <Provider store ={appStore}>
  <div className="app">
    <userContext.Provider value = {{loggedInUser: "Username: Moeiz"}}>
    <Header></Header>
    </userContext.Provider>
    <Outlet></Outlet>
  </div>
  </Provider>
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
        path : "/cart" ,
        element: <Cart></Cart>
      },
      {
        path : "/grocery" ,
        element: <Suspense fallback= {<Shimmer></Shimmer>}> <Grocery></Grocery> </Suspense>
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
