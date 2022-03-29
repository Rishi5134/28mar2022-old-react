import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    AOS.init({
        duration: 500});
  return (
      <>
      <div className='service_color d-flex res_col res_height '>
            <div className=' service_item mb-5' data-aos="fade-down" data-aos-delay="0">
                <p className="">
                    <i className="far fa-gem fa-2x"></i>
                </p>
                <h3>SPECIAL OFFERS</h3>
                <p>Shop Big Save Big</p>
            </div>
            <div className=' service_item mb-5' data-aos="fade-down" data-aos-delay="50">
                <p>
                    <i className="fas fa-paper-plane fa-2x"></i>
                </p>
                <h3>FREE DELIVERY</h3>
                <p>On Orders Above $99</p>
            </div>
            <div className='service_item mb-5' data-aos="fade-down" data-aos-delay="100">
                <p>
                    <span className="iconify fa-2x" data-icon="icomoon-free:loop"></span>
                </p>
                <h3>30 DAYS RETURN </h3>
                <p>Policy We Offers</p>
            </div>
            <div className='service_item mb-5' data-aos="fade-down" data-aos-delay="150">
                
                <p>
                    <i className="fas fa-shipping-fast fa-2x"></i>
                </p>
                <h3>FASTEST SHIPPING</h3>
                <p>2 Days Express</p>
            </div>
        </div>
      </>
  )
}

export default Services