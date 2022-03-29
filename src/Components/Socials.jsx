import React from 'react'

const Socials = () => {
  return (
    <div className='footer_item sub_footer_blocks'>


        <div>
            <h3>
                SOCIALS
            </h3>
        </div>
        <div>
            <ul className='list_footer p-0 footer_item_list'>
                <li>
                    <a href="" className='a_footer'>
                        <i className="ri-facebook-fill  "></i>
                        <span className="mx-2">
                            Facebook
                        </span>
                    </a>
                </li>
                <li>
                    <a href="" className='a_footer'>
                        <i className="ri-twitter-fill  "></i>
                        <span className="mx-2">
                            Twitter
                        </span>
                    </a>
                </li>
                <li>
                    <a href="" className='a_footer'>
                        <i className="ri-instagram-line  "></i>
                        <span className="mx-2">
                            Instagram
                        </span>
                    </a>
                </li>
                <li>
                    <a href="" className='a_footer'>
                        <i className="ri-linkedin-fill  "></i>
                        <span className="mx-2">
                            LinkedIn
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Socials