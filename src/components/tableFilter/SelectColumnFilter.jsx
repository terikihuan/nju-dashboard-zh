import React, { useMemo, useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

const SelectColumnFilter = ({column: { filterValue, setFilter, preFilteredRows, id }}) => {
  // State variables
  const {language} = useContext(ThemeContext)

  // Calculate filter options
  const options = useMemo(() => {
    const newOptions = new Set()
    preFilteredRows.forEach(row => {
      newOptions.add(row.values[id])
    })
    return [...newOptions.values()]
  }, [id, preFilteredRows])

  // Render
  return (
    <select
      value={filterValue}
      onChange={(e) => setFilter(e.target.value || undefined)}
    >
      <option value="">{language == "en" ? "All" : "所有"}</option>
      {options.map((option, i) => (
        <option key={i} value={option} >{option}</option>
      ))}
    </select>
  )
}

export default SelectColumnFilter
