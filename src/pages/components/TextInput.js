import React from 'react'
import styles from './TextInput.module.css'

function TextInput(props) {
  return (
    <label className={styles.group}>
      {props.title}
      <input
        className={styles.input}
        type='text'
        value={props.value}
        maxLength={props.charLimit}
        onChange={props.changed}
      />
    </label>
  )
}

export default TextInput