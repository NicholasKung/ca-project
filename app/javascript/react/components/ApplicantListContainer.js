import React, {useState, useEffect} from 'react'
import ApplicantTile from './ApplicantTile'

const ApplicantListContainer = props => {
  const [applicants, setApplicants] = useState([])

  useEffect(() =>{
    fetch('/api/v1/applicants.json')
    .then(response => {
      if(response.ok) {
        return response
      } else {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
    })
    .then(response => response.json())
    .then(body => {
      setApplicants(body)
    })
    .catch(error => {
      console.log(`Error fetching cards: ${error.message}`)
    })
  }, [])

  const applicantTiles = applicants.map((applicant) => {
    return (
      <ApplicantTile
        key={applicant.id}
        ApplicantData={applicant}
      />
    )
  })

  return(
    <div>
      {applicantTiles}
    </div>
  )
}

export default ApplicantListContainer
