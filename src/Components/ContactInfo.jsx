import React from 'react'

const ContactInfo = () => {
  return (
      <>
      <div className='footer_item sub_footer_blocks'>
                <div className="">
                    <h3>
                        Contact Info
                    </h3>
                </div>
                <div>
                    <ul className='list_footer p-0 '>
                        <li className=''>


                            <a href="/#" className='a_footer2'>
                                <i className="fas fa-globe-europe mx-1 my-2"></i>
                                <span className="">

                                    Jalaram Nagar,<br />
                                    Office No. 12, 1st Floor,<br />
                                    S.V.P. Road,<br />
                                    Chamunda Circle, Borivali (W),<br />
                                    Mumbai - 400 092 <br />
                                    Maharashtra <br />
                                    INDIA
                                </span>

                            </a>

                        </li>
                        <li className='my-2'>
                            <a href="/#" className='a_footer '>
                                <svg xmlns="http://www.w3.org/2000/svg" className="heroicon_phone" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +91 022 2890 3570
                            </a>
                        </li>
                        <li className='my-2'>
                            <a href="/#" className='a_footer'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="heroicon_mail" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                jitenpyramidcenter@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
      </>
  )
}

export default ContactInfo