import React, { useState } from 'react'

const ApplicantTile = (props) => {

  const [selected, setSelected] = useState(false)

  const handleCheckBoxChange = () => {
    setSelected = true
  }


  const isSelected = () => {
    if (props.ApplicantData.selected) {
      return "true"
    } else {
      return "false"
    }
  }

  return(
    <div>
      <ol>
        <li>Applicant Name: {props.ApplicantData.first} {props.ApplicantData.last}</li>
        <p>Description: {props.ApplicantData.description}</p>
        <p>Selected: {isSelected()}</p>
        <input
          type="checkbox"
          name="selected"
          onChange={handleCheckBoxChange}
        />
      </ol>
    </div>

  )
}

export default ApplicantTile
