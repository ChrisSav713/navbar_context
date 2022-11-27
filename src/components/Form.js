import React, { useState, useEffect, useContext } from 'react'
import bootForm from 'react-bootstrap/Form'
import { NavContext } from '../App'

function Form() {
    const { name, setName, handleTextChange } = useContext(NavContext)
    
    return (
        <bootForm.Group className="w-50 m-auto mt-5">
            <bootForm.Label>Who is signed in?</bootForm.Label>
            <bootForm.Control onInput={handleTextChange} type="text" value={name}/>
        </bootForm.Group>
    )
}

export default Form