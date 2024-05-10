import React from 'react'
import Sidebar from './../../components/sidebar/Sidebar'
import Navbar from './../../components/navbar/Navbar'
import "./Home.css"

function Home() {
  return (
    
    <div className="home">
        <Sidebar className="sideBar" />
        <div className="content">
          <Navbar/>
          
        </div>
    </div>
    
  )
}

export default Home