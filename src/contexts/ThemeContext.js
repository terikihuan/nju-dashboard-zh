import React, { useState, useEffect } from "react"

export const ThemeContext = React.createContext()

const ThemeContextProvider = ({ children }) => {
  // Default values
  const defaultFavNav = [
    "Transcript",
    "My Courses",
    "All Courses",
    "Major courses",
    "Course Withdrawal",
    "Student Info",
  ]

  // State variables
  const [language, setLanguage] = useState(
    JSON.parse(localStorage.getItem("language")) || "en"
  )
  const [isDarkmode, setIsDarkmode] = useState(false)
  const [favoriteNavs, setFavoriteNavs] = useState(defaultFavNav)

  // Effects
  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language))
  }, [language])

  // Context values
  const contextValue = {
    language,
    isDarkmode,
    setLanguage,
    setIsDarkmode,
    favoriteNavs,
    setFavoriteNavs,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
