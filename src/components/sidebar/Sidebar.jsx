import React from 'react'
import './Sidebar.css'
import { IoIosArrowDown } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineProduct } from "react-icons/ai";
import { PiCardsLight } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosStats } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <div className="sideBar">
        <div className="logo">
          <Link to="#">
            Admin<span>Panel</span>
          </Link>
        </div>
        <div className="classification">
          <ul>
            <li className="topics">
              <div className="topicHead">
                <h3>Main</h3> <IoIosArrowDown />
              </div>
              <div className="topicBody">
                  <Link to="/"><MdDashboard/> Dashboard</Link>
              </div>
            </li>
            <li className="topics">
              <div className="topicHead">
                <h3>Lists</h3> <IoIosArrowDown />
              </div>
              <div className="topicBody">
                  <Link to="/users"><CgProfile/> Users</Link>
                  <Link to=""><AiOutlineProduct /> Producuts</Link>
                  <Link to=""><PiCardsLight/> Order</Link>
                  <Link to=""><TbTruckDelivery/> Delivery</Link>
              </div>
            </li>
            <li className="topics">
              <div className="topicHead">
                <h3>Useful</h3> <IoIosArrowDown />
              </div>
              <div className="topicBody">
                  <Link to=""><IoIosStats/> Stats</Link>
                  <Link to=""><IoMdNotificationsOutline/>Notifications</Link>
              </div>
            </li>
            <li className="topics">
              <div className="topicHead">
                <h3>Service</h3> <IoIosArrowDown />
              </div>
              <div className="topicBody">
                  <Link to=""><IoMdSettings /> System health</Link>
                  <Link to=""><IoMdSettings /> Logs</Link>
                  <Link to=""><IoMdSettings /> Settings</Link>
              </div>
            </li>
            <li className="topics">
              <div className="topicHead">
                <h3>User</h3> <IoIosArrowDown />
              </div>
              <div className="topicBody">
                  <Link to=""><IoIosLogIn/> Profile</Link>
                  <Link to=""><IoIosLogIn/> Log out</Link>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default Sidebar