import React from 'react'

function InfoBtn(props) {
  return (
    <button onClick={props.clicked}>{props.title}</button>
  )
}

export default InfoBtn