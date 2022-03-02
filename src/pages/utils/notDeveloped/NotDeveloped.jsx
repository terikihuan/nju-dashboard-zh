import React, {useContext} from "react"
import './notDeveloped.css'
import { ThemeContext } from "../../../contexts/ThemeContext"

const NotDevelopedPage = () => {
  // State variables
  const {language} = useContext(ThemeContext)

  return (
    <div className="appWrapper">
      <div className="notDeveloped">
        <div className="errorMessageWrapper">
          {language == "en" ? (
            <h1>Sorry! This page is not yet developed. 😞</h1>
          ) : (
            <h1>抱歉! 此功能未开发. 😞</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default NotDevelopedPage
