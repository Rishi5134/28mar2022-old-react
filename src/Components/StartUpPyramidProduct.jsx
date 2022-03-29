import React from 'react'

import Sidenav from './Sidenav'

import QuickLinks from './QuickLinks';
import Help from './Help';
import ContactInfo from './ContactInfo';
import Socials from './Socials';

const StartUpPyramidProduct = () => {
  return (
    <>

      <div className="d-flex">
        <div className="col-lg-3 mt-4 sidenav sideNavStyle2">

          <nav className="collapse show navbar navbar-vertical " id="navbar-vertical">
            <div className="navbar-nav text-center mx-auto">

              <h4 className="m-0">CATEGORIES</h4>
              <hr className="mx-3 bg-danger" />
              <div className="overflow-auto sideNavStyle4">
                <Sidenav className='' />
              </div>
            </div>
          </nav>
        </div>

        <div className="w-100 mt-0 d-flex flex-column mt-3">

          <div className='d-flex text-white text-warning justify-content-center align-items-center'>
            <h2 className="service-text-color">STARTUP PYRAMID</h2>
          </div>
          <hr className="mx-4" />


          <div className='w-100 row mx-4 startUpPyramidProduct'>

            <div className="card my-4 mx-4 col-sm-3 res_prod crd col-sm-4" >
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
               <a href="/productDetails">
               <button className='btn inquiry_btn mx-0 my-2 ' data-toggle="tooltip" data-placement="right"
                  title="Click for Inquiry">
                  Inquiry
                </button>
               </a>

              </div>
            </div>

            <div className="card my-4 mx-4 col-sm-3 res_prod crd col-sm-4" >
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
              <a href="/productDetails">
              <button className='btn inquiry_btn mx-0 my-2 ' data-toggle="tooltip" data-placement="right"
                  title="Click for Inquiry">
                  Inquiry
                </button>
              </a>

              </div>
            </div>

            <div className="card my-4 mx-4 col-sm-3 res_prod crd col-sm-4" >
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
               <a href="/productDetails">
               <button className='btn inquiry_btn mx-0 my-2 ' data-toggle="tooltip" data-placement="right"
                  title="Click for Inquiry">
                  Inquiry
                </button>
               </a>

              </div>
            </div>

            <div className="card my-4 mx-4 col-sm-3 res_prod crd col-sm-4" >
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
               <a href="/productDetails">
               <button className='btn inquiry_btn mx-0 my-2 ' data-toggle="tooltip" data-placement="right"
                  title="Click for Inquiry">
                  Inquiry
                </button>
               </a>

              </div>
            </div>

            <div className="card my-4 mx-4 col-sm-3 res_prod crd col-sm-4" >
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
                <a href="/productDetails">
                <button className='btn inquiry_btn mx-0 my-2 ' data-toggle="tooltip" data-placement="right"
                  title="Click for Inquiry">
                  Inquiry
                </button>
                </a>

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

export default StartUpPyramidProduct