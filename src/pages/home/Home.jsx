import React from 'react'
import Sidebar from './../../components/sidebar/Sidebar'
import Navbar from './../../components/navbar/Navbar'
import "./Home.css"
import Widget from '../../components/widget/Widget'

function Home() {
  return (
    
    <div className="home">
        <Sidebar className="sideBar" />
        <div className="content">
          <Navbar/>
          <div className="homeContent">
            <Widget type="users" />
            <Widget type="orders" />
            <Widget type="earnings" />
            <Widget type="balance" />
          </div>
        </div>
    </div>
    
  )
}

export default Home