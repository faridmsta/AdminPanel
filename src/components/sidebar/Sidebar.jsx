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
function Sidebar() {
  return (
    <>
      <div className="sideBar">
        <div className="logo">
          <a href="#">
            Admin<span>Panel</span>
          </a>
        </div>
        <div className="classification">
          <ul>
            <li className="topics">
              <div className="topicHead">
                <h3>Main</h3> <IoIosArrowDown />
              </div>
              <div className="topicBody">
                  <a href=""><MdDashboard/> Dashboard</a>
              </div>
            </li>
            <li className="topics">
              <div className="topicHead">
                <h3>Lists</h3> <IoIosArrowDown />
              </div>
              <div className="topicBody">
                  <a href=""><CgProfile/> Users</a>
                  <a href=""><AiOutlineProduct /> Producuts</a>
                  <a href=""><PiCardsLight/> Order</a>
                  <a href=""><TbTruckDelivery/> Delivery</a>
              </div>
            </li>
            <li className="topics">
              <div className="topicHead">
                <h3>Useful</h3> <IoIosArrowDown />
              </div>
              <div className="topicBody">
                  <a href=""><IoIosStats/> Stats</a>
                  <a href=""><IoMdNotificationsOutline/>Notifications</a>
              </div>
            </li>
            <li className="topics">
              <div className="topicHead">
                <h3>Service</h3> <IoIosArrowDown />
              </div>
              <div className="topicBody">
                  <a href=""><IoMdSettings /> System health</a>
                  <a href=""><IoMdSettings /> Logs</a>
                  <a href=""><IoMdSettings /> Settings</a>
              </div>
            </li>
            <li className="topics">
              <div className="topicHead">
                <h3>User</h3> <IoIosArrowDown />
              </div>
              <div className="topicBody">
                  <a href=""><IoIosLogIn/> Profile</a>
                  <a href=""><IoIosLogIn/> Log out</a>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default Sidebar