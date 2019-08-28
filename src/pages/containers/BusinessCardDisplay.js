import React from 'react'
import { useSelector } from 'react-redux'
import BusinessCard from '../components/BusinessCard'
import styles from './BusinessCardDisplay.module.css'

function BusinessCardDisplay() {
  const businessCard = useSelector(
    (state) => {
      return state.businessCard
    }
  )
  return (
    <div className={styles.container}>
      {
        businessCard &&
        <BusinessCard
          name={businessCard.name}
          job={businessCard.job}
          email={businessCard.email}
        />
      }
    </div>
  )
}

export default BusinessCardDisplay