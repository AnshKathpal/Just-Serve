import React from 'react'
import {Routes, Route} from "react-router-dom"
import { AdminDashboard } from '../pages/Admin/AdminDashboard'
import { AddList } from '../pages/Admin/AddList'
import { OurVolunteer } from '../pages/Admin/OurVolunteer'

export const MainRoutes = () => {
  return (

    <Routes>

<Route path='/admindashboard' element = { <AdminDashboard/> }  />
<Route path='/addvolunteers' element = { <AddList/> }  />
<Route path="/ourvolunteers" element = { <OurVolunteer/> } />
    </Routes>

  )
}
