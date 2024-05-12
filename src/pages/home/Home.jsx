import React from 'react'
import "./Home.css"
import 'react-circular-progressbar/dist/styles.css'
import Sidebar from './../../components/sidebar/Sidebar'
import Navbar from './../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Progressbar from '../../components/progressbar/Progressbar';
import Areachart from '../../components/areachart/Areachart'
function Home({ isDarkMode, toggleDarkMode }) {
  return (

    <div className="home">
      <Sidebar className="sideBar" />
      <div className="content">
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="mainContent">

          <div className="widgets">
            <Widget type="users" />
            <Widget type="orders" />
            <Widget type="earnings" />
            <Widget type="balance" />
          </div>
          <div className="stats">
            <div className="progBar">
              <Progressbar/>
            </div>
            <div className="areaChart">
              <Areachart/>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home