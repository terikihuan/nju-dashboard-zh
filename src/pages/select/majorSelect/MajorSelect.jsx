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
      Header: "?????????",
      accessor: "code",
      className: "tableHeader codeCol",
    },
    {
      Header: "?????????",
      accessor: "chi_name",
    },
    {
      Header: "??????",
      accessor: "taughtBy",
      className: "tableHeader teacherCol",
    },
    {
      Header: "??????",
      accessor: "department_chi",
      Filter: SelectColumnFilter,
    },
    {
      Header: "??????",
      accessor: "level",
      Filter: SelectColumnFilter,
    },
    {
      Header: "????????????",
      accessor: "category_chi",
      Filter: SelectColumnFilter,
    },
    {
      Header: "??????",
      accessor: "credit",
      Filter: SelectColumnFilter,
    },
  ], [])
  const defaultColumn = useMemo(() => {
    return { Filter: ColumnFilter }
  }, [])
  let enrollHeader = language == "en" ? "Enroll" : "??????"
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "enroll",
        Header: enrollHeader, 
        Cell: ({row}) => (
          <button className="tableBtn" onClick={() => handleClick(row.original)} >
            {language == "en" ? "Enroll" : "??????"}
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
        <FullPanel title={language == "en" ? "Major Courses" : "????????????" } button={ToMyCoursesBtn}>
          <SelectCourseTable columns={language == "en" ? columns : chi_columns} data={data} defaultColumn={defaultColumn} tableHooks={tableHooks} />
        </FullPanel>
        {showModal && (
          <Modal setShowModal={setShowModal}>
            <div className="courseInfoTitle">
              <h3>{language == "en" ? "Course Informations" : "????????????"}</h3>
            </div>
            <div className="courseInfoGroup">
              <div className="groupLeft">
                <p>{language == "en" ? "Course name: " : "?????????: "}{language == "en" ? name : chi_name}</p>
                <p>{language == "en" ? "Course code: " : "?????????: "}{code}</p>
                <p>{language == "en" ? "Professor: " : "??????: "}{taughtBy}</p>
                <p>{language == "en" ? "Department: " : "??????: "}{language == "en" ? department_eng : department_chi}</p>
              </div>
              <div className="groupRight">
                <p>{language == "en" ? "Category: " : "????????????: "}{language == "en" ? category : category_chi}</p>
                <p>{language == "en" ? "Course level: " : "??????: "}{level}</p>
                <p>{language == "en" ? "Credits: " : "??????: "}{credit}</p>
              </div>
            </div>
            <div className="confirmGroup">
              {allowEnroll 
                ? (
                  <>
                    <span>{language == "en" ? "Please confirm course enrollment" :"???????????????"}</span>
                    <button className="confirmButton" onClick={() => handleEnroll(courseInfo)}>{language == "en" ? "Confirm" : "??????"}</button>
                  </>
                ) : (
                  <p>{language == "en" ? "You're currently taking this course" : "????????????????????????"}</p>
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
