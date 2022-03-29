import React from 'react';
import Sidenav from './Sidenav';
import jpc from '../Images/JPC.jpg'
import jpc2 from '../Images/3G_small.jpg'
import QuickLinks from './QuickLinks';
import Help from './Help';
import ContactInfo from './ContactInfo';
import Socials from './Socials';


const AboutUs = () => {
  return (
    <>
      <div className="d-flex">
        <div className="col-lg-3 mt-4 sidenav sideNavStyle2">

          <nav className="collapse show navbar navbar-vertical " id="navbar-vertical">
            <div className="navbar-nav text-center mx-auto ">

              <h4 className="m-0">CATEGORIES</h4>
              <hr className="mx-3 bg-danger" />
              <div className="overflow-auto sideNavStyle">
                <Sidenav />
              </div>
            </div>
          </nav> 
        </div>
        
        <div class="w-100 mt-0 contactUs-head-main">
                <div class="d-flex flex-column mx-3 ">
                    <div class='d-flex text-white text-warning justify-content-center align-items-center'>
                        <h2 class="service-text-color mt-3">ABOUT US</h2>
                    </div>

                    <hr />
                    <br/>
                    <div class="d-flex flex-rw about-main2 row ">

                        <div class="d-flex about-data justify-content-between col-sm-8">

                            Percare Energy and Health Activators are based on new-age concept of Pyra energy and health.
                            It
                            has more than 250 original products range and thousands of promoters and uses world-wide!

                            <br></br>

                            It explore these new, scientific methods of energy balance to achieve optimum health,
                            prosperity
                            and success. These concepts include time-tested techniques like Mystic Pyramid, Fengshui,
                            Vastu,
                            Metal Power, Chinese Acupressure and Universal Magnetic Force etc. Precise combination of
                            these
                            techniques induce energy, revitalize your body and gives peak performance.

                        </div>
                        <div class="col-sm-4 d-flex justify-content-center ">
                            <img src={jpc} class="about-img" alt=""/>
                        </div>

                    </div>
                    <div class="d-flex  about-main row">
                        <div class="col-sm-4 d-flex justify-content-center align-items-center">
                            <img src={jpc2} class="about-img2 " alt=""/>
                        </div>

                        <div class="d-flex about-data col-sm-8">
                            <br/>
                            Innovation & Quality are the keys stay ahead in this world of competition and Percare know's
                            each of them in depth. We believes in constant innovation and develops New 'First Time Ever'
                            products and concepts that spread like fire! From the beginning, our focus has been on
                            Innovation & Quality that leads to better results and customer satisfaction. Today, with
                            it's
                            modern manufacturing plants and all technical know-how, equipped to produce World-Class
                            products.
                        </div>


                    </div>
                </div>
            </div>
      </div>
      <hr />

<div className='container d-flex justify-content-around res_col footer_blocks '>
  <QuickLinks />
  <Help />
  <Socials/>
  <ContactInfo />
</div>
    </>
  )
}

export default AboutUs