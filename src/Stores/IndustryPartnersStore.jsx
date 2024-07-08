import React, { useState } from 'react'
import { IndustryPartnersContext } from '../Contexts/IndustryPartnersContext'

const IndustryPartnersStore = ({children}) => {
    const [industryPartners,setIndustryPartners] = useState([])
  return (
    <div>
        <IndustryPartnersContext.Provider  value={[industryPartners,setIndustryPartners]}>
            {children}
        </IndustryPartnersContext.Provider>
    </div>
  )
}

export default IndustryPartnersStore