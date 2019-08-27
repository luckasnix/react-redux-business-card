import React from 'react'

function TextInput(props) {
  return (
    <label>
      {props.title}
      <input
        type='text'
        value={props.value}
        onChange={props.changed}
      />
    </label>
  )
}

export default TextInput