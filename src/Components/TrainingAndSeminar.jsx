import React from 'react'

import Sidenav from './Sidenav';
import QuickLinks from './QuickLinks';
import Help from './Help';
import ContactInfo from './ContactInfo';
import Socials from './Socials';

const TrainingAndSeminar = () => {
  return (
    <>
    <div className="d-flex">
        <div className="col-lg-3 mt-4 sidenav sideNavStyle2">

          <nav className="collapse show navbar navbar-vertical " id="navbar-vertical">
            <div className="navbar-nav text-center mx-auto ">

              <h4 className="m-0">CATEGORIES</h4>
              <hr className="mx-3 bg-danger" />
              <div className="overflow-auto sideNavStyleRAE">
                <Sidenav />
              </div>
            </div>
          </nav>
        </div>

        <div class="vl"></div>

<div class="w-100 mt-0 d-flex flex-column mt-3">

    <div class='d-flex text-white text-warning justify-content-center align-items-center'>
        <h2 class="service-text-color">TRAINING & SEMINAR</h2>
    </div>

    <div class="mx-3">
        <div class="mx-3">
            <div>
                <div>
                    <hr class="mx-0"/>
                </div>
                <h3 class="mx-3">
                    Title
                </h3>
            </div>
            <div class="d-flex mx-3">
                <h5>Date & Timings:</h5>
                <p class="mx-2">14 Mar 2022, 6:30</p>
            </div>
            <div class="d-flex mx-3">
                <h5>Venue:</h5>
                <p class="mx-2">Location data</p>
            </div>
            
            <div class="d-flex mx-3">
                <h5>Language:</h5>
                <p class="mx-2">English</p>
            </div>
            <div class="d-flex mx-3">
                <h5>Fees:</h5>
                <p class="mx-2">Rs 500</p>
            </div>
        </div>
        <div class="mx-3">
            <div>
                <div>
                    <hr class="mx-0"/>
                </div>
                <h3 class="mx-3">
                    Title
                </h3>
            </div>
            <div class="d-flex mx-3">
                <h5>Date & Timings:</h5>
                <p class="mx-2">14 Mar 2022, 6:30</p>
            </div>
            <div class="d-flex mx-3">
                <h5>Venue:</h5>
                <p class="mx-2">Location data</p>
            </div>
            
            <div class="d-flex mx-3">
                <h5>Language:</h5>
                <p class="mx-2">English</p>
            </div>
            <div class="d-flex mx-3">
                <h5>Fees:</h5>
                <p class="mx-2">Rs 500</p>
            </div>
        </div>
        <div class="mx-3">
            <div>
                <div>
                    <hr class="mx-0"/>
                </div>
                <h3 class="mx-3">
                    Title
                </h3>
            </div>
            <div class="d-flex mx-3">
                <h5>Date & Timings:</h5>
                <p class="mx-2">14 Mar 2022, 6:30</p>
            </div>
            <div class="d-flex mx-3">
                <h5>Venue:</h5>
                <p class="mx-2">Location data</p>
            </div>
          
            <div class="d-flex mx-3">
                <h5>Language:</h5>
                <p class="mx-2">English</p>
            </div>
            <div class="d-flex mx-3">
                <h5>Fees:</h5>
                <p class="mx-2">Rs 500</p>
            </div>
        </div>
        <div class="mx-3">
            <div>
                <div>
                    <hr class="mx-0"/>
                </div>
                <h3 class="mx-3">
                    Title
                </h3>
            </div>
            <div class="d-flex mx-3">
                <h5>Date & Timings:</h5>
                <p class="mx-2">14 Mar 2022, 6:30</p>
            </div>
            <div class="d-flex mx-3">
                <h5>Venue:</h5>
                <p class="mx-2">Location data</p>
            </div>
            
            <div class="d-flex mx-3">
                <h5>Language:</h5>
                <p class="mx-2">English</p>
            </div>
            <div class="d-flex mx-3">
                <h5>Fees:</h5>
                <p class="mx-2">Rs 500</p>
            </div>
        </div>
      
      
      
     
    </div>
    </div>
        </div>

        <hr />

<div className='container d-flex justify-content-around res_col footer_blocks '>
  <QuickLinks />
  <Help />
  <Socials />
  <ContactInfo />
</div>
    </>
  )
}

export default TrainingAndSeminar