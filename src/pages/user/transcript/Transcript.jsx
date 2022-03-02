import React, {useMemo, useContext} from 'react'
import './transcript.css'
import FinishedCourses from '../../../data/courseData/FinishedCourses.json'
import { ThemeContext } from '../../../contexts/ThemeContext'

// Components
import FullPanel from '../../../components/fullPanel/FullPanel'
import TranscriptTable from '../../../components/fullTable/TranscriptTable'

const TranscriptPage = () => {
  // State Variables
  const {language} = useContext(ThemeContext)

  // React Table variables
  const data = useMemo(() => [...FinishedCourses], [FinishedCourses])
  const columns = useMemo(() => [
    {
      Header: "Course code",
      accessor: "code",
      className: "tableHeader codeCol",
    },
    {
      Header: "Course name",
      accessor: "name",
    },
    {
      Header: "Teacher",
      accessor: "taughtBy",
      className: "tableHeader teacherCol",
    },
    {
      Header: "Department",
      accessor: "department_eng", 
    },
    {
      Header: "Level",
      accessor: "level", 
    },
    {
      Header: "Category",
      accessor: "category",
    },
    {
      Header: "Credit",
      accessor: "credit",
    },
    {
      Header: "Score",
      accessor: "score",
    },
  ], [])

  const chi_columns = useMemo(() => [
    {
      Header: "课程码",
      accessor: "code",
      className: "tableHeader codeCol",
    },
    {
      Header: "课程名",
      accessor: "chi_name",
    },
    {
      Header: "教师",
      accessor: "taughtBy",
      className: "tableHeader teacherCol",
    },
    {
      Header: "学院",
      accessor: "department_chi", 
    },
    {
      Header: "年级",
      accessor: "level", 
    },
    {
      Header: "课程类别",
      accessor: "category_chi",
    },
    {
      Header: "学分",
      accessor: "credit",
    },
    {
      Header: "成绩",
      accessor: "score",
    },
  ], [])

  // Render
  return (
    <div className="appWrapper">
      <div className="transcriptPage">
        <FullPanel title={language == "en" ? "Transcript" : "成绩查看"} >
          {/* Table goes here */}
          <TranscriptTable columns={language == "en" ? columns : chi_columns} data={data} />
        </FullPanel>
      </div>
    </div>
  )
}

export default TranscriptPage
