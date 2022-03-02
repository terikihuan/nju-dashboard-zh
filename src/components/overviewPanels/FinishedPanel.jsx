import React, {useContext} from 'react'
import './overviewPanels.css'
import FinishedCourses from '../../data/courseData/FinishedCourses.json'
import {ThemeContext} from '../../contexts/ThemeContext'

// Components
import OverviewTable from '../overviewTable/OverviewTable'
import OverviewTotalCred from '../overviewTotalCred/OverviewTotalCred'

const FinishedPanel = () => {
  const {language} = useContext(ThemeContext)
  return (
    <div className="botPanel finishedPanel">
      <div className="PanelWrapper">
        <div className="PanelLabel">
          <h3>{language == 'en' ? 'Finished Courses' : '已修课程'}</h3>
          <OverviewTotalCred courses={FinishedCourses} />
        </div>
        <div className="botPanelContent panelContent">
          {language == 'en' ? (
            <OverviewTable 
              headers={["Course Name", "Credit", "Score"]} 
              data={FinishedCourses} 
              fields={["name", "credit", "score"]}
              id="finishedPanelTable"
            /> ) : ( 
            <OverviewTable 
              headers={["课程", "学分", "成绩"]} 
              data={FinishedCourses} 
              fields={["chi_name", "credit", "score"]}
              id="finishedPanelTable"
            /> )
          }
        </div>
      </div>
    </div>
  )
}

export default FinishedPanel
