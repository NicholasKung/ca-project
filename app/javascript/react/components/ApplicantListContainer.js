import React, {useState, useEffect} from 'react'

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
      setCards(body)
    })
    .catch(error => {
      console.log(`Error fetching cards: ${error.message}`)
    })
  }, [])

  return(
    <div>
    </div>
  )
}

export default ApplicantListContainer
