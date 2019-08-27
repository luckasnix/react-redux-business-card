import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import TextInput from '../components/TextInput'
import SubmitBtn from '../components/SubmitBtn'
import * as Actions from '../../store/actions/businessCardActions'
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
      setJob(evt.target.value)
    },
    [setJob]
  )
  const dispatch = useDispatch()
  const createBusinessCard = useCallback(
    (infoName, infoJob) => {
      dispatch(Actions.createBusinessCard(infoName, infoJob))
    },
    [dispatch]
  )
  const submitInfo = useCallback(
    (evt) => {
      evt.preventDefault()
      createBusinessCard(name, job)
    },
    [createBusinessCard, name, job]
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