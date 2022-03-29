import React from 'react'
import { NavLink } from 'react-router-dom'
const NavHeader = () => {
    return (
        <>
        
            <div id="" className=" res_col w-100 res_nav_item1">
                <ul className="nav_list navbar-nav mx-5 d-flex justify-content-between align-items-center">
                    <li className="nav-item">
                        <NavLink className="anchor2 mx-2" to='/'>
                            HOME
                        </NavLink>
                        {/* <a className="anchor2 mx-2" href="/#">HOME</a> */}
                    </li>

                    <li className="nav-item">
                        <NavLink className="anchor2 mx-2" to='/aboutUs'>
                            ABOUT US
                        </NavLink>
                        {/* <a className="anchor2 mx-2" href="/#">ABOUT US</a> */}
                    </li>
                    <li className="nav-item">
                        <NavLink className="anchor2 mx-2" to='/advantages'>
                            ADVANTAGES
                        </NavLink>
                        {/* <a className="anchor2 mx-2" href="/#">ADVANTAGES</a> */}
                    </li>

                    <li className="nav-item">
                        <NavLink className="anchor2 mx-2" to='/products'>
                            PRODUCTS
                        </NavLink>
                        {/* <a className="anchor2 mx-2" href="/#">PRODUCTS</a> */}
                    </li>
                    <li className="nav-item">
                        <NavLink className="anchor2 mx-2" to='/publication'>
                            PUBLICATION
                        </NavLink>
                        {/* <a className="anchor2 mx-2" href="/#">PUBLICATION</a> */}
                    </li>
                    <li className="nav-item">
                        <NavLink className="anchor2 mx-2" to='/researchAtEgypt'>
                            RESEARCH AT EGYPT
                        </NavLink>
                        {/* <a className="anchor2 mx-2" href="/#">RESEARCH AT EGYPT</a> */}
                    </li>
                    <li className="nav-item">
                        <NavLink className="anchor2 mx-2" to='/TrainingAndSeminar'>
                            TRAINING & SEMINAR
                        </NavLink>
                        {/* <a className="anchor2 mx-2" href="/#">TRAINING & SEMINAR</a> */}
                    </li>
                    <li className="nav-item">
                        <NavLink className="anchor2 mx-2" to='/contactUs'>
                            CONTACT US
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavHeader