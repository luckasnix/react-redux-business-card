import React from 'react'
import styles from './BusinessCard.module.css'

function BusinessCard(props) {
  return (
    <div className={styles.container}>
      <p>{props.name}</p>
      <p>{props.job}</p>
    </div>
  )
}

export default BusinessCard