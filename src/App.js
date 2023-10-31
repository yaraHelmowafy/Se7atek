import React, { useState } from "react";


import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from './Components/Footer';
import ReserveDoctor from './Components/ReserveDoctor';
import Dentists from './Components/Dentists';
import RequestAdvice from "./Components/RequestAdvice";

export default function App() {
  

  return (
    <div className="app">
 
      <Header />
      <ReserveDoctor />
      <Dentists />
      <RequestAdvice/>
      <Footer />
</div>


  );
}