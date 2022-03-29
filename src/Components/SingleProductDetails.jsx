import React from 'react'

import Sidenav from './Sidenav'

import ReactImageMagnify from 'react-image-magnify';
import { ImageGroup, Image } from 'react-fullscreen-image'
import QuickLinks from './QuickLinks';
import Help from './Help';
import ContactInfo from './ContactInfo';
import Socials from './Socials';
import sp6 from '../LargeImages/sp6.jpg'


const SingleProductDetails = () => {
  const ReactImageZooming = () => {


    if (window.screen.width >= 575) {

        return (<ReactImageMagnify style={{ zIndex: "9" }} {...{
            smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: sp6
              
            },
            largeImage: {
                src: sp6,
                width: 1200,
                height: 1800,
            }
        }} />)

    }
    if (window.screen.width < 575) {
        return (
            <div className='w-100 productDetailsImage'>
                <ImageGroup>

                    <Image
                        src={sp6}
                        alt="nature"
                        style={{ zIndex: '999999999', width: '200px' }}

                    />
                </ImageGroup>
            </div>


        )
    }
}

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
            <h2 className="service-text-color">PRODUCT DETAILS</h2>
          </div>
          <hr className="mx-4" />

          <div className="card mx-auto head-office-main2 ">
            <div className="row singleProduct-main mx-2 ">
              <div>
                <h3> Fortune Chip <span><sub>(Fortune Chip)</sub></span></h3>
                <hr />
              </div>
              <div className="singleProductHeight col-sm-4 img-container" >

                {/* <img id="zoom_01" class="w-100 singleProduct zoomable" src={sp6}
                  data-zoom-image="" width="311" /> */}
                       {ReactImageZooming()}
              </div>
              <div className="col-sm-8 singleProductData">
                <div className="">


                  <p className="text-justify">To attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etcTo attract luck, fix on important files,
                    books, lockers, computers etc</p>
                </div>

                <div className="priceColor">
                  <p className="singleProductCode">Code: #7801

                  </p>
                  <p className="singleProductPrice">
                    Price: Rs 330</p>
                </div>
                <div class="d-flex row w-100 inquiry_btn2 ">

                  <button className="btn inquiry_btn mx-2 btn-width col-sm-6 mb-3">Inquire Now</button>
                  <button className="btn btn-secondary mx-2 btn-width col-sm-6 mb-3">View in हिन्दी</button>


                </div>
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

export default SingleProductDetails