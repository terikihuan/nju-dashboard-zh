import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import './fullPanelBtn.css'
import { ThemeContext } from '../../contexts/ThemeContext'

const ToMyCoursesBtn = () => {
  // State Variables
  const {language} = useContext(ThemeContext)

  return (
    <Link to='/course/myCourses' className='link' >
      <button className="fullPanelBtn">{language == "en" ? "My Courses" : "我的课程"}</button>
    </Link>
  )
}

export default ToMyCoursesBtn
