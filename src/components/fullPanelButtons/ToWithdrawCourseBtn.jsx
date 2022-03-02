import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import './fullPanelBtn.css'
import { ThemeContext } from '../../contexts/ThemeContext' 

const ToWithdrawCourseBtn = () => {
  // State variables
  const {language} = useContext(ThemeContext)

  return (
    <Link to='/select/withdrawal' className='link' >
      <button className="fullPanelBtn">{language == "en" ? "Withdraw Courses" : "退课"}</button>
    </Link>
  )
}

export default ToWithdrawCourseBtn
