import React, {useContext} from 'react'
import './studentInfo.css'
import { UserContext } from '../../../contexts/UserContext'
import { ThemeContext } from '../../../contexts/ThemeContext'

// Components
import FullPanel from '../../../components/fullPanel/FullPanel'

const StudentInfoPage = () => {
  // State variables
  const {userObject} = useContext(UserContext)
  const {language} = useContext(ThemeContext)

  // Render
  const {name, image, department, schoolYear, major, chi_major, chi_department} = userObject
  return (
    <div className="appWrapper">
      <div className="studentInfoPage">
        <FullPanel title={language == "en" ? "Student Informations" : "学生信息"} className="studentInfoPanel">
          <div className="studentInfoContainer">
            <div className="studentImgWrapper">
              <img className="studentImg" src={image} alt="" />
            </div>
            <div className="studentInfoDetails">
              <p><b>{language == "en" ? "Name: " : "姓名: "}</b>{name}</p>
              <p><b>{language == "en" ? "Major: " : "专业: "}</b>{language == "en" ? major : chi_major}</p>
              <p><b>{language == "en" ? "Department: " : "学院: "}</b>{language == "en" ? department : chi_department}</p>
              <p><b>{language == "en" ? "School Year: " : "学年: "}</b>{schoolYear}</p>
            </div>
          </div>
        </FullPanel>
      </div>
    </div>
  )
}

export default StudentInfoPage
