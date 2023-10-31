import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Imag1 from './DA.jpg';
import Imag2 from './PP.png';
import Imag3 from './2374.jpg';
import Imag4 from './Flu.png';
import Imag5 from './stomachache.jpg';
import Imag6 from './BB.png';
import Dentists from "./Dentists";
import Diabetes from "./Daibetes";
import Footer from "./Footer"
import Pressure from "./Pressure";

const RequestAdvice = () => {
  const [showDentists, setShowDentists] = useState(false);
  const [showChild, setShowChild] = useState(false);
  const [showSkin, setShowSkin] = useState(false);
  const [showBones, setShowBones] = useState(false);
  const [showGenecologist, setShowGenecologist] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  const handleCancelClick = (adviceType) => {
    switch(adviceType) {
      case 'diabetes':
        setShowDentists(false);
        break;
      case 'child':
        setShowChild(false);
        break;
      case 'skin':
        setShowSkin(false);
        break;
      case 'bones':
        setShowBones(false);
        break;
      case 'genecologist':
        setShowGenecologist(false);
        break;
      case 'heart':
        setShowHeart(false);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <section class="container py-5">
        <div class="row text-center pt-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1" className='m' > Immediate Advice </h1>
            <p className='so'>
              Choose the Disease You Want!
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 p-5 mt-3">
            <a href=".\Diabetes"><img class="img-fluid" className='im' src={Imag1} /></a>
            <h2 class="h5 text-center mt-3 mb-3">Diabetes</h2>
            <div>
              <button onClick={() => {
                if (!showChild) {
                  setShowChild(true);
                }
              }} className="bnd">Advice</button>
              {showChild && 
                <div>
                  <Diabetes />
                  <button onClick={() => handleCancelClick('child')} className="bnd">Cancel</button>
                </div>
              }
            </div>
          </div>
          <div class="col-12 col-md-6 p-5 mt-3">
            <a href="./Pressure"><img class="img-fluid" className='im' src={Imag2} /></a>
            <h2 class="h5 text-center mt-3 mb-3">Blood pressure </h2>
            <div>
              <button onClick={() => {
                if (!showDentists) {
                  setShowDentists(true);
                }
              }} className="bnd">Advice</button>
              {showDentists && 
                <div>
                  <Pressure />
                  <button onClick={() => handleCancelClick('diabetes')} className="bnd">Cancel</button>
                </div>
              }
            </div>
          </div>
          <div class="col-12 col-md-6 p-5 mt-3">
            <a href="#"><img class="img-fluid" className='im' src={Imag3} /></a>
            <h2 class="h5 text-center mt-3 mb-3"> Covid 19 </h2>
            <div>
              <button onClick={() => {
                if (!showSkin) {
                  setShowSkin(true);
                }
              }} className="bnd">Advice</button>
              {showSkin && 
                <div>
                  <Dentists />
                  <button onClick={() => handleCancelClick('skin')} className="bnd">Cancel</button>
                </div>
              }
            </div>
          </div>
          <div class="col-12 col-md-6 p-5 mt-3">
            <a href="#"><img class="img-fluid" className='im' src={Imag4} /></a>
            <h5 class="text-center mt-3 mb-3">Flu&Cd; </h5>
            <div>
              <button onClick={() => {
                if (!showBones) {
                  setShowBones(true);
                }
              }} className="bnd">Advice</button>
              {showBones && 
                <div>
                  <Dentists />
                  <button onClick={() => handleCancelClick('bones')} className="bnd">Cancel</button>
                </div>
              }
            </div>
          </div>
          <div class="col-12 col-md-6 p-5 mt-3">
            <a href="#"><img class="img-fluid" className='im' src={Imag5} /></a>
            <h2 class="h5 text-center mt-3 mb-3">stomachache</h2>
            <div>
              <button onClick={() => {
                if (!showGenecologist) {
                  setShowGenecologist(true);
                }
              }} className="bnd">Advice</button>
              {showGenecologist && 
                <div>
                  <Dentists />
                  <button onClick={() => handleCancelClick('genecologist')} className="bnd">Cancel</button>
                </div>
              }
            </div>
          </div>
          <div class="col-12 col-md-6 p-5 mt-3">
            <a href="#"><img class="img-fluid" className='im' src={Imag6} /></a>
            <h2 class="h5 text-center mt-3 mb-3">Skin-Burns</h2>
            <button onClick={() => {
              if (!showHeart) {
                setShowHeart(true);
              }
            }} className="bnd">Advice</button>
            {showHeart && 
              <div>
                <Dentists />
                <button onClick={() => handleCancelClick('heart')} className="bnd">Cancel</button>
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default RequestAdvice;