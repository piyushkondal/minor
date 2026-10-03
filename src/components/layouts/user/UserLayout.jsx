import React from 'react'
import UserFooter from './UserFooter'
import UserHeader from './UserHeader'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <>
    
    <UserHeader/>
     <Outlet/>
     <UserFooter/>
    </>
  )
}

export default UserLayout