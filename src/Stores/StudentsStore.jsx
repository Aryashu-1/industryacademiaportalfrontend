import { useContext } from "react";
import React, { useState } from 'react'
import { StudentsContext } from "../Contexts/StudentsContext";


const StudentsStore = ({children}) => {
    let [students,setStudents] = useState([])
  return (
    <div>
      <StudentsContext.Provider value={[students,setStudents]}>
        {children}
      </StudentsContext.Provider>
    </div>
  )
}

export default StudentsStore