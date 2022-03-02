import React, {useMemo, useContext, useState} from 'react'
import './courseWithdrawal.css'
import {UserContext} from '../../../contexts/UserContext'
import { ThemeContext } from '../../../contexts/ThemeContext'

// Components
import FullPanel from '../../../components/fullPanel/FullPanel'
import WithdrawCoursesTable from '../../../components/fullTable/WithdrawCourseTable'
import ToAllCoursesBtn from '../../../components/fullPanelButtons/ToAllCoursesBtn'
import Modal from '../../../components/modal/Modal'

const CourseWithdrawalPage = () => {
  // State Variables
  const {userCourses, setUserCourses} = useContext(UserContext)
  const [courseInfo, setCourseInfo] = useState({})
  const [showModal, setShowModal] = useState(false)
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
  let withdrawHeader = language == "en" ? "Withdraw" : "退选"
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "withdraw",
        Header: withdrawHeader, 
        Cell: ({row}) => (
          <button className="tableBtn" onClick={() => handleClick(row.original)} >
            {language == "en" ? "Withdraw" : "退选"}
          </button>
        )
      }
    ])
  }

  // Functions
  const handleClick = (course) => {
    console.log(course)
    setCourseInfo(course)
    setShowModal(true)
  }

  const handleWithdraw = (course) => {
    const newCourses = userCourses.filter(currCourse => currCourse.code !== course.code)
    setUserCourses(newCourses)
    setShowModal(false)
  }

  // Render
  const {name, chi_name, code, taughtBy, department_eng, department_chi, category, category_chi, level, credit} = courseInfo
  return (
    <div className="appWrapper">
      <div className="courseWithdrawalPage" >
        <FullPanel title={language == "en" ? "Course Withdrawal" : "课程退选"} button={ToAllCoursesBtn} >
          <WithdrawCoursesTable columns={language == "en" ? columns : chi_columns} data={data} tableHooks={tableHooks} />
        </FullPanel>
        {showModal && (
          <Modal setShowModal={setShowModal} >
            <div className="courseInfoTitle">
              <h3>{language == "en" ? "Course Informations" : "课程信息"}</h3>
            </div>
            <div className="courseInfoGroup">
              <div className="groupLeft">
                <p>{language == "en" ? "Course name: " : "课程名: "}{language == "en" ? name : chi_name}</p>
                <p>{language == "en" ? "Course code: " : "课程码: "}{code}</p>
                <p>{language == "en" ? "Professor: " : "教师: "}{taughtBy}</p>
                <p>{language == "en" ? "Department: " : "学院: "}{language == "en" ? department_eng : department_chi}</p>
              </div>
              <div className="groupRight">
                <p>{language == "en" ? "Category: " : "课程类别: "}{language == "en" ? category : category_chi}</p>
                <p>{language == "en" ? "Course level: " : "年级: "}{level}</p>
                <p>{language == "en" ? "Credits: " : "学分: "}{credit}</p>
              </div>
            </div>
            <div className="confirmGroup">
              <span>{language == "en" ? "Please confirm course withdrawal " :"请确认退课 "}</span>
              <button className="confirmButton"onClick={() => handleWithdraw(courseInfo)} >{language == "en" ? "Confirm" : "确认"}</button>
            </div>

          </Modal>
        )}
      </div>
    </div>
  )
}

export default CourseWithdrawalPage
