import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StartupPyramid = () => {
    AOS.init({
        duration: 500 
    });
  return (
      <>
      

      <div className="mx-0 mt-0">
            <div className="res_startup">
                <div className='d-flex text-white startup_nav  '>
                    <h2 className='head_StartUp mx-auto'>START UP PYRAMIDS</h2>

                </div>

            </div>

            <div className='d-flex justify-content-around align-items-center mt-3 res_col2 row mx-auto startup p-0'>
                <div className="col-sm-6 ">

                    <div className="row d-flex justify-content-center align-items-center">

                        <div className="card my-4 mx-auto res_prod crd col-sm-4" data-aos="zoom-in" data-aos-delay="0">
                            <div
                                className="w-100 d-flex justify-content-center align-items-center card-img overflow-hidden">

                                <div className="card-title1"></div>
                           
                            </div>
                            <div className="card-body res_prod_data">
                                <h5 className="card-title">Fortune Chip (Fortune Chip)</h5>
                                <p className='card-text text-secondary '>
                                    To attract luck, fix on important
                                    files,books,
                                    lockers,
                                    computers etc.
                                </p>

                                <p className='card-text text-secondary'>Code: #7801</p>
                                <p className="card-text text-success">Price: Rs330</p>
                                <button className='btn inquiry_btn mx-0 my-2 ' data-toggle="tooltip" data-placement="right"
                                    title="Click for Inquiry">
                                    Inquiry
                                </button>

                            </div>
                        </div>
                        <div className="card my-4 mx-auto res_prod crd col-sm-4" data-aos="zoom-in" data-aos-delay="50">
                            <div
                                className="w-100 d-flex justify-content-center align-items-center card-img overflow-hidden">

                                <div className="card-title1"></div>
                           
                            </div>
                            <div className="card-body res_prod_data">
                                <h5 className="card-title">Fortune Chip (Fortune Chip)</h5>
                                <p className='card-text text-secondary '>
                                    To attract luck, fix on important
                                    files,books,
                                    lockers,
                                    computers etc.
                                </p>

                                <p className='card-text text-secondary'>Code: #7801</p>
                                <p className="card-text text-success">Price: Rs330</p>
                                <button className='btn inquiry_btn mx-0 my-2 ' data-toggle="tooltip" data-placement="right"
                                    title="Click for Inquiry">
                                    Inquiry
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-sm-6">

                    <div className="row">

                        <div className="card my-4 mx-auto res_prod crd col-sm-4" data-aos="zoom-in" data-aos-delay="100">
                            <div
                                className="w-100 d-flex justify-content-center align-items-center card-img overflow-hidden">

                                <div className="card-title1"></div>
                           
                            </div>
                            <div className="card-body res_prod_data">
                                <h5 className="card-title">Fortune Chip (Fortune Chip)</h5>
                                <p className='card-text text-secondary '>
                                    To attract luck, fix on important
                                    files,books,
                                    lockers,
                                    computers etc.
                                </p>

                                <p className='card-text text-secondary'>Code: #7801</p>
                                <p className="card-text text-success">Price: Rs330</p>
                                <button className='btn inquiry_btn mx-0 my-2 ' data-toggle="tooltip" data-placement="right"
                                    title="Click for Inquiry">
                                    Inquiry
                                </button>

                            </div>
                        </div>
                        <div className="card my-4 mx-auto res_prod crd col-sm-4" data-aos="zoom-in" data-aos-delay="150" >
                            <div
                                className="w-100 d-flex justify-content-center align-items-center card-img overflow-hidden">

                                <div className="card-title1"></div>
                          
                           </div>
                            <div className="card-body res_prod_data">
                                <h5 className="card-title">Fortune Chip (Fortune Chip)</h5>
                                <p className='card-text text-secondary '>
                                    To attract luck, fix on important
                                    files,books,
                                    lockers,
                                    computers etc.
                                </p>

                                <p className='card-text text-secondary'>Code: #7801</p>
                                <p className="card-text text-success">Price: Rs330</p>
                                <button className='btn inquiry_btn mx-0 my-2 ' data-toggle="tooltip" data-placement="right"
                                    title="Click for Inquiry">
                                    Inquiry
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
      </>
  )
}

export default StartupPyramid