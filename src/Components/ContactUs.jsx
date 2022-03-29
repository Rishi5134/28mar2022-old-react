import React, { useState } from 'react'
import Sidenav from './Sidenav'
import Socials from './Socials'
import QuickLinks from './QuickLinks'
import Help from './Help'
import ContactInfo from './ContactInfo'
import { FloatingLabel } from 'react-bootstrap'
// import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';

const ContactUs = () => {

  const [value1, setValue1] = useState(null);
  const [state, setState] = useState({
    name1: '',
    email: '',
    message: '',
    address:'',
    telephone:'',
    country:''
  });
  let name, value;
  const handleInputs = (e) => {
    e.preventDefault();
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setState({ ...state,...value1, [name]: value })
  }
  function sendEmail(e) {
    e.preventDefault();
   try {
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "rishi3rathod5@gmail.com",
      Password: "oeicferjgoqfndzr",
      To: state.email,
      Cc:'rishirathod.180410116102@gmail.com',
      From: 'rishi3rathod5@gmail.com',
      Subject: "Email Demo",
      Body: 
      "<div style='color:black' >" +
      "<p>Hello " +
      state.name1 +
      " ,</p> </br> " +
      "<p>Thanks for contacting us .</p> </br>" +
      "<p>I'm glad to provide the details you sent to us.</p>" +
      "<div style='border:7px solid gray; color:black '>" +
      "<p style='margin:2px 5px' >Name: <span> " +
      state.name1 +
      "</span></p></br>" +
      "<p style='margin:2px 5px' >Email: <span> " +
      state.email +
      "</span></p></br>" +
      "<p style='margin:2px 5px' class='demo' >Country: <span> " +
      value1.name +
      "</span></p></br>" +
      "<p style='margin:2px 5px' >Telephone: <span> " +
      state.telephone +
      "</span></p></br>" +
      "<p style='margin:2px 5px' >Address: <span> " +
      state.address +
      "</span></p></br>" +
      "<p style='margin:2px 5px' >Your Enquiry Message: <span> " +
      state.message +
      "</span></p></br>" +
      "</div>" +
      "<p>If you'd like additional information about us, please take a look at:</p> </br>" +
      "<p>Our online catalog, where you can search for the product/topic you requested </p> </br>" +
      "<p>Our <a href='./faq.html' >FAQs</a>, where you can learn more about our products</p> </br>" +
      "<p>Our social media channels, including <a href='/'>Facebook</a>, <a href='/'>Instagram</a>, etc.</p> </br>" +
      "<p>To reach us directly, please email us at jitenpyramidcenter@gmail.com or call our direct line: 1-800-111-2222. You can also reply to this email or call our customer service team at 1-800-123-4567. All our agents have access to your account information and can help you. We're available Monday through Friday, from 7 a.m. to 9 p.m. CST.</p> </br>" +
      "<p>Sincerely,</p></br>" +
      "<p>Admin</p></br>" +
      "</div>"
    }).then(
      message => alert('Message sent successfully')
    );
   } catch (err) {
     console.log(err);
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
            <h2 className="service-text-color">CONTACT US</h2>
          </div>
          <hr className="mx-4" />
          <div className=" contactUs-head-main w-100">

            <div className="d-flex justify-content-center mt-0 ">

              <div className=" mx-0 head-office-main">



                <div className="d-flex justify-content-around flex-column my-0 mx-2 my-2">
                  <div className='anchor4 align-items-start text-dark d-flex my-2'>
                    <div>

                      <i className='fas fa-map-marker-alt mx-2 my-1'></i>
                    </div>
                    <div>


                      <span className="headoffice">
                        Percare Industires
                        355 GIDC Makarpura, <br />
                        Vadodara 390010, <br />
                        (Guj), INDIA <br />
                      </span>
                    </div>
                  </div>

                  <div className="head-email my-2">

                    <div className=' anchor4 align-items-center text-dark d-flex my-2'>
                      <div>

                        <i className="fas fa-phone-alt heroicon_phone my-1 mx-1"></i>

                      </div>
                      <div>

                        <span className="headoffice">
                          +91 9825084612 / +91 9824179954
                        </span>

                      </div>
                    </div>
                  </div>
                  <div className="head-email my-2">

                    <div className=' anchor4 d-flex align-items-center text-dark my-2'>
                      <div>
                        <i className="fas fa-envelope heroicon_mail my-1 mx-1"></i>


                      </div>
                      <div>

                        <span className="headoffice">
                          percare@mail.com
                        </span>

                      </div>
                    </div>
                  </div>
                  <div className="head-email my-2">

                    <div className=' anchor4 d-flex align-items-center text-dark my-2'>
                      <div>

                        <i className="fas fa-globe-europe mx-1 my-1"></i>
                      </div>
                      <div>
                        <span className="headoffice">

                          www.pyramidvastu.com
                        </span>

                      </div>
                    </div>
                  </div>

                </div>


                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29538.81649363028!2d73.17483913955078!3d22.264649799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc42b00000001%3A0x680f8396d0b91198!2sPyramid%20Yantra!5e0!3m2!1sen!2sin!4v1646215094775!5m2!1sen!2sin"
                  height="auto" allowFullScreen="" className="contactUsStyle mx-auto w-100"
                  loading="lazy"></iframe>
              </div>
            </div>

            <div className="d-flex flex-column contact-main ">

              <div className='d-flex text-white text-warning justify-content-center align-items-center'>
                <h3 className="service-text-color">Send us a Message</h3>
              </div>

              <form className=" d-flex flex-column justify-content-center ">

                <div className="my-3 row mx-2 ">
                  <div className="form-floating col-sm-12">
                    <input type="text" className="form-control col-sm-10 w-100" id="name1"
                      placeholder="Jiten" autoComplete="off" name='name1' value={state.name1} onChange={handleInputs} required />
                    <label htmlFor="name" className="col-sm-2 col-form-label contact-mail mx-3">Name</label>
                  </div>

                </div>

                <div className="my-3 row mx-2 ">
                  <div className=" form-floating col-sm-12">
                    <input type="email" className="form-control col-sm-10 w-100" id="email"
                      placeholder="abc@example.com" name='email' value={state.email} onChange={handleInputs} autoComplete="off" required />
                    <label htmlFor="email" className="col-sm-2 col-form-label contact-mail mx-3">Email</label>
                  </div>
                </div>

                <div className="mb-3 row mx-2">
                  <div className="form-floating col-sm-12">
                    <textarea className="form-control col-sm-10 w-100" id="address" rows="3"
                      placeholder="Your Address" name='address' value={state.address} onChange={handleInputs}  autoComplete="off" required></textarea>
                    <label htmlFor="address" className="col-sm-2 col-form-label contact-mail mx-3">
                      Address</label>
                  </div>
                </div>

                <div className="mb-3 row mx-2">
                  <div className="col-sm-12 form-floating">
                    {/* <FloatingLabel>
                      <Form.Select name="country" id="country"
                        className="form-control dropdown-btn col-sm-12 w-100"> */}

                    <FloatingLabel controlId="floatingSelect" >
                      <CountrySelect
                        value={value1}
                        onChange={setValue1}
                        className='countryInput'
                      />
                    </FloatingLabel>
                  </div>
                </div>

                <div className="my-3 row mx-2 ">
                  <div className="col-sm-12 form-floating">
                    <input type="number" className="form-control col-sm-10 w-100" id="telephone"
                      placeholder="987456321" name='telephone' value={state.telephone} onChange={handleInputs} autoComplete="off" required />
                    <label htmlFor="telephone"
                      className="col-sm-2 col-form-label contact-mail mx-3">Telephone</label>
                  </div>
                </div>
                <div className="mb-3 row mx-2">
                  <div className="col-sm-12 form-floating">
                    <textarea className="form-control col-sm-10 w-100" id="enquiry" rows="3"
                      placeholder="Your Message" autoComplete="off" name='message' value={state.message} onChange={handleInputs} required></textarea>
                    <label htmlFor="message"
                      className="col-sm-2 col-form-label contact-mail mx-3">Enquiry</label>
                  </div>
                </div>
                <div className="d-flex justify-content-around mx-2 text-cente row">

                  <div className="text-ceter mb-3 col-sm-12">
                    <button type="submit" className="btn contact-btn my-3" value="Send" onClick={sendEmail} >Send Message</button>
                  </div>

                </div>

              </form>

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

export default ContactUs