import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'

const RelatedDoctors = ({speciality,docId}) => {

    const {doctors} = useContext(AppContext)

    const[relDoc, setRelDoc] = useState([])

    useEffect(() => {
        if (doctors.lenght > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)
        }
    }, [doctors,speciality,docId])
  return (
    <div></div>
  )
}

export default RelatedDoctors