import React, {useContext, useRef} from 'react'
import './authCard.css'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../contexts/AuthContext'
import { ThemeContext } from '../../contexts/ThemeContext'

const AuthCardLogin = () => {
  // State variables
  const {setTempUser} = useContext(AuthContext)
  const tempUserRef = useRef()
  const {language} = useContext(ThemeContext)
  
  // Functions
  const handleSubmit = (e) => {
    e.preventDefault()
    setTempUser(tempUserRef.current.value)
    window.location.replace('/')
  }

  return (
    <div className="authCardLogin">
      <form action="" className="authCardForm" onSubmit={handleSubmit}>
        <h1 className="authCardFormTitle" >{language == "en" ? "Login" : "登录"}</h1>
        {/* Remove below when implement back-end */}
        <input type="text" placeholder={language == "en" ? "Name" : "姓名"} ref={tempUserRef}/>
        {/* Remove above when implement back-end */}
        <input type="text" placeholder={language == "en" ? "Student ID" : "学号"} />
        <input type="password" placeholder={language == "en" ? "Password" : "密码"}/>
        
        <button className="authFormButton">{language == "en" ? "Login" : "登录"}</button>
        <p className="authCardAltButton">
          <Link to="/register" className="link">{language == "en" ? "To Register" : "注册"}</Link>
        </p>
      </form>
    </div>
  )
}

export default AuthCardLogin
