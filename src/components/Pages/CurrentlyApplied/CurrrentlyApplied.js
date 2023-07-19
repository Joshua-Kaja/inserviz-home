import React from 'react'
import Wrapper from '../Wrapper'
import AppliedJob from '../../AppliedJobsTable/AppliedJob'
import './CurrentlyApplied.css'

const CurrrentlyApplied = () => {
  return (
<Wrapper className='applied_jobs'>
  <AppliedJob/>
</Wrapper>
  )
}

export default CurrrentlyApplied