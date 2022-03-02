import React, {useMemo, useContext} from 'react'
import './myCourses.css'
import {UserContext} from '../../../contexts/UserContext'
import { ThemeContext } from '../../../contexts/ThemeContext'

// Components
import FullPanel from '../../../components/fullPanel/FullPanel'
import AllCoursesTable from '../../../components/fullTable/CurrentCoursesTable'
import ToWithdrawCourseBtn from '../../../components/fullPanelButtons/ToWithdrawCourseBtn'

const MyCoursesPage = () => {
  // State Variables
  const {userCourses} = useContext(UserContext)
  const {language} = useContext(ThemeContext)

  // React Table variables
  const data = useMemo(() => [...userCourses], [userCourses])
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
      Header: "Category",
      accessor: "category",
    },
    {
      Header: "Credit",
      accessor: "credit",
      
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
      Header: "课程类别",
      accessor: "category_chi",
    },
    {
      Header: "学分",
      accessor: "credit",
      
    },
  ], [])

  // Render
  return (
    <div className="appWrapper">
      <div className="myCoursesPage">
        <FullPanel title={language == "en" ? "My Courses" : "我的课程"} button={ToWithdrawCourseBtn}>
          <AllCoursesTable columns={language == "en" ? columns : chi_columns} data={data} />
        </FullPanel>
      </div>
    </div>
  )
}

export default MyCoursesPage
