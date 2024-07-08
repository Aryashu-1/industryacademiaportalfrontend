import React, { useState } from 'react'
import { FacultyContext } from '../Contexts/FacultyContext'

const FacultyStores = ({children}) => {
    const [faculty,setFaculty] = useState([])
  return (
    <div>
        <FacultyContext.Provider value={[faculty,setFaculty]}>
            {children}
        </FacultyContext.Provider>
    </div>
  )
}

export default FacultyStores