import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import TextInput from '../components/TextInput'
import InfoBtn from '../components/InfoBtn'
import * as Actions from '../../store/actions/businessCardActions'
import styles from './InfoInput.module.css'

function InfoInput() {
  const [name, setName] = useState('')
  const handleNameChange = useCallback(
    (evt) => {
      setName(evt.target.value)
    },
    [setName]
  )
  const [job, setJob] = useState('')
  const handleJobChange = useCallback(
    (evt) => {
      setJob(evt.target.value)
    },
    [setJob]
  )
  const [email, setEmail] = useState('')
  const handleEmailChange = useCallback(
    (evt) => {
      setEmail(evt.target.value)
    },
    [setEmail]
  )
  const dispatch = useDispatch()
  const createBusinessCard = useCallback(
    (infoName, infoJob, infoEmail) => {
      dispatch(Actions.createBusinessCard(infoName, infoJob, infoEmail))
    },
    [dispatch]
  )
  const createInfo = useCallback(
    () => {
      createBusinessCard(name, job, email)
      setName('')
      setJob('')
      setEmail('')
    },
    [createBusinessCard, name, setName, job, setJob, email, setEmail]
  )
  const deleteBusinessCard = useCallback(
    () => {
      dispatch(Actions.deleteBusinessCard())
    },
    [dispatch]
  )
  const deleteInfo = useCallback(
    () => {
      deleteBusinessCard()
      setName('')
      setJob('')
      setEmail('')
    },
    [deleteBusinessCard, setName, setJob]
  )
  return (
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        <TextInput title='Nome:' value={name} charLimit={20} changed={handleNameChange}/>
        <TextInput title='Profissão:' value={job} charLimit={20} changed={handleJobChange}/>
        <TextInput title='Email:' value={email} charLimit={20} changed={handleEmailChange}/>
      </div>
      <div className={styles.btnGroup}>
        <InfoBtn title='Criar' clicked={createInfo}/>
        <InfoBtn title='Deletar' clicked={deleteInfo}/>
      </div>
    </div>
  )
}

export default InfoInput