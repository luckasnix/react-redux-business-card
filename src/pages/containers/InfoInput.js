import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import TextInput from '../components/TextInput'
import InfoBtn from '../components/InfoBtn'
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
  const deleteBusinessCard = useCallback(
    () => {
      dispatch(Actions.deleteBusinessCard())
    },
    [dispatch]
  )
  const createInfo = useCallback(
    () => {
      createBusinessCard(name, job)
      setName('')
      setJob('')
    },
    [createBusinessCard, name, setName, job, setJob]
  )
  const deleteInfo = useCallback(
    () => {
      deleteBusinessCard()
      setName('')
      setJob('')
    },
    [deleteBusinessCard, setName, setJob]
  )
  return (
    <div className={styles.container}>
      <TextInput title='Nome:' value={name} changed={handleNameChange}/>
      <TextInput title='Profissão:' value={job} changed={handleJobChange}/>
      <InfoBtn title='Criar' clicked={createInfo}/>
      <InfoBtn title='Deletar' clicked={deleteInfo}/>
    </div>
  )
}

export default InfoInput