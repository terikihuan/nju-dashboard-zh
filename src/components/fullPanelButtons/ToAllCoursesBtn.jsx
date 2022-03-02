import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import './fullPanelBtn.css'
import { ThemeContext } from '../../contexts/ThemeContext'

const ToAllCoursesBtn = () => {
  // State variables
  const {language} = useContext(ThemeContext)

  return (
    <Link to='/course/allCourses' className='link' >
      <button className="fullPanelBtn">{language == "en" ? "All Courses" : "全校课程"}</button>
    </Link>
  )
}

export default ToAllCoursesBtn
