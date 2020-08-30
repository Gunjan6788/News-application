import React from "react";
import PublicRoutes from "./Routes/PublicRoutes";
import Navbar from './Component/Navbar'
import style from './App.module.css'
import Footer from './Component/Footer'

function App() {
  return (
    <div className={`${style.backgroundColor}`}>
      <Navbar/>
      <PublicRoutes />
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;

