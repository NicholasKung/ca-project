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
      console.log(`Error fetching applicants: ${error.message}`)
    })
  }, [])

  const deleteApplicant = (applicantId) => {
    fetch(`/api/v1/applicants/${applicantId}`, {
      credentials: "same-origin",
      method: 'DELETE',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
         error = new Error(errorMessage)
        throw error
      }
    })
      .then(response => response.json())
      .then(body => {
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  const applicantTiles = applicants.map((applicant) => {
    return (
      <ApplicantTile
        key={applicant.id}
        ApplicantData={applicant}
        deleteApplicant={deleteApplicant}
      />
    )
  })

  return(
    <div>
      <ol>
        {applicantTiles}
      </ol>
    </div>
  )
}

export default ApplicantListContainer
