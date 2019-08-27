import React from 'react'
import { useSelector } from 'react-redux'
import styles from './BusinessCard.module.css'

function BusinessCard() {
  const businessCard = useSelector(
    (state) => {
      return state.businessCard
    }
  )
  return (
    businessCard &&
    <div className={styles.container}>
      <p>{businessCard.name}</p>
      <p>{businessCard.job}</p>
    </div>
  )
}

export default BusinessCard