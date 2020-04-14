import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import NewApplicantForm from './NewApplicantForm.js'

const NewApplicantContainer = (props) => {
  const [ applicants, setApplicants ] = useState([])


  const submitNewApplicant = (formPayLoad) => {
    fetch('/api/v1/applicants.json', {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(formPayLoad),
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
      debugger
      setApplicants([
        ...applicants,
        body])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  return (
    <div>
      <h3>Add a new card</h3>
      <NewApplicantForm
        onSubmit = {submitNewApplicant}
      />
    </div>
  )
}

export default NewApplicantContainer
