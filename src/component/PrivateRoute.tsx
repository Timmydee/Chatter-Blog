import React, { useState } from 'react'
import { Outlet, Navigate } from 'react-router'
import Sign from '../pages/Sign'
import AuthUser from '../Hooks/AuthUser'

const PrivateRoute = () => {
    const {loggedIn, checking} = AuthUser()
    
    if (checking) {
        return <h1>Loading</h1>
    }
    return loggedIn ? <Outlet /> :  <Navigate to = "/signin" />
}

export default PrivateRoute