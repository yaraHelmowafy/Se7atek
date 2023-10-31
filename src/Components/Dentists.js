import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; 
import Imag11 from './66.jpeg';
import Imag12 from './77.png';
import Imag13 from './44.jpeg';

export default function Dentists() {
  return (
    <div className="Dentist" id="Den">
      <section class="bg-light" >
<div class="container py-5">
    <div class="row text-center py-3">
        <div class="col-lg-6 m-auto">
            <h1  class="h1" className='m'>Dentists</h1>
            <p>
            We have a team of skilled doctors,
            you can choose the most suitable Doctor for you!!
            </p>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-4 mb-4">
            <div class="card h-100">
                <a href="#">
                    <img className='n' src={Imag11} class="card-img-top" alt="..." />
                </a>
                <div class="card-body">
                    <ul class="list-unstyled d-flex justify-content-between">
                        <li>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-muted fa fa-star"></i>
                            <i class="text-muted fa fa-star"></i>
                        </li>
                        <li class="text-muted text-right">240.00</li>
                    </ul>
                    <a href="#" class="h2 text-decoration-none text-dark">Dr: Aliaa Ammer</a>
                    <p class="card-text">
                        Alex,Gelim 22 street
                    </p>
                    <p class="text-muted">Reviews (24)</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
            <div class="card h-100">
                <a href="#">
                    <img className='n'  src={Imag12} class="card-img-top" alt="..." />
                </a>
                <div class="card-body">
                    <ul class="list-unstyled d-flex justify-content-between">
                        <li>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-muted fa fa-star"></i>
                            <i class="text-muted fa fa-star"></i>
                        </li>
                        <li class="text-muted text-right">480.00</li>
                    </ul>
                    <a href="#" class="h2 text-decoration-none text-dark">Dr: Eyad Ahmed</a>
                    <p class="card-text">
                      Hanvoil
                    </p>
                    <p class="text-muted">Reviews (48)</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
            <div class="card h-100">
                <a href="#">
                    <img className='n' src={Imag13} class="card-img-top" alt="..." />
                </a>
                <div class="card-body">
                    <ul class="list-unstyled d-flex justify-content-between">
                        <li>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                        </li>
                        <li class="text-muted text-right">360.00</li>
                    </ul>
                    <a href="#" class="h2 text-decoration-none text-dark">Dr: Youmna Saleh</a>
                    <p class="card-text">
                      Gizza , 30 street
                    </p>
                    <p class="text-muted">Reviews (74)</p>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
    </div>
  )
}
