import React from 'react';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    function w3_close() {

        document.getElementById('contact2').style.display = 'flex';
        // document.getElementById("main").disabled = false;

        document.getElementById("stick_navbar").style.marginLeft = "0rem";
        // document.getElementById("main").style.marginLeft = "30%";
        // document.getElementById("mySidebar").style.width = "30%";
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("openNav").style.display = "block";
        document.getElementById("prenav").style.marginLeft = '0%';
    }
  return (
      <>
      <div className="w3-sidebar w3-bar-block text-dark animate-left res_sidebar_menu sideStyle" id="mySidebar">
        <button className="w3-bar-item w3-button w3-large bg-dark" onClick={() => {w3_close()}}>
            <i className="far fa-x fa-times-circle text-white"></i>
        </button>
        <div className=" res_col w-100 d-flex justify-content-between align-items-center " id="">
            <ul className="nav_list navbar-nav mx-5 d-flex justify-content-between align-items-center">
                <li className="nav-item d-flex my-2 w-100 ">
                    <NavLink className="anchor3 w-100 text-center  " to="/">HOME</NavLink>
                </li>
                <li className="nav-item d-flex my-2 w-100">
                    <NavLink className="anchor3 w-100 text-center " to="/products">PRODUCTS</NavLink>
                </li>
                <li className="nav-item d-flex my-2 w-100">
                    <NavLink className="anchor3 w-100 text-center " to="/publication">PUBLICATION</NavLink>
                </li>
                <li className="nav-item d-flex my-2 w-100">
                    <NavLink className="anchor3 w-100 text-center " to="/advantages">ADVANTAGES</NavLink>
                </li>
                <li className="nav-item d-flex my-2 w-100">
                    <NavLink className="anchor3 w-100 text-center " to="/aboutUs">ABOUT US</NavLink>
                </li>
                <li className="nav-item d-flex my-2 w-100">
                    <NavLink className="anchor3 w-100 text-center " to="/testimonials">TESTIMONIALS</NavLink>
                </li>
                <li className="nav-item d-flex my-2 w-100">
                    <NavLink className="anchor3 w-100 text-center " to="/faq">FAQ</NavLink>
                </li>
                <li className="nav-item d-flex my-2 w-100">
                    <NavLink className="anchor3 w-100 text-center " to="/researchAtEgypt">RESEARCH AT EGYPT</NavLink>
                </li>
                <li className="nav-item d-flex my-2 w-100">
                    <NavLink className="anchor3 w-100 text-center " to="/TrainingAndSeminar">TRAINING & SEMINAR</NavLink>
                </li>
                <li className="nav-item d-flex my-2 w-100">
                    <NavLink className="anchor3 w-100 text-center " to="/contactUs">CONTACT US</NavLink>
                </li>

            </ul>
        </div>
    </div>
      </>
  )
}

export default Sidebar