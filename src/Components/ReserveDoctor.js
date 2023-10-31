import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Imag5 from './Dentists.jpeg';
import Imag6 from './Bones.jpeg';
import Imag7 from './Heart.jpeg';
import Imag8 from './Skin.jpeg';
import Imag9 from './6.jpeg';
import Imag10 from './8.jpeg';
import Dentists from "./Dentists";
import Footer from "./Footer"

const ReserveDoctor = () => {
  const [showDentists, setShowDentists] = useState(false);
  const [showChild, setShowChild] = useState(false);
  const [showSkin, setShowSkin] = useState(false);
  const [showBones, setShowBones] = useState(false);
  const [showGenecologist, setShowGenecologist] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  return (
    <div>
      <section class="container py-5">
        <div class="row text-center pt-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1" className='m' >Doctors specialties </h1>
            <p className='so'>
              Choose the specialty 
              You Want !
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href=".\Dentists"><img class="img-fluid" className='im' src={Imag9} /></a>
            <h2 class="h5 text-center mt-3 mb-3">Child</h2>
            <div>
              <p class="text-center">
               <a href="#"> <button className="bmd">Reserve</button></a>
              </p>
              
            </div>
          </div>
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href="#"><img class="img-fluid" className='im' src={Imag5} /></a>
            <h2 class="h5 text-center mt-3 mb-3">Dentists</h2>
            <div>
            <p class="text-center">
            <a href="#"> <button className="bmd">Reserve</button></a>
             </p>
            </div>
          </div>
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href="#"><img class="img-fluid" className='im' src={Imag8} /></a>
            <h2 class="h5 text-center mt-3 mb-3">Skin&Cosmatics</h2>
            <div>
              <p class="text-center">
              <a href="#"> <button className="bmd">Reserve</button></a>
              </p>
             
            </div>
          </div>
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href="#"><img class="img-fluid" className='im' src={Imag6} /></a>
            <h5 class="text-center mt-3 mb-3">Bones</h5>
            <div>
            <p class="text-center">
            <a href="#"> <button className="bmd">Reserve</button></a>
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href="#"><img class="img-fluid" className='im' src={Imag10} /></a>
            <h2 class="h5 text-center mt-3 mb-3">Genecologist</h2>
            <div>
            <p class="text-center">
            <a href="#"> <button className="bmd">Reserve</button></a>
              
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href="#"><img class="img-fluid" className='im' src={Imag7} /></a>
            <h2 class="h5 text-center mt-3 mb-3">Heart</h2>
            <p class="text-center">
            <a href="#"> <button className="bmd">Reserve</button></a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReserveDoctor;