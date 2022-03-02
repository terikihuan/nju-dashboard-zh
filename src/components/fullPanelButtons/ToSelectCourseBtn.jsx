import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import './fullPanelBtn.css'
import { ThemeContext } from '../../contexts/ThemeContext'

const ToSelectCourseBtn = () => {
  // State Variables
  const {language} = useContext(ThemeContext)

  return (
    <Link to='/select/majorSelect' className='link' >
      <button className="fullPanelBtn">{language == "en" ? "Select Courses" : "选课"}</button>
    </Link>
  )
}

export default ToSelectCourseBtn
