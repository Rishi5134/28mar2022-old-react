import React from 'react';
import BestPublication from './BestPublication';
import Carasoul from './Carasoul';
import ContactInfo from './ContactInfo';
import Discount from './Discount';
import Help from './Help';
import PyramidTypes from './PyramidTypes';
import QuickLinks from './QuickLinks';
import Services from './Services';
import Sidenav from './Sidenav';
import SocialIcons from './SocialIcons';
import StartupPyramid from './StartupPyramid';
import Test from './Test';

function Home() {
  return (
    <>
      <div className="d-flex">

        <div className="col-lg-3 mt-2 sidenav sideNavStyle2">

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
        <Carasoul />
      </div>
      <StartupPyramid />
      <Services />
      <BestPublication />
      <PyramidTypes />

      <Test />

      <Discount />
      <SocialIcons />
      <hr />

      <div className='container d-flex justify-content-around res_col footer_blocks '>
        <QuickLinks />
        <Help />
        <ContactInfo />
      </div>
    </>
  );
}

export default Home;
