import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from "./components/Header"
import Body from "./components/Body"


//START

const AppLayout = ()=> {
  return (
  <div className="app">
    <Header></Header>
    <Body/>
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading) // Rendering React Element
root.render(<AppLayout />); //Rendering React Component
