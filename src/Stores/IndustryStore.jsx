import React, { useState } from 'react'
import { IndustryContext } from '../Contexts/IndustryContext'

const IndustryStore = ({children}) => {
    const [industries,setIndustries] = useState([])
  return (
    <div>
        <IndustryContext.Provider value={[industries,setIndustries]}>
            {children}
        </IndustryContext.Provider>
    </div>
  )
}

export default IndustryStore