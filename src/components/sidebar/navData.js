import React from "react"
import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io"
import * as RiIcons from "react-icons/ri"
import * as BiIcons from "react-icons/bi"
import * as CgIcons from "react-icons/cg"
import * as MdIcons from "react-icons/md"

const navData = [
  {
    title: "User",
    chi_title: "个人信息",
    path: "/user",
    icon: <FaIcons.FaRegUser />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Student Info",
        chi_title: "学生信息",
        path: "/user/studentInfo",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Transcript",
        chi_title: "成绩查看",
        path: "/user/transcript",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Course Retake",
        chi_title: "重修申请",
        path: "/user/courseRetake",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Academic Review",
        chi_title: "学业审核查看",
        path: "/user/review",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Exam Retake",
        chi_title: "补考申请",
        path: "/user/examRetake",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Change Password",
        chi_title: "修改密码",
        path: "/user/changePass",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Dissertation",
        chi_title: "论文信息",
        path: "/user/dissertation",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Course Evaluation",
        chi_title: "课程评估",
        path: "/user/evaluation",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Courses Info",
    chi_title: "教学信息",
    path: "/course",
    icon: <MdIcons.MdOutlineSchool />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "My Courses",
        chi_title: "我的课程",
        path: "/course/myCourses",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "All Courses",
        chi_title: "全校课程",
        path: "/course/allCourses",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Exam Delay",
        chi_title: "期末缓考申请",
        path: "/course/examDelay",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Courses Select",
    chi_title: "学期选课",
    path: "/select",
    icon: <BiIcons.BiSelectMultiple />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Major courses",
        chi_title: "专业选课",
        path: "/select/majorSelect",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Cross-major courses",
        chi_title: "跨专业选课",
        path: "/select/crossSelect",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Common courses",
        chi_title: "通修课选课",
        path: "/select/commonSelect",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Public courses",
        chi_title: "公选课",
        path: "/select/publicSelect",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Course Exemption",
        chi_title: "免修不免考申请",
        path: "/select/exemption",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Course Withdrawal",
        chi_title: "课程退选",
        path: "/select/withdrawal",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Exchange",
    chi_title: "校际交换",
    path: "/exchange",
    icon: <CgIcons.CgArrowsExchangeAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Exchange Records",
        chi_title: "交换学期信息备案",
        path: "/exchange/records",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "National Program",
        chi_title: "国内交换项目申请",
        path: "/exchange/nationalExchange",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Exchange Transcript",
        chi_title: "成绩转换申请",
        path: "/exchange/exchangeTranscipt",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
]

export default navData
