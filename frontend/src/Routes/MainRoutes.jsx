import React from 'react'
import {Routes, Route} from "react-router-dom"
import { AdminDashboard } from '../pages/Admin/AdminDashboard'
import { AddList } from '../pages/Admin/AddList'
import { OurVolunteer } from '../pages/Admin/OurVolunteer'
import { EditSinglePage } from '../pages/Admin/EditSinglePage'
import { AdminSidebar } from '../Components/AdminComponents/AdminSidebar'
import Homepage from '../pages/Homepage'
import Signup from '../pages/SignUp'

export const MainRoutes = () => {
  return (

    <Routes>

<Route path='/' element = { <Homepage/> }  />
<Route path='/admin' element = { <AdminSidebar/> }  />
<Route path='/signup' element = { <Signup/> }  />
{/* <Route path='/addvolunteers' element = { <AddList/> }  /> */}
{/* <Route path="/ourvolunteers" element = { <OurVolunteer/> } /> */}
<Route path="/editvolunteer" element = {< EditSinglePage />} />
    </Routes>

  )
}
