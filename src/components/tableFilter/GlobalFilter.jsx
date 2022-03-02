import React, { useState, useContext } from "react";
import { useAsyncDebounce } from "react-table";
import './tableFilter.css'
import { ThemeContext } from "../../contexts/ThemeContext";

const GlobalFilter = ({
  preGlobalFilteredRows,
  setGlobalFilter,
  globalFilter,
}) => {
  // State variables
  const count = preGlobalFilteredRows.length
  const [value, setValue] = useState(globalFilter)
  const {language} = useContext(ThemeContext)

  // Functions
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 300)

  // Render
  return (
    <div className="globalFilterContainer">
      <label className="globalFilterLabel"></label>
      <input
        className="globalFilterInput"
        value={value || ""} 
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder={language == "en" ? `Search ${count} records...` : `搜索${count}个结果...`}
      />
    </div>
  )
}

export default GlobalFilter