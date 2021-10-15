import React from "react";
// import  from './Header.css'
const Header = () => {
  return (
    <div className="Header">
      {/* Navbar start */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Happy Shopping
          </a>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Shop Now
                </a>
              </li>
              <li className="nav-item  ">
                <a className="nav-link active" href="#">
                  Category
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" href="#">
                  Today's Offer
                </a>
              </li>
              
             
            </ul>
            <form className="d-flex flex-fill mx-5">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* Navbar end */}
    </div>
  );
};

export default Header;
