import React from 'react'

import Sidenav from './Sidenav';
import QuickLinks from './QuickLinks';
import Help from './Help';
import ContactInfo from './ContactInfo';
import Socials from './Socials';
import egypt1 from '../Images/egypt-1.jpg'
import egypt2 from '../Images/egypt-2.jpg'
import egypt3 from '../Images/egypt-3.jpg'
import egypt4 from '../Images/egypt-4.jpg'
import egypt5 from '../Images/egypt-5.jpg'
import egypt6 from '../Images/egypt-6.jpg'
import egypt7 from '../Images/egypt-7.jpg'
import egypt8 from '../Images/egypt-8.jpg'
import egypt9 from '../Images/egypt-9.jpg'

const ResearchAtEgypt = () => {
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
                    <h2 class="service-text-color">RESEARCH AT EGYPT</h2>
                </div>
                
                <div>
                    <div class="d-flex  about-main2 rae-data row mx-2 mb-3">
                        <div  >
                            <hr class="mx-2" />
                        </div>
                        <div class="col-sm-2 d-flex justify-content-center">
                            <img src={egypt1} class="img_rae" alt=""/>
                        </div>
                        <div class="col-sm-10">
                            <p class="text-justify mx-2" >
                                Pyramid Yantra developed by Prof. Dr. Jiten Bhatt in front of the world's
                                biggest pyramid at Giza, which was taken there for experiments.
                            </p>
                        </div>
                        
                    </div>
                    <div class="d-flex justify-content-start about-main2 rae-data row mx-2 mb-2">
                        <div>
                            <hr class="mx-2" />
                        </div> 
                        <div class="col-sm-2 d-flex justify-content-center">
                            <img src={egypt2} class="img_rae" alt=""/>
                        </div>
                        <div class="col-sm-10">
                            <p class="text-justify mx-2">
                                Prof. Dr. Jiten Bhatt at Giza complex in the east side of the pyramid measuring the energy.
                            </p>
                        </div>
                        
                    </div>
                    <div class="d-flex  about-main2 rae-data row mx-2 mb-2">
                      <div>
                            <hr class="mx-2" />
                        </div> 
                        <div class="col-sm-2 d-flex justify-content-center">
                            <img src={egypt3} class="img_rae" alt=""/>
                        </div>
                        <div class="col-sm-10">
                            <p class="text-justify mx-2">
                                Prof. Dr. Jiten Bhatt and Dr. Dhara Bhatt taking notes and researching in front of the
                                world's first pyramid, Zoser Saqqara.
                            </p>
                        </div>
                      
                    </div>
                    <div class="d-flex  about-main2 rae-data row mx-2 mb-2">
                      <div>
                            <hr class="mx-2" />
                        </div> 
                        <div class="col-sm-2 d-flex justify-content-center">
                            <img src={egypt4} class="img_rae" alt=""/>
                        </div>
                        <div class="col-sm-10">
                            <p class="text-justify mx-2">
                                As you enter the pyramids, these is the protection and purifying chamber.
                            </p>
                        </div>
                      
                    </div>
                    <div class="d-flex  about-main2 rae-data row mx-2 mb-2">
                      <div>
                            <hr class="mx-2" />
                        </div> 
                        <div class="col-sm-2 d-flex justify-content-center">
                            <img src={egypt5} class="img_rae" alt=""/>
                        </div>
                        <div class="col-sm-10">
                            <p class="text-justify mx-2">
                                Dr. Jiten at the center of The Great Pyramid, where they say that mummy was found. Mummy
                                is not important but the mystic power that stored each and every body cell for 5000
                                years is more important for us. Let's use that power for health and pain-relief!
                            </p>
                        </div>
                       
                    </div>
                    <div class="d-flex  about-main2 rae-data row mx-2 mb-2">
                      <div>
                            <hr class="mx-2" />
                        </div> 
                        <div class="col-sm-2 d-flex justify-content-center">
                            <img src={egypt6} class="img_rae" alt=""/>
                        </div>
                        <div class="col-sm-10">
                            <p class="text-justify mx-2">
                                Prof. Dr. Jiten Bhatt recoding accurate angle reading at the Great Pyramid in Egypt.
                            </p>
                        </div>
                      
                    </div>
                    <div class="d-flex  about-main2 rae-data row mx-2 mb-2">
                      <div>
                            <hr class="mx-2" />
                        </div> 
                        <div class="col-sm-2 d-flex justify-content-center">
                            <img src={egypt7} class="img_rae" alt=""/>
                        </div>
                        <div class="col-sm-10">
                            <p class="text-justify mx-2">
                                Prof. Dr. Jiten Bhatt at The Great Pyramid, Egypt, decoding the secret languages!
                            </p>
                        </div>
                      
                    </div>
                    <div class="d-flex  about-main2 rae-data row mx-2 mb-2">
                      <div>
                            <hr class="mx-2" />
                        </div> 
                        <div class="col-sm-2 d-flex justify-content-center">
                            <img src={egypt8} class="img_rae" alt=""/>
                        </div>
                        <div class="col-sm-10">
                            <p class="text-justify mx-2">
                                Dr. Jiten Bhatt measuring the energy levels at different places at Egypt
                            </p>
                        </div>
                     
                    </div>
                    <div class="d-flex  about-main2 rae-data row mx-2 mb-2">
                      <div>
                            <hr class="mx-2" />
                        </div> 
                        <div class="col-sm-2 d-flex justify-content-center">
                            <img src={egypt9} class="img_rae" alt=""/>
                        </div>
                        <div class="col-sm-10">
                            <p class="text-justify mx-2">
                                Prof. Dr. Jiten Bhatt and Dr. Dhara at Egypt near the 9 Pyramids at Giza.
                            </p>
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

export default ResearchAtEgypt