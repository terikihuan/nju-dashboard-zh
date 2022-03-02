import React, { useState, useMemo, useContext, useEffect, useRef} from 'react'
import AllCourses from '../../../data/courseData/AllCourses.json'
import './majorSelect.css'
import {UserContext} from '../../../contexts/UserContext'
import { ThemeContext } from '../../../contexts/ThemeContext'
// Components
import FullPanel from '../../../components/fullPanel/FullPanel'
import SelectCourseTable from '../../../components/fullTable/SelectCourseTable'
import ColumnFilter from '../../../components/tableFilter/ColumnFilter'
import SelectColumnFilter from '../../../components/tableFilter/SelectColumnFilter'
import ToMyCoursesBtn from '../../../components/fullPanelButtons/ToMyCoursesBtn'
import Modal from '../../../components/modal/Modal'

const MajorCoursesSelectPage = () => {
  // State Variables
  const [showModal, setShowModal] = useState(false)
  const [courseInfo, setCourseInfo] = useState({})
  const [allowEnroll, setAllowEnroll] = useState(false)
  const {userCourses, setUserCourses} = useContext(UserContext)
  const latestCourses = useRef([])
  const {language} = useContext(ThemeContext)

  // Functions
  const handleClick = async (course) => {
    setCourseInfo(course)
    setShowModal(true)
    const isDuplicate = latestCourses.current.filter(currCourse => currCourse.code === course.code).length
    if (isDuplicate) {
      setAllowEnroll(false)
    } else {
      setAllowEnroll(true)
    }
  }
  const handleEnroll = (course) => {
    setUserCourses(prevCourses => [...prevCourses, course])
    setShowModal(false)
  }

  // Effects
  useEffect(() => {
    latestCourses.current = userCourses
  }, [showModal, userCourses])

  useEffect(() => {
    setUserCourses(userCourses)
  }, [showModal, handleClick])

  // React Table variables
  const data = useMemo(() => [...AllCourses], [AllCourses])
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
      Filter: SelectColumnFilter,
    },
    {
      Header: "Level",
      accessor: "level",
      Filter: SelectColumnFilter,
    },
    {
      Header: "Category",
      accessor: "category",
      Filter: SelectColumnFilter,
    },
    {
      Header: "Credit",
      accessor: "credit",
      Filter: SelectColumnFilter,
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
      Filter: SelectColumnFilter,
    },
    {
      Header: "年级",
      accessor: "level",
      Filter: SelectColumnFilter,
    },
    {
      Header: "课程类别",
      accessor: "category_chi",
      Filter: SelectColumnFilter,
    },
    {
      Header: "学分",
      accessor: "credit",
      Filter: SelectColumnFilter,
    },
  ], [])
  const defaultColumn = useMemo(() => {
    return { Filter: ColumnFilter }
  }, [])
  let enrollHeader = language == "en" ? "Enroll" : "选课"
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "enroll",
        Header: enrollHeader, 
        Cell: ({row}) => (
          <button className="tableBtn" onClick={() => handleClick(row.original)} >
            {language == "en" ? "Enroll" : "选课"}
          </button>
        )
      }
    ])
  }
  
  // Render
  const {name, chi_name, code, taughtBy, department_eng, department_chi, category, category_chi, level, credit} = courseInfo
  return (
    <div className="appWrapper">
      <div className="majorCoursesSelectPage">
        <FullPanel title={language == "en" ? "Major Courses" : "专业选课" } button={ToMyCoursesBtn}>
          <SelectCourseTable columns={language == "en" ? columns : chi_columns} data={data} defaultColumn={defaultColumn} tableHooks={tableHooks} />
        </FullPanel>
        {showModal && (
          <Modal setShowModal={setShowModal}>
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
              {allowEnroll 
                ? (
                  <>
                    <span>{language == "en" ? "Please confirm course enrollment" :"请确认选课"}</span>
                    <button className="confirmButton" onClick={() => handleEnroll(courseInfo)}>{language == "en" ? "Confirm" : "确认"}</button>
                  </>
                ) : (
                  <p>{language == "en" ? "You're currently taking this course" : "您正在修读此门课"}</p>
                )
              }
            </div>
          </Modal>
        )}
      </div>
    </div>
  )
}

export default MajorCoursesSelectPage
