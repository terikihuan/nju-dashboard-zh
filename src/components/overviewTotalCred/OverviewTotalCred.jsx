import React, {useContext} from 'react'
import './overviewTotalCred.css'
import {ThemeContext} from '../../contexts/ThemeContext'

const OverviewTotalCred = ({courses, style}) => {
  const {language} = useContext(ThemeContext)
  const courseCredit = courses.reduce((total, course) => total + course.credit, 0)
  return (
    <div className="overviewTotalCredits" style={style}>
       {`${language == "en" ? "Total credits: " : "总学分: "}  ${courseCredit}`}
    </div>
  )
}

export default OverviewTotalCred
