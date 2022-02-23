import React, { useEffect } from "react"
import { Outlet } from 'react-router-dom'
import useSocket from "../hooks/useSocket"

const PreGame = () => {

	const socket = useSocket('ws://localhost:3001')

	useEffect(() => {
		if (socket)
		{
			console.log("Socket modified", socket)
			socket.on("connect", () => {
				console.log("Socket connected")
			})
			console.log("Socket props added")
		}
	}, [socket])

	return <>
		{ socket  && <Outlet context = {socket}/> }
	</>
}

export default PreGame