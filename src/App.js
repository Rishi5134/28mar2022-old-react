import React from 'react';
import CategoriesDropdown from './Components/CategoriesDropdown';

import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
import CopyRight from './Components/CopyRight';
import NavHeader from './Components/NavHeader';
import Prenav from './Components/Prenav';
import Sidebar from './Components/Sidebar';

import WhatsappAndCall from './Components/WhatsappAndCall';
import './style.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import Advantages from './Components/Advantages';
import Products from './Components/Products'
import Publication from './Components/Publication'
import ResearchAtEgypt from './Components/ResearchAtEgypt'
import TrainingAndSeminar from './Components/TrainingAndSeminar'
import { Switch } from 'react-router-dom';
import TestimonialPage from './Components/TestimonialPage';
import Faq from './Components/Faq';
import StartUpPyramidProduct from './Components/StartUpPyramidProduct';
import SingleProductDetails from './Components/SingleProductDetails';
// import ContactUs from './Components/ContactUs'

function App() {
  return (
    <>
      <Sidebar />
      <div id="main">
        <WhatsappAndCall />
        <div id="navbar">
          <Prenav />
          <div className='nav res_nav_main mt-0'>
            <nav className="navbar fixed_header navbar-expand-lg navbar-light d-flex flex-column w-100 res_row">
              <CategoriesDropdown />
              <NavHeader />
            </nav>
          </div>
        </div>
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route exact path='/aboutUs'><AboutUs /></Route>
          <Route exact path='/advantages'><Advantages /></Route>
          <Route exact path='/products'><Products /></Route>
          <Route exact path='/publication'><Publication /> </Route>
          <Route exact path='/researchAtEgypt'><ResearchAtEgypt /></Route>
          <Route exact path='/TrainingAndSeminar'><TrainingAndSeminar /> </Route>
          <Route exact path='/testimonials'><TestimonialPage/> </Route>
          <Route exact path='/faq'><Faq/> </Route>
          <Route exact path='/contactUs'><ContactUs /> </Route>
          <Route exact path='/StartUpPyramidProduct'><StartUpPyramidProduct/> </Route>
          <Route exact path='/productDetails'><SingleProductDetails/> </Route>
        </Switch>


        
      <CopyRight />
      </div>
    </>
  );
}

export default App;
