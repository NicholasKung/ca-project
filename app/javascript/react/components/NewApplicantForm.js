import React from 'react'

const NewApplicantForm = props => {



  return(
    <div>
      <form>
        <label htmlFor="first">First Name</label>
        <input id="first" type ="text" value=""/>

        <label htmlFor="second">First Name</label>
        <input id="second" type ="text" value=""/>

        <label htmlFor="description">First Name</label>
        <input id="description" type ="text" value=""/>

        <input type="submit" value="Enter"/>
      </form>
    </div>

  )
}

export default NewApplicantContainer
