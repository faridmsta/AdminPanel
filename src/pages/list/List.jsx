import React from 'react'
import "./List.css"
import Sidebar from './../../components/sidebar/Sidebar'
import Navbar from './../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'

function List({ isDarkMode, toggleDarkMode }) {
  return (

    <div className="list">
      <Sidebar className="sideBar" />
      <div className="content">
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="mainContent">
          <Datatable/>
        </div>
      </div>
    </div>

  )
}

export default List