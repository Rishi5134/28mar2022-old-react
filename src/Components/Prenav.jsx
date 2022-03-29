import React from 'react'

const Prenav = () => {
    function w3_open() {
        // document.getElementById("main").style.marginLeft = "30%";
        document.getElementById("stick_navbar").style.marginLeft = "13.3rem";
        document.getElementById('contact2').style.display = 'none';
        // document.getElementById("mySidebar").style.width = "30%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").style.display = 'none';
        // document.getElementById("main").disabled = true;
        // document.getElementById("prenav").style.width = '80%';
        document.getElementById("prenav").style.marginLeft = '30%';
    }
  return (
      <>
      <div className='w-100 prenav bg-dark text-white nav res_prenav_main fixed-top' id="stick_navbar">

<div className="menus d-flex align-items-center">
    <button className="btn btn-dark w3-xlarge res_sidebar_menu" onClick={() => {w3_open()}} id="openNav">
        &#9776;
    </button>

    <div id="head"
        className=' d-flex heading justify-content-center align-items-center animate__animated animate__flipInY'>
        <h2 className='header-color mx-2'>ENERGY</h2>
        <h2 className='text-white'> SYSTEMS</h2>
    </div>
</div>

<div id="contact2"
    className='px-2 contact text-end animate__lightSpeedInLeft animate__animated mt-0 my-0 res_prenav1'>
    

    <a href='/#' className=' anchor text-white mx-2 my-1'>
        <svg xmlns="http://www.w3.org/2000/svg" className="heroicon_phone" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className='res_pre_data'>+91 022 2890 3570</span>
    </a>

    <a href='/#' className=' anchor text-white mx-2 my-1'>
        <svg xmlns="http://www.w3.org/2000/svg" className="heroicon_mail" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className='res_pre_data'>jitenpyramidcenter@gmail.com</span>
    </a>
</div>

</div>
      </>
  )
}

export default Prenav