import React from 'react'
import './Widget.css'
import { FaChevronUp } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiListOrdered2 } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { MdAccountBalanceWallet } from "react-icons/md";
function Widget({type}) {
  let data
  let percentage=12

  switch (type){
    case "users":
      data={
        title:"Users",
        ismoney: false,
        count:4721,
        link: "See all users",
        icon: <FaUser 
        style={{
          color:"crimson",
          background: "rgb(255,0,0,0.2)",
          padding: "10px",
          borderRadius: "7px"
          }} />,
      }
      break;
    case "orders":
      data={
        title:"Orders",
        ismoney: false,
        count:78,
        link: "See all orders",
        icon: < RiListOrdered2
        style={{
          color:"goldenrod",
          background: "rgb(218,165,32,0.2)",
          padding: "10px",
          borderRadius: "7px"
          }} />,
      }
      break;
    case "earnings":
      data={
        title:"Earnings",
        ismoney: true,
        count:784,
        link: "See all earnings",
        icon: < GrMoney
        style={{
          color:"green",
          background: "rgb(0,128,0,0.2)",
          padding: "10px",
          borderRadius: "7px"
          }} />,
      }
      break;
    case "balance":
      data={
        title:"Balance",
        ismoney: true,
        count:24032,
        link: "See all balace",
        icon: < MdAccountBalanceWallet
        style={{
          color:"purple",
          background: "rgb(128,0,128,0.2)",
          padding: "10px",
          borderRadius: "7px"
          }} />,
      }
      break;
    
  }




  return (
    
      <div className="widget">
        <div className="top">
          <div className="topic">
            {data.title}
          </div>
          <div className="percentage">
            <div className="upAndDown">
              <FaChevronUp />
            </div>
            <div className="number">
              {percentage}%
            </div>
          </div>
        </div>
        <div className="center">
          <span>
            {data.count} <span className='dollarİcon'>{(data.ismoney)&& "$"}</span> 
          </span>
        </div>
        <div className="bottom">
          <div className="allUsers">
            <a href="###">{data.link}</a>
          </div>
          <div className="icon">
            {data.icon}
          </div>
        </div>
      </div>

  )
}

export default Widget