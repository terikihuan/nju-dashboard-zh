import React, {useContext, useRef} from 'react'
import './authCard.css'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../contexts/AuthContext'
import { ThemeContext } from '../../contexts/ThemeContext'

const AuthCardRegister = () => {
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
    <div className="authCardRegister">
      <form action="" className="authCardForm" onSubmit={handleSubmit}>
        <h1 className="authCardFormTitle" >{language == "en" ? "Register" : "注册"}</h1>
        <input type="text" placeholder={language == "en" ? "Name" : "姓名"} ref={tempUserRef}/>
        <input type="text" placeholder={language == "en" ? "Student ID" : "学号"}/>
        <input type="password" placeholder={language == "en" ? "Password" : "密码"} />
        <button className="authFormButton" type="submit">{language == "en" ? "Register" : "注册"}</button>
        <p className="authCardAltButton">
          <Link to="/login" className="link">{language == "en" ? "To Login" : "登录"}</Link>
        </p>
      </form>
    </div>
  )
}

export default AuthCardRegister
