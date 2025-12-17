import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'

const RelatedDoctors = ({speciality,docId}) => {

    const {doctors} = useContext(AppContext)

    const[relDoc, setRelDoc] = useState([])

    useEffect(() => {

    }, [doctors,speciality,docId])
  return (
    <div></div>
  )
}

export default RelatedDoctors