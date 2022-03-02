import React, {useMemo, useContext} from 'react'
import AllCourses from '../../../data/courseData/AllCourses.json'
import './allCourses.css'
import { ThemeContext } from '../../../contexts/ThemeContext'

// Components
import FullPanel from '../../../components/fullPanel/FullPanel'
import AllCoursesTable from '../../../components/fullTable/AllCoursesTable'
import ColumnFilter from '../../../components/tableFilter/ColumnFilter'
import SelectColumnFilter from '../../../components/tableFilter/SelectColumnFilter'
import ToSelectCourseBtn from '../../../components/fullPanelButtons/ToSelectCourseBtn'


const AllCoursesPage = () => {
  // State variables
  const {language} = useContext(ThemeContext)

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
  

  // Render
  return (
    <div className="appWrapper">
      <div className="allCoursesPage">
        <FullPanel title={language == "en" ? "All Courses" : "全校课程"} button={ToSelectCourseBtn}>
          <AllCoursesTable columns={language == "en" ? columns : chi_columns} data={data} defaultColumn={defaultColumn} />
        </FullPanel>
      </div>
    </div>
  )
}

export default AllCoursesPage
