import React from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { RiNotification2Line } from "react-icons/ri";
import { BiMessageSquare } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

function Navbar({ isDarkMode, toggleDarkMode }) {

    const handleToggle = () => {

        toggleDarkMode();
    };
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
                                    <label className="switch">
                                        <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
                                        <span className="slider"></span>
                                    </label>
                                </li>
                                <li>
                                    <div className="notification">
                                        <RiNotification2Line />
                                        <span className="countNtf">2</span>
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
                                <img src="https://media.licdn.com/dms/image/D4E03AQFyyLACyEyuDQ/profile-displayphoto-shrink_200_200/0/1709843951686?e=2147483647&v=beta&t=BDFYF-goZB9rpbFpltjgOJ4A1SZIgFalmN9BH1jYnZE" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar