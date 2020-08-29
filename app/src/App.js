import React from "react";
import PublicRoutes from "./Routes/PublicRoutes";
import Navbar from './Component/Navbar'
import './App.css'

function App() {
  return (
    <div className="background-color">
      <Navbar/>
      <PublicRoutes />
    </div>
  );
}

export default App;

