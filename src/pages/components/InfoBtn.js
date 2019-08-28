import React from 'react'
import styles from './InfoBtn.module.css'

function InfoBtn(props) {
  return (
    <button className={styles.btn} onClick={props.clicked}>{props.title}</button>
  )
}

export default InfoBtn