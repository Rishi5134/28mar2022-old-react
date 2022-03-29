import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


const PyramidTypes = () => {
    AOS.init({
        duration: 500});
  return (
      <>
      <div className='d-flex res_col res_PL'>
            <div className='fashion_main d-flex align-items-center justify-content-center res_PL'  data-aos="fade-up"
                data-aos-delay="0"
                >
                <div className="sq_1">
                    <div className="hovereffect sq_2">
                       
                        <div className="overlay sq_3 sq_3_data">
                     
                          <h5>VASTU</h5>
                            <p className="">PYRAMID</p>
                            <a className="info" href="/#"> <button className=" btn_Pyramid">Enquire Now</button> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fashion_main d-flex align-items-center justify-content-center res_PL'  data-aos="fade-in"
                data-aos-delay="0" >
                <div className="sq_1">
                    <div className="hovereffect sq_2">
                       
                        <div className="overlay sq_3 sq_3_data">
                     
                           <h5>REIKI</h5>

                            <p className="">PYRAMID</p>
                            <a className="info" href="/#"> <button className=" btn_Pyramid">Enquire Now</button> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fashion_main d-flex align-items-center justify-content-center res_PL'  data-aos="fade-down"
                data-aos-delay="0">
                <div className="sq_1">
                    <div className="hovereffect sq_2">
                       
                       <div className="overlay sq_3 sq_3_data">
                         
                          <h5>PERSONAL</h5>
                            <p className="">PYRAMID</p>
                            <a className="info" href="/#"> <button className=" btn_Pyramid">Enquire Now</button> </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </>
  )
}

export default PyramidTypes