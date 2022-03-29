import React from 'react';
import bestPublication from '../Images/publication.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const BestPublication = () => {
    AOS.init({
        duration: 500});
  return (
  <>
   <div className="container col-xxl-8 px-4 py-5 mx-auto">
            <div className="row flex-lg-row-reverse align-items-center g-5 px-5">
                <div className=" col-lg-6">
                    <img src={bestPublication} 
                        className="d-block mx-auto img-fluid1" alt="Bootstrap Themes" data-aos="flip-left" data-aos-delay="100" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3" data-aos="fade-up" data-aos-delay="100">BEST PUBLICATION
                    </h1>
                    <p className="lead" data-aos="fade-down" data-aos-delay="100">The best production from us : All Jiten -
                        Pyramids are original concepts of Prof.
                        Dr. Jiten Bhatt, research and proven effective world-wide! Above show is not the full range or
                        complete product, detailed photo and description inside.</p>

                </div>
            </div>
        </div>
  </>
  )
}

export default BestPublication