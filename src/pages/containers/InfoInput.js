import React, { useState, useCallback } from 'react'
import TextInput from '../components/TextInput'
import SubmitBtn from '../components/SubmitBtn'
import styles from './InfoInput.module.css'

function InfoInput() {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const handleNameChange = useCallback(
    (evt) => {
      setName(evt.target.value)
    },
    [setName]
  )
  const handleJobChange = useCallback(
    (evt) => {
      setJob(evt.target.job)
    },
    [setJob]
  )
  const submitInfo = useCallback(
    (evt) => {
      evt.preventDefault()
      window.alert('Cartão criado!')
    },
    []
  )
  return (
    <div className={styles.container}>
      <form onSubmit={submitInfo}>
        <TextInput title='Nome:' value={name} changed={handleNameChange}/>
        <TextInput title='Profissão:' value={job} changed={handleJobChange}/>
        <SubmitBtn value='Criar'/>
      </form>
    </div>
  )
}

export default InfoInput