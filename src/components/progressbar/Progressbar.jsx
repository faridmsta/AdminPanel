import React from 'react'
import "./Progressbar.css"
import { IoMdMore } from "react-icons/io";
import { CircularProgressbar } from 'react-circular-progressbar'
function Progressbar() {
  return (
    <div>
        <div className="progresBar">
              <div className="title">
                <h2>Goal</h2><span><IoMdMore /></span>
              </div>
              <div className="onlyBar">
                <div className="bar">
                  <CircularProgressbar value={82} text='82%' />
                </div>
              </div>
              <div className="more">
                You have {100 - 82} % left to access your goal
              </div>
            </div>
    </div>
  )
}

export default Progressbar