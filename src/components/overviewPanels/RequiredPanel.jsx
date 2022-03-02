import React, {useContext} from 'react'
import './overviewPanels.css'
import RequiredCourse from '../../data/courseData/RequiredCourses.json'
import {ThemeContext} from '../../contexts/ThemeContext'

// Components
import OverviewTable from '../overviewTable/OverviewTable'
import OverviewTotalCred from '../overviewTotalCred/OverviewTotalCred'

const RequiredPanel = () => {
  // State variables
  const {language} = useContext(ThemeContext)

  return (
    <div className="botPanel requiredPanel">
      <div className="PanelWrapper">
        <div className="PanelLabel">
          <h3>{language == "en" ? "Required Courses" : "必修课程"}</h3>
          <OverviewTotalCred courses={RequiredCourse} />
        </div>
        <div className="botPanelContent panelContent">
          {language == "en" ? (
            <OverviewTable 
              headers={["Course Name", "Credit", "Completion"]} 
              data={RequiredCourse} 
              fields={["name", "credit", "completion"]}
              id="requiredPanelTable"
            /> ) : (
            <OverviewTable 
              headers={["课程", "学分", "完成"]} 
              data={RequiredCourse} 
              fields={["chi_name", "credit", "completion"]}
              id="requiredPanelTable"
            /> )
          }
        </div>
      </div>
    </div>
  )
}

export default RequiredPanel
