import React from 'react'
import InfoInput from './containers/InfoInput'
import BusinessCard from './containers/BusinessCard'

function BusinessCardPage() {
  return (
    <>
      <InfoInput/>
      <BusinessCard name={'Lucas'} job={'Desenvolvedor React'}/>
    </>
  )
}

export default BusinessCardPage