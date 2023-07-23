
import React from 'react'
import {Routes, Route} from "react-router-dom"
import { AdminDashboard } from '../pages/Admin/AdminDashboard'
import { AddList } from '../pages/Admin/AddList'
import { OurVolunteer } from '../pages/Admin/OurVolunteer'
import { EditSinglePage } from '../pages/Admin/EditSinglePage'
import { AdminSidebar } from '../Components/AdminComponents/AdminSidebar'
import Homepage from '../pages/Homepage'
import Signup from '../pages/SignUp'


import Simple from "../pages/VolunteerSinglePage";




import Volunteers from "../pages/Volunteers"
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/admin" element={<AdminSidebar/>} />
      <Route path="/editvolunteer/:id" element={<EditSinglePage />} />
      <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/volunteers/:id" element={<Simple />}></Route>



<Route path='/signup' element = { <Signup/> }  />




    </Routes>
  );
};
