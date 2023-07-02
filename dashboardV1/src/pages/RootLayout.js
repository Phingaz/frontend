import { Outlet } from '@mui/icons-material'
import { SideBar } from '../components/SideBar'
import React from 'react'

export const RootLayout = () => {
    return (
        <>
            <SideBar />
            <Outlet />
        </>
    )
}
