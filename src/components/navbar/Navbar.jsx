import React from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { RiNotification2Line } from "react-icons/ri";
import { BiMessageSquare } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";
function Navbar() {
    return (
        <div>
            <div className="navbar">
                <div className="navbarWrap">
                    <div className="search">
                        <div className="srcbox">
                            <input type="text" />
                            <CiSearch />
                        </div>
                    </div>
                    <div className="items">
                        <div className="languages">
                            <TbWorld />
                            <select name="" id="">
                                <option value="eng">English</option>
                                <option value="aze">Azerbaijani</option>
                                <option value="rus">Russian</option>
                            </select>
                        </div>
                        <nav>
                            <ul>
                                <li className='item thememode' >
                                    <label class="switch">
                                        <input  type="checkbox" />
                                        <span class="slider"></span>
                                    </label>
                                </li>
                                <li>
                                    <div className="notification">
                                        <RiNotification2Line />
                                        <span className="countNtf">1</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="message">
                                        <BiMessageSquare />
                                        <span className="countNtf">1</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="more">
                                        <IoIosMore />
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <div className="profile">
                            <div className="photo">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar