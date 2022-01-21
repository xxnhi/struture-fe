import React, { useEffect } from 'react';
import BookCard from '../components/BookCard';
import "./Home.css";

const Home = () => {
   return (
      <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom"> 
          <a className="navbar-brand ml-2 font-weight-bold" href="#"></a> 
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor" aria-controls="navbarColor" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
          <div className="collapse navbar-collapse" id="navbarColor">
          <img src="logo1.png" width="72" height="72" alt="" />
              <ul className="navbar-nav">
                  <li className="nav-item rounded bg-light search-nav-item"><input type="text" id="search" className="bg-light" placeholder="Search by title"/><span className="fa fa-search text-muted"></span></li>
                  <li className="nav-item"><a className="nav-link" href="#"><span className="fa fa-user-o"></span><span className="text">Login</span></a> </li>
                  <li className="nav-item "><a className="nav-link" href="#"><span className="fa fa-shopping-cart"></span><span className="text">Cart</span></a> </li>
              </ul>
          </div>
       </nav>
       <div className='banner d-flex justify-content-center align-items-center flex-column'>
              <h2  >
                 Welcome to WDS STORE
              </h2>
              <h1  className="">Find the best products in our bookstore below:</h1>
       </div>
      
      <div className="filter"> <button className="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="true" aria-controls="mobile-filter">Filters<span className="fa fa-filter pl-1"></span></button>
      </div>
      <div id="mobile-filter">
          <p className="pl-sm-0 pl-2"> Home | <b>All Books</b></p>
          <div className="border-bottom pb-2 ml-2">
              <h4 id="burgundy">Filters</h4>
          </div>
          <div className="py-2 border-bottom ml-3">
              <h6 className="font-weight-bold">Categories</h6>
              <div id="orange"><span className="fa fa-minus"></span></div>
              <form>
                  <div className="form-group"> <input type="checkbox" id="artisan"/> <label for="artisan">Fiction</label> </div>
                  <div className="form-group"> <input type="checkbox" id="breakfast"/> <label for="breakfast">Nonfiction</label> </div>
                  <div className="form-group"> <input type="checkbox" id="healthy"/> <label for="healthy">eBooks & NOOK</label> </div>
                  <div className="form-group"> <input type="checkbox" id="healthy"/> <label for="healthy">Teens & YA</label> </div>
                  <div className="form-group"> <input type="checkbox" id="healthy"/> <label for="healthy">Kids</label> </div>
              </form>
          </div>
         
          <div className="py-2 ml-3">
              <h6 className="font-weight-bold">Top Offers</h6>
              <div id="orange"><span className="fa fa-minus"></span></div>
              <form>
                  <div className="form-group"> <input type="checkbox" id="25off"/> <label for="25">25% off</label> </div>
                  <div className="form-group"> <input type="checkbox" id="5off"/> <label for="5off" id="off">5% off on Kids</label> </div>
                  
              </form>
          </div>
      </div>
      <section id="sidebar">
          <p> Home | <b>All Books</b></p>
          <div className="border-bottom pb-2 ml-2">
              <h4 id="burgundy">Filters</h4>
          </div>
          <div className="py-2 border-bottom ml-3">
              <h6 className="font-weight-bold">Categories</h6>
              <div id="orange"><span className="fa fa-minus"></span></div>
              <form>
                  <div className="form-group"> <input type="checkbox" id="artisan"/> <label for="artisan">Fiction</label> </div>
                  <div className="form-group"> <input type="checkbox" id="breakfast"/> <label for="breakfast">Nonfiction</label> </div>
                  <div className="form-group"> <input type="checkbox" id="healthy"/> <label for="healthy">eBooks & NOOK</label> </div>
                  <div className="form-group"> <input type="checkbox" id="healthy"/> <label for="healthy">Teens & YA</label> </div>
                  <div className="form-group"> <input type="checkbox" id="healthy"/> <label for="healthy">Kids</label> </div>
      
      
              </form>
          </div>
          
          <div className="py-2 ml-3">
              <h6 className="font-weight-bold">Top Offers</h6>
              <div id="orange"><span className="fa fa-minus"></span></div>
              <form>
                  <div className="form-group"> <input type="checkbox" id="25off"/> <label for="25">25% off</label> </div>
                  <div className="form-group"> <input type="checkbox" id="5off"/> <label for="5off" id="off">5% off on Kids</label> </div>
              </form>
          </div>
      </section>

        </div>
  );
};

export default Home;
