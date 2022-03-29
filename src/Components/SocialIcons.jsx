import React from 'react'

const SocialIcons = () => {
  return (
      <>
      <div className='d-flex mt-3 res_col'>
            <p className='mx-auto mt-2 w-50 lead res_discount'>
                We’re confident we’ve provided all the best for you. Stay
                connect
                with us
            </p>
            <div className='mx-auto d-flex justify-content-around align-items-center w-25 res_discount'>

                <i className="ri-facebook-fill mx-2 icon_hover fa-2x"></i>
                <i className="ri-twitter-fill mx-2 icon_hover fa-2x"></i>
                <i className="ri-instagram-line mx-2 icon_hover fa-2x"></i>
                <i className="ri-linkedin-fill mx-2 icon_hover fa-2x"></i>
            </div>
        </div> 
      </>
  )
}

export default SocialIcons