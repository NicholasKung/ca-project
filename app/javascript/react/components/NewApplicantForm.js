import React, {useState, useEffect} from 'react'


const NewApplicantForm = props => {

  const [newApplicant, setNewApplicant] = useState({
    first: "",
    last: "",
    description: ""
  })

  const handleChange = (event) => {
    setNewApplicant({
      ...newApplicant,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let formPayLoad = newApplicant
    props.onSubmit(formPayLoad)
    setNewApplicant({
      first:"",
      last:"",
      description:""
    })
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">First Name</label>
        <input id="first" type ="text" value={newApplicant.first} onChange={handleChange}/>

        <label htmlFor="last">Last Name</label>
        <input id="last" type ="text" value={newApplicant.last} onChange={handleChange}/>

        <label htmlFor="description">Description</label>
        <input id="description" type ="text" value={newApplicant.description} onChange={handleChange}/>

        <input type="submit" value="Enter"/>
      </form>
    </div>

  )
}

export default NewApplicantForm
