//import React from 'react'

import { Outlet } from "react-router-dom"
import Footer from "../Footer"
const WebLayout = () => {
    return (
        <>
            <main>
                {<Outlet />}
            </main>
            <Footer />
        </>
    )
}
export default WebLayout