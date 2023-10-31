import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; 
const Footer = () =>{
    return(
        <div>
             <footer class="bg-dark" id="tempaltemo_footer">
          <div class="container">
              <div class="row">

                  <div class="col-md-4 pt-5">
                      <h2 class="h2 text-success border-bottom pb-3 border-light logo"className='s'>Seحatak</h2>
                      <ul class="list-unstyled text-light footer-link-list">
                          <li>
                              <i class="fas fa-map-marker-alt fa-fw"></i>
                              Egypt
                          </li>
                          <li>
                              <i class="fa fa-phone fa-fw"></i>
                              <a class="text-decoration-none" href="#">000-000-0000</a>
                          </li>
                          <li>
                              <i class="fa fa-envelope fa-fw"></i>
                              <a class="text-decoration-none" href="#">info@company.com</a>
                          </li>
                      </ul>
                  </div>

                  <div class="col-md-4 pt-5">
                      <h2 class="h2 text-light border-bottom pb-3 border-light">Doctors</h2>
                      <ul class="list-unstyled text-light footer-link-list">
                          <li><a class="text-decoration-none" href="#">Child</a></li>
                          <li><a class="text-decoration-none" href="#">Genecologist</a></li>
                          <li><a class="text-decoration-none" href="#">Bones</a></li>
                          <li><a class="text-decoration-none" href="#">Skin</a></li>
                          <li><a class="text-decoration-none" href="#">Heart</a></li>
                          <li><a class="text-decoration-none" href="#">Mental</a></li>
                          <li><a class="text-decoration-none" href="#">Dentists</a></li>
                      </ul>
                  </div>

                  <div class="col-md-4 pt-5">
                      <h2 class="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                      <ul class="list-unstyled text-light footer-link-list">
                          <li><a class="text-decoration-none" href="#">Home</a></li>
                          <li><a class="text-decoration-none" href="#">About Us</a></li>
                          <li><a class="text-decoration-none" href="#">Doctors</a></li>
                          <li><a class="text-decoration-none" href="#">FAQs</a></li>
                          <li><a class="text-decoration-none" href="#">Contact</a></li>
                      </ul>
                  </div>

              </div>

              <div class="row text-light mb-4">
                  <div class="col-12 mb-3">
                      <div class="w-100 my-3 border-top border-light"></div>
                  </div>
                  <div class="col-auto me-auto">
                      <ul class="list-inline text-left footer-icons">
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                          </li>
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                          </li>
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                          </li>
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                          </li>
                      </ul>
                  </div>
                  <div class="col-auto">
                      <label class="sr-only" for="subscribeEmail">Email address</label>
                      <div class="input-group mb-2">
                          <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                          <div class="input-group-text btn-success text-light">Subscribe</div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="w-100 bg-black py-3">
              <div class="container">
                  <div class="row pt-2">
                      <div class="col-12">
                          <p class="text-left text-light">
                              Copyright &copy; 2021 Company Name 
                              | Designed by <a rel="sponsored" href="#" target="_blank">Medical</a>
                          </p>
                      </div>
                  </div>
              </div>
          </div>

        </footer>
        </div>
        )
    }
    export default Footer ;