import React from 'react'

const ApplicantTile = (props) => {

  return(
    <div>
      <ol>
        <li>Applicant Name: {props.ApplicantData.first} {props.ApplicantData.last}</li>
        <p>Description: {props.ApplicantData.description}</p>
      </ol>
    </div>

  )
}

export default ApplicantTile
