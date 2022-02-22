import React from "react"

import { Outlet } from 'react-router-dom'


const PreGame = ({ children }) => {
	return <>
		<Outlet/>
	</>
}

export default PreGame