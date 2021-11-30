import React, { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

const ProtectedRoute = ({ children }) => {
  const { tempUser } = useContext(AuthContext)

  return tempUser ? children : <Navigate to="/login" />
}

export default ProtectedRoute
